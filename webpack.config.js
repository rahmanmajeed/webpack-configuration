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
            // "test" identify which files & folders should be transformed
            test: /\.m?js$/,
            exclude: /node_modules/,
            // "use" indicate which loaders should be used for transforming. 
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-react', '@babel/preset-env'],
                plugins: ['@babel/plugin-transform-runtime'],
              },
            }, 
          },
          //configure css & style loader
          {
            test: /\.css$/,
            use:['style-loader', 'css-loader']

          },

          //configure sass loader 
          {
            test: /\.scss$/,
            use:['style-loader', 'css-loader', 'sass-loader']
          },
          // asset loading
        ],
      },

      plugins:[
        // new HtmlWebpackPlugin({template: './public/index.html'})
        new HtmlWebpackPlugin({template: path.resolve(__dirname, './public/index.html')})
    ],
}