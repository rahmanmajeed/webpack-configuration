const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
    mode:'development',
    devServer:{
        port:8080
    },
    
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-react', '@babel/preset-env'],
                plugins: ['@babel/plugin-transform-runtime'],
              },
            },
          },
        ],
      },

      plugins:[
        // new HtmlWebpackPlugin({template: './public/index.html'})
        new HtmlWebpackPlugin({template: path.resolve(__dirname, './public/index.html')})
    ],
}