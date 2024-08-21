const path = require("path");

module.exports = {
  entry: "./src/index.js", // Specify your entry point
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "bundle.js", // Output filename
  },
  mode: "development", // Set the mode to 'development' or 'production'
  module: {
    rules: [
      {
        test: /\.m?jsx?$/, // Corrected to match .js, .mjs, and .jsx files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Resolve .js and .jsx files
  },
};
