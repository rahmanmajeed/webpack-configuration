const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  //dev-server
  devServer: {
    port: 8080,
  },

  //custom entry point...
  // entry: './src/index.js',
  entry: {
    index: "./src/index.js",
  },

  // custom output path...
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    // publicPath: '/'
    // custom asset output file
    // assetModuleFilename: 'images/[hash][ext][query]'
  },

  module: {
    // externals: {
    //   react: "React",
    // },
    rules: [
      {
        // "test" identify which files & folders should be transformed
        test: /\.m?js$/,
        exclude: /node_modules/,
        // "use" indicate which loaders should be used for transforming.
        use: {
          // if here only "babel-loader" you can load  options section from `.babelrc` file `presets`
          loader: "babel-loader",
          // options: {
          //   presets: [
          //     "@babel/preset-env",
          //     ["@babel/preset-react", { runtime: "automatic" }],
          //   ],
          //   plugins: ["@babel/plugin-transform-runtime"],
          // },
        },
      },
      //configure css & style loader
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },

      //configure sass loader
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      // asset loading configuration...
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/[name][ext][query]",
        },
      },

      // html loader config...
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
    ],
  },

  plugins: [
    // new HtmlWebpackPlugin({template: './public/index.html'})
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html"),
    }),
  ],
};
