const path = require("path");
const withTypescript = require("@zeit/next-typescript");
const withImages = require('next-images');

const debug = process.env.NODE_ENV !== "production";
const assetPrefix = !debug ? "/triple-coding-nextjs/" : "";

module.exports = withImages(withTypescript({
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/intro": { page: "/intro" }
    };
  },
  assetPrefix: assetPrefix,
  webpack: config => {
    config.plugins = config.plugins || [];
    config.resolve.alias = {
      ...config.resolve.alias,
      "@styles": path.resolve(__dirname, "styles"),
      "@components": path.resolve(__dirname, "components"),
      "@pages": path.resolve(__dirname, "pages")
    };
    return config;
  }
}));
