// /** @type {import('next').NextConfig} */
// const withLess = require("next-with-less");
// const nextConfig = withLess({
//   reactStrictMode: true,
//   swcMinify: true,
//   images: {
//     loader: "akamai",
//     path: "",
//   },
// });

// module.exports = nextConfig;

const withAntdLess = require("next-plugin-antd-less");

module.exports = withAntdLess({
  // 修改antd的主题变量
  modifyVars: { "@primary-color": "#333", "@ant-prefix": "plm" }, // 修改antd的primary颜色为黑色
  // optional https://github.com/webpack-contrib/css-loader#object
  // cssLoaderOptions: {},
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    return config;
  },
});
