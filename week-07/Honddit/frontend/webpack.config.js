const path = require('path');
module.exports = {
    resolve: {
        alias: {
          '@actions': path.resolve(__dirname, "src/actions"),
          '@components': path.resolve(__dirname, "src/components"),
          '@reducers': path.resolve(__dirname, "src/reducers"),
          '@thunk': path.resolve(__dirname, "src/thunk")
        }
      }
};
