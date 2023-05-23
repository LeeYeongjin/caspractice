const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: [".*",".js",".jsx"],
    fallback: { 
        "timers": require.resolve("timers-browserify"),
        "buffer": require.resolve("buffer/"),
        "stream": require.resolve("stream-browserify") 
    }
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
  },
  devServer: {
    static: path.resolve(__dirname, './public'),
    host: "localhost.specialurl.com",
    port: 3000,
    https: false
    // host: "appapp.io"
  },
};