module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "babel-plugin-root-import",
        {
          paths: [
            {
              "rootPathSuffix": "./src",
              "rootPathPrefix": "~/"
            },
            {
              "rootPathSuffix": './src/components/styles',
              "rootPathPrefix": "styles/"
            },
            {
              "rootPathSuffix": './src/components',
              "rootPathPrefix": "components/"
            },
            {
              "rootPathSuffix": './src/actions',
              "rootPathPrefix": "actions/"
            },
            {
              "rootPathSuffix": './src/reducers',
              "rootPathPrefix": "reducers/"
            },
            {
              "rootPathSuffix": './src/common',
              "rootPathPrefix": "common/"
            }
          ]
        }
      ]
    ]
  };
};
