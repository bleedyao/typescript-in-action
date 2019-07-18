# create hello world project with typescript

* create package.json file
  * npm init -y
* create tsconfig.json file
  * tsc --init
* create build tools
  * npm i webpack webpack-cli webpack-dev-server -D
* install ts-loader and local typescript
  * npm i ts-loader typescript -D
* install html-webpack-plugin
  * npm i html-webpack-plugin -D
* install clean-webpack-plugin for production devlopment
  * npm i clean-webpack-plugin -D
* install webpack-merge for the entry of webpack config file
  * npm i webpack-merge -D

## update script in the package.json flie

* command of starting devlopment environment
  * "start": "webpack-dev-server --mode=development --config ./build/webpack.config.js",
* command of starting production environment
  * "build": "webpack --mode=production --config ./build/webpack.config.js",
  
## datatype.ts

typescript 的基本数据类型
