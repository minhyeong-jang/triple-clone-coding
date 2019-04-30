const path = require("path");
const withTypescript = require("@zeit/next-typescript");

const debug = process.env.NODE_ENV !== "production";

module.exports = withTypescript({
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/intro": { page: "/intro" }
    };
  },
  assetPrefix: !debug
    ? "/triple-coding-nextjs/"
    : "",
  webpack: config => {
    config.plugins = config.plugins || [];
    config.resolve.alias = {
      ...config.resolve.alias,
      "@styles": path.resolve(__dirname, "styles"),
      "@components": path.resolve(__dirname, "components"),
      "@pages": path.resolve(__dirname, "pages")
      // '@router': path.resolve(__dirname, 'router')
    };
    return config;
  }
});
