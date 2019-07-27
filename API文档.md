# 接口文档

## 目录：
[1、账号密码登录](#1账号密码登录)<br/>
[2、账号注册](#2账号注册)<br/>
[3、根据会话获取用户信息](#3根据会话获取用户信息)<br/>
[4、添加信息](#4添加信息)<br/>
[5、获取全部信息](#5获取全部信息)<br/>
[6、获取单个信息](#6获取单个信息)<br/>
[7、编辑信息](#7编辑信息)<br/>
[8、删除信息](#8删除信息)<br/>



## 1、账号密码登录
     
### 请求URL：
	http://localhost:5000/api/users/login

### 请求方式：
	POST

### 参数类型：param

	|参数		  |是否必选 |类型     |说明
	|email    |Y       |string   |邮箱
	|password |Y       |string   |密码

### 返回示例：

    * 登录成功
    {
      "success": true,
      "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkM2IwZjI1YzRiMDg5NTA2YzM0Y2VjZSIsIm5hbWUiOiJ6aGFuZ3lvbmciLCJhdmF0YXIiOiIvL3d3dy5ncmF2YXRhci5jb20vYXZhdGFyLzM0ODBmMTFlYzZjNzIyMDk3ZDZlOGI2MzUyOTQyODU0P3M9MjAwJnI9cGcmZD1tbSIsImlkZW50aXR5IjoibWFuYWdlciIsImlhdCI6MTU2NDIxOTI4OSwiZXhwIjoxNTY0MzA1Njg5fQ.E8P7kCWlsETctS7jbl10azlv1kMnwdVqwrBuNx98DQo"
    }
    * 登录失败
    "密码错误!"

## 2、账号注册
     
### 请求URL：
	http://localhost:5000/api/users/register

### 请求方式：
	POST

### 参数类型：param

	|参数		     |是否必选 |类型     |说明
	|name        |Y       |string   |账号
	|email       |Y       |string   |邮箱
	|password    |Y       |string   |密码
	|identity    |Y       |string   |权限

### 返回示例：

    * 注册成功
    {
      "_id": "5d3c19f6c60aa54994f264d8",  //用户id
      "name": "zhangyong",                //用户名字
      "email": "a758922095@163.com",      //用户邮箱
      "avatar": "//www.gravatar.com/avatar/bfaa531c09f41228cad1797094e8305a?s=200&r=pg&d=mm",                   //用户头像
      "password":             "$2a$10$dWOeoCk7zKxYNOLYudOPhuAIhZanS3AuH.V93FLK3gzW0x5Wlds3S",  //用户密码
      "identity": "emplloyee",            //用户权限
      "date": "2019-07-27T09:31:34.763Z",  //创建时间
      "__v": 0
    }
    * 注册失败

## 3、根据会话获取用户信息
     
### 请求URL：
	http://localhost:5000/api/users/current

### 请求方式：
	get
### 请求头header

	|参数		          |是否必选 |类型     |说明
	|Authorization    |Y       |string   |token验证

### 参数类型：

  无

### 返回示例：

    * 获取成功
    {
    "id": "5d3b0f25c4b089506c34cece",  //id
    "name": "zhangyong",               //账号
    "email": "758922096@qq.com",      //邮箱
    "identity": "manager"             //权限
    }
    * 获取失败
    Unauthorized

## 4、添加信息
     
### 请求URL：
	http://localhost:5000/api/profiles/add

### 请求方式：
	POST

### 参数类型：param

	|参数		     |是否必选 |类型     |说明
	|type        |Y       |string   |收支类型
	|describe    |Y       |string   |收支描述
	|income      |Y       |string   |收入
	|expend      |Y       |string   |支出
	|cash        |Y       |string   |账户现金
	|remark      |Y       |string   |备注

### 返回示例：

    * 添加成功
    {
    "_id": "5d3c1c1bc60aa54994f264d9",
    "type": "实际购买",
    "describe": "购买系统",
    "income": "20",
    "expend": "50",
    "cash": "1000",
    "remark": "资金管理系统211111111",
    "date": "2019-07-27T09:40:43.045Z",
    "__v": 0
    }
    * 注册失败

## 5、获取全部信息
     
### 请求URL：
	http://localhost:5000/api/profiles

### 请求方式：
	get
### 请求头header

	|参数		          |是否必选 |类型     |说明
	|Authorization    |Y       |string   |token验证

### 参数类型：

  无

### 返回示例：

    * 获取成功
    [
      {
          "_id": "5d3b10d0c4b089506c34cecf",
          "type": "提现",
          "describe": "提现一部分钱",
          "income": "1000",
          "expend": "500",
          "cash": "200",
          "remark": "提现500",
          "date": "2019-07-26T14:40:16.592Z",
          "__v": 0
      },
      {
          "_id": "5d3c1c1bc60aa54994f264d9",
          "type": "实际购买",
          "describe": "购买系统",
          "income": "20",
          "expend": "50",
          "cash": "1000",
          "remark": "资金管理系统211111111",
          "date": "2019-07-27T09:40:43.045Z",
          "__v": 0
      }
    ]
    * 获取失败
    Unauthorized

## 6、获取单个信息
     
### 请求URL：
	http://localhost:5000/api/profiles/{id}

### 请求方式：
	get
### 请求头header

	|参数		          |是否必选 |类型     |说明
	|Authorization    |Y       |string   |token验证

### 参数类型：query

  |参数	  |是否必选 |类型     |说明
	|id    |Y       |string   |id

### 返回示例：

    * 获取成功
    {
      "_id": "5d3b10d0c4b089506c34cecf",
      "type": "提现",
      "describe": "提现一部分钱",
      "income": "1000",
      "expend": "500",
      "cash": "200",
      "remark": "提现500",
      "date": "2019-07-26T14:40:16.592Z",
      "__v": 0
    }
    * 获取失败
    Unauthorized

## 7、编辑信息
     
### 请求URL：
	http://localhost:5000/api/profiles/edit/{id}

### 请求方式：
	POST

### 参数类型：param

	|参数		     |是否必选 |类型     |说明
	|type        |Y       |string   |收支类型
	|describe    |Y       |string   |收支描述
	|income      |Y       |string   |收入
	|expend      |Y       |string   |支出
	|cash        |Y       |string   |账户现金
	|remark      |Y       |string   |备注

### 返回示例：

    * 成功
    {
        "_id": "5d3b10d0c4b089506c34cecf",
        "type": "实际购买",
        "describe": "购买系统",
        "income": "3432432",
        "expend": "23432",
        "cash": "234",
        "remark": "df",
        "date": "2019-07-26T14:40:16.592Z",
        "__v": 0
    }
    * 失败


## 8、删除信息
     
### 请求URL：
	http://localhost:5000/api/profiles/delete/{id}

### 请求方式：
	delete

### 参数类型：param

  无

### 返回示例：

    * 成功
    {
        "_id": "5d3b10d0c4b089506c34cecf",
        "type": "实际购买",
        "describe": "购买系统",
        "income": "3432432",
        "expend": "23432",
        "cash": "234",
        "remark": "df",
        "date": "2019-07-26T14:40:16.592Z",
        "__v": 0
    }
    * 失败