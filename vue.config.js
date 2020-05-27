module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        mock: "@/mock",
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        views: "@/views",
        network: "@/network",
        store: "@/store"
      }
    }
  }
};
