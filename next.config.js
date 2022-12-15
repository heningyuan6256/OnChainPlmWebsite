const withAntdLess = require("next-plugin-antd-less");

module.exports = withAntdLess({
  // 修改antd的主题变量
  modifyVars: { "@primary-color": "#3C82F5", "@ant-prefix": "plm" }, // 修改antd的primary颜色为黑色
  // optional https://github.com/webpack-contrib/css-loader#object
  // cssLoaderOptions: {},
  reactStrictMode: false,
  swcMinify: true,
  webpack(config) {
    return config;
  },
  images: {
    unoptimized: true,
  },
});
