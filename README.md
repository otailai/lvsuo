# lvsuo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
|----------目录结构
|-- build                            // 项目构建(webpack)相关代码
|   |-- build.js                     // 生产环境构建代码
|   |-- check-version.js             // 检查node、npm等版本
|   |-- utils.js                     // 构建工具相关
|   |-- vue-loader.conf.js           // webpack loader配置
|   |-- webpack.base.conf.js         // webpack基础配置
|   |-- webpack.dev.conf.js          // webpack开发环境配置,构建开发本地服务器
|   |-- webpack.prod.conf.js         // webpack生产环境配置
|-- config                           // 项目开发环境配置
|   |-- dev.env.js                   // 开发环境变量
|   |-- index.js                     // 项目一些配置变量
|   |-- prod.env.js                  // 生产环境变量
|   |-- proxyConfig.js                // 跨域配置
|-- src                              // 源码目录
|   |-- assets                       //字体图标和静态图片
|   |-- components                   // vue公共组件，页面组件
|       |--auditing                  // 审核模块
            |--auditingCloseCase.vue // 结案审核页面
            |--auditingIndex.vue     // 案件审核主页面
            |--auditingRisk.vue      // 部门风控页面
            |--auditingRiskBrand.vue // 律所风控页面
            |--caseAuditing.vue      // 案件审核页面
            |--financialAuditing.vue // 
            |--interest.vue          // 
        |--case                      // 案件模块
            |--caseAdd.vue           // 案件添加页面
            |--caseEdit.vue          // 案件编辑页面
            |--caseIndex.vue         // 案件首页页面
            |--caseUpdate.vue        // 案件修改页面
            |--caseUpdate1.vue       // 管理员案件修改页面
            |--caseWord.vue          // 民事合同模版页面
            |--caseWord1.vue         // 常年合同模版页面
            |--caseWord2.vue         // 专项合同模版页面
            |--caseWord3.vue         // 所函页面
            |--caseWord4.vue         // 刑事合同模版页面
            |--caseChild             // 案件管理模块
                |--caseAllList.vue   // 律所案件
                |--caseBranch.vue    // 分所案件
                |--caseCode.vue      // 条形码页面
                |--caseEmpower.vue   // 授权案件
                |--caseMine.vue      // 我的案件
                |--casePart.vue      // 部门案件
            |--caseWordAdd.vue       // 添加页面的民事合同模版页面
            |--caseWordAdd1.vue      // 添加页面的刑事合同模版页面
            |--caseWordAdd2.vue      // 添加页面的常年合同模版页面
            |--caseWordAdd3.vue      // 添加页面的专项合同模版页面
        |--count                     // 统计模块
            |--countIndex.vue        // 统计页面
        |--customer                  // 用户模块
            |--componycustomer.vue   // 事务所用户
            |--mycustomer.vue        // 我的用户
            |--customerIndex.vue     // 用户首页
            |--customerEdit.vue      // 用户详情
            |--customerUpdate.vue    // 用户修改
        |--document                  // 资料库模块
            |--documentIndex.vue     // 资料库
        |--mine                      // 我的模块
            |--mineIndex.vue         // 我的信息
            |--mineEdit.vue          // 修改我的信息
        |--search                    // 检索模块
            |--caseSearch.vue        // 检索案件
            |--caseSearch1.vue       // 审核时的检索案件
        |--setting                   // 设置
            |--setBase               // 基础数据
                |--casesCase.vue        // 案由页面
                |--customeCaseType.vue  // 客户类型页面
                |--industryCaseType.vue // 客户行业页面
                |--jobCase.vue          // 职务页面
                |--setBaseCaseType.vue  // 案件类型管理页面
                |--setTRee.vue          // 案件类型管理页面
            |--setIndex.vue             // 组织架构
            |--setLog.vue               // 日志
            |--setPower.vue             // 授权管理
        |--index.vue                 // 目录首页
        |--login.vue                 // 登录页面
        |--topMenu.vue               // 头部导航
        |--weixin.vue                // 微信授权页
        |--excel                     // excel导出插件
|   |-- router.config.js             // vue的路由管理
|   |-- App.vue                      // 页面入口文件
|   |-- main.js                      // 程序入口文件，加载各种公共组件
|-- static                           // 静态文件，比如一些图片，json数据等
|-- .babelrc                         // ES6语法编译配置
|-- .editorconfig                    // 定义代码格式
|-- .gitignore                       // git上传需要忽略的文件格式
|-- .postcsssrc                      // postcss配置文件
|-- README.md                        // 项目说明
|-- index.html                       // 入口页面
|-- package.json                     // 项目基本信息,包依赖信息等
