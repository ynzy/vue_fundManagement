# 项目介绍

## 技术参考
### 前台
* vue3.0 + vuex + vueRouter
* axios
* element-ui
* jwt-decode(jwt校验)
* date-fns(日期库)
### 后台
* node
* express
* mongoDB
* jsonwebtoken(jwt校验)
* bcryptjs(密码加密)
* gravatar(公认头像插件)
* mongoose(基于MongoDB的驱动)

## 项目启动
1. 前后台安装相应依赖
```js
yarn
```
2. 安装mongoDB数据库并成功启动
* 安装参考地址：https://www.yuque.com/docs/share/10cf91f8-80b6-48ff-b2d6-a3ccbe4a3231?# 《本地安装MongoDB》
* windows安装包,百度链接：[https://pan.baidu.com/s/1zi7W4LZkDT9opjiRP65y9A](https://pan.baidu.com/s/1zi7W4LZkDT9opjiRP65y9A) 提取码：5rwj
* [win版MongoDB安装教程](http://baijiahao.baidu.com/s?id=1601512248926547477&wfr=spider&for=pc)
* MongoDB配置环境变量里面写的不清楚，我在这里重写下，
```js
MONGO_HOME = C:\Program Files\MongoDB\Server\3.4\bin
Path = %MONGO_HOME%
```
* 推荐使用可视化工具管理数据库，清晰明了，我现找了一个，全是英文看不懂，但也能凑活用了，如果有更好的希望推荐下。教程网址[Robo 3T,mongoDB可视化工具](https://www.jianshu.com/p/1194de9859d0)

3. 启动后台项目
启动前查看本地MongoDB地址并进行更改
```js
//  --config/keys.js
module.exports = {
    mongoURI: 'mongodb://localhost:27017/vue-manage', //修改成本地的MongoDB地址
    secretOrKey: 'secret'
  };
```
启动
```js
PS M:\个人做过的项目\学习项目\vue项目\资金管理系统\fmgSystem\server> yarn start
yarn run v1.13.0
$ node server.js
server running on port 5000
MongoDB连接成功。。。
```
看到MongoDB连接成功即说明启动成功
1. 启动前台项目
```js
yarn start 或 yarn serve
```
5. 启动成功后因为数据库没有相关数据,需要先点击进行注册.
