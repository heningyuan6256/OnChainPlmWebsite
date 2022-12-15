FROM node:16-alpine3.15 AS appbuild
WORKDIR /usr/src/app
# 依赖 && 构建
COPY . .

RUN npm install --legacy-peer-deps --registry=http://mirrors.cloud.tencent.com/npm/

RUN npm run build

FROM nginx:1.23-alpine
WORKDIR /usr/src/app

# 拷贝静态资源
COPY --from=appbuild /usr/src/app/out /www/server/dist
COPY --from=appbuild /usr/src/app/deploy/app.conf /etc/nginx/conf.d/default.conf

EXPOSE 7520

