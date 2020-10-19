const withLess = require("@zeit/next-less");
const withPlugins = require("next-compose-plugins");
const fs = require("fs");
const path = require("path");
const lessToJs = require("less-vars-to-js");

const themeVariables = lessToJs(
  fs.readFileSync(
    path.resolve(__dirname, "styles/core/custom-vars.less"),
    "utf-8"
  )
);

const nextConfig = {
  useFileSystemPublicRoutes: true,
  distDir: "build",
  compress: true,
  trailingSlash: true,
  poweredByHeader: false,
  webpack(config, options) {
    return config;
  },
};

const AppConfig = withPlugins(
  [
    [
      withLess,
      {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: themeVariables,
            javascriptEnabled: true,
          },
        },
      },
    ],
  ],
  nextConfig
);

module.exports = AppConfig;
