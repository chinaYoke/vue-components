开发的时候需要构建本地服务器环境，从文件打开模式切换到服务器打开模式；
需要实现模块化的开发与封装；
需要实现文件的处理（sass转css等）、代码的解析（ES6转ES5等）、模块的打包（webpack操作）、服务的启动（webpack-dev-server等）；
需要安装npm install -g vue-cli npm install -global vue-cli
可以选择不同的Vue模板进行项目的搭建，比如simple、webpack-simple、webpack、browserify/browserify-simple等；
通过命令vue init webpack-simple my-project来实现webpack-simple模板的Vue项目的创建；
进入vue-cli目录以后需要进行npm install模块内容的初始化操作；
然后运行命令npm run dev就可以直接运行Vue初始化项目了，默认地址是http://localhost:8080
可以先查看vue-cli的项目目录结构以及文件结构内容，需要注意的是.babelrc、.gitignore、package.json以及webpack.config.js等配置文件内容。当然，主要的Vue的组件是App.vue以及主要的入口文件是main.js；
App.vue组件文件中主要包含三大部分template、script以及style来进行显示、逻辑与样式的处理；
运行命令npm run build将会生成最终压缩优化后的build.js文件，这是生产环境下的文件内容，而项目目录下也会多出一个dist目录以及build.js文件；