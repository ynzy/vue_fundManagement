# vue2组件通信

父子组件通信
props  父传子
$emit 字传父

兄弟组件通信
中央事件总线bus
$on 
跨组件通信

vuex也算是组件通信

组件通信一共有8中方式

售前工程师，产品经理，UI设计师，
前端开发，后端开发，测试工程师，
运维(实施)工程师，售后工程师

# 接到项目了
1. 前期的调研工作(售前工程师)
2. 需求分析,测试也在
3. 后台架构师(数据库分析),前页面构建(UI设计),
4. 切图工程师(不是ps切图)--静态页面切图,为了不受框架限制
5. 前端工程师做业务模块,架构,模拟数据
6. 前后台联调(数据交互-模拟数据替换成真实数据)
7. 测试进来(测试案例),前后台根据测试案例进行单元测试
8. 项目上线(后台来做的,运维,前台辅助)nginx
上线问题
* 接口跨域(前台配置了跨域,后台没有做跨域允许),需要后台做跨域配置
* axios默认不允许设置cookie
* java后台set-cookie

# 路由2种
声明式 <a> router-link
编程式路由
路由传参
query方式 ?id='xxx'&&name='xx'
params方式 /xxx
动态路由 /xxx/:id

路由守卫

es6

# 处理异步函数方式都有哪些
回调函数
发布订阅模式
promise理解
async await

# vue的核心api有哪些
你觉得vue那些东西特别重要

* 双向绑定 v-module 原理是什么
* 组件
* 路由
* 生命周期 created mounted 
* vuex
* 过滤器 fillter 大小写转换,日期格式化(管道),对原生js进行进一步封装,过滤数据显示
  * 前后交互的时间格式(默认输出的格式,时间戳,自定义格式)
* 条件渲染 
  * v-if和v-show的区别
* 插槽 sort

* node

* webpack

* bable
# 数组操作
字符串转数组,数组转字符串怎么操作
push
pop
shif
unshif
sort *特别爱问
ervry  boolean
将一个abcd的字符串反转成dcba字符串
```js
var str = '123456'
let result = str.split('').reverse().join('')
```
sort数组排序,升序降序
sort((a,b)=>a-b)

# web worker 实现双线程
计时器多开

# css
* sprite 图片精灵/精灵图
* flex布局
* 垂直居中的方法有哪些(32种)

# BFC
定位
浮动
display

# rgba 和 opacity 的区别

# 规范
命名规则
网易nec规范

# git
* git add .
* git commit -m ''
* git merge
* git branch -a
* git checkout -b dev  
* git push
* git pull
* commit Message(git提交记录规范)
* git angular提交规范 https://ynzy.github.io/yufanBlog/Others/Git/commitMessage.html

# vue项目如何部署到后台服务器
https://ynzy.github.io/yufanBlog/Vue/VueAction/proProcess/vue%E9%A1%B9%E7%9B%AE%E5%A6%82%E4%BD%95%E9%83%A8%E7%BD%B2%E5%9C%A8%E5%90%8E%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%B8%8A.html#%E9%81%87%E5%88%B0%E7%9A%84%E9%97%AE%E9%A2%98