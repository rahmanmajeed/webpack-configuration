# Create React App with [webpack]

## Installation

- Initialize [package.json] using.

```sh

npm init -y

git init

```

- Install [webpack] & [webpack-cli]

```sh
npm install webpack webpack-cli
or
yarn add webpack webpack-cli
```

- add `gitignore` file

```sh
touch .gitignore
```

- Configure [webpack]

1. create `webpack.config.js` file using -

```sh
touch webpack.config.js
```

2. add `mode` in `webpack.config.js` file.

```sh
module.exports = {
    mode:'development'
}
```

3. test `mode` this will create `dist` folder-

```sh
yarn webpack
```

4. add app `entry` point to project.
   .
   |-src
   | |-index.js
   |...

5. add `webpack-server` & `webpack-dev-server` -

```sh
yarn add webpack-server webpack-dev-server
```

6. add `webpack` serve command to `package.json` **scripts**

```sh
"scripts": {
    "start": "webpack serve"
  },
```

7. add _Dev Server_ in `webpack.config.js` file-

```javascript
devServer: {
  port: 8080;
}
```

8. add **html-webpack-plugin** -

```sh
yarn add html-webpack-plugin
```

9. add `public/index.html`.
   .
   |-public
   | |-index.html
   |-src
10. add `react` & `react-dom` to project-

```sh
yarn add react react-dom --save

or

npm install react react-dom --save
```

11. import `react` & `react-dom` into `src/index.js` file

```javascript
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<h1>React DOM'</h1>, document.getElementById("root"));
```

12. adding `babel` to `webpack`

```sh
yarn add @babel/core @babel/plugin-transform-runtime @babel/preset-env @babel/preset-react babel-loader --save
```

13. in `webpack.config.js`

```javascript
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
```
