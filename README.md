# 新北动健康API接口文档 v1.0.0
    由于是接手的项目，目前只收录添加的API，后续有时间将逐步完善。
    服务器 hostname 列表： 
    阿里云测试服务器(new):101.201.234.233:4001
    BXC 内部测试服务器:10.180.3.24:4001
    BXC DEBUG 服务器：10.180.3.18:4001(有线) 192.168.30.10:4001（无线） 
***
# 接口规范
***

## Request Header
    请求头域内容
> 
#### Host: `http://host:port/v1`
#### Content-Type: `application/json`
#### Date: `UTC时间`
#### Authorization: `授权验证`
#### Token: `身份验证`
#### Cookie: `缓存`

## Response Header
    响应头域内容
> 
#### Set-Cookie: `缓存`

## Error message format
    错误信息格式
> 
code|message
----|---------------
    800|UndefError|
    801|TokenValidationErr 
    802|DBError 
    803|RequiredDataMissing 
    804|InvalidParameterFormat 
    805|FileSystemError 
    806|FileNotExist 
    807|UpdateIdNotExist 
    808|DeleteIdNotExist 
    809|TokenExpiredError 
    1001|AccountUsed 
    1002|SmsRegLimitation 
    1003|PhoneRegLimitation 
    1004|AccountRequired 
    1005|PasswordRequired 
    1006|PassportAuthErr 
    1007|InvalidLoginInfo 
    1010|ChangePasswordFail 
    1011|InvalidPassword 
    1012|InvalidBirthday 
    1013|InvalidGender 
    1014|InvalidID 
    1015|InvalidHeight 
    1016|InvalidWeight 
    1017|InvalidActivityIntensity 
    1018|InvalidEmail 
    1019|InvalidCellPhone 
    1020|UpdateUserPropErr 
    1021|InvalidVerifyID 
    1022|VerifyCodeErr 
    1023|VerifyCodeExpired 
    1024|RequestCodeLimitation 
    1025|AccountNotFound 
    1026|ResetPasswordLimitation 
    1027|PropertiesRequired 
    1028|CellPhoneRequired 
    1029|RefreshTokenSignError 
    1030|RefreshTokenIdError
    1031|BindingHasExist

***
# 账户
***
    
## 登录
>
#### HttpMethod: `POST`
#### Url: `/user/loginByThirdPart`
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------
accountType      |int        |false      | google(1), facebook(2), instagram(3), line(4), newbei(5)
uid              |string  |false      |第三方账号ID
name             |string  |false      |第三方账号名称
accesstoken      |string  |false      |第三方账号存取权杖
email            |string  |true      |第三方账号注册mail
icon             |string  |true      |第三方账号头像url
#### Response:
param|type|description
-|-|-
success|bool|是否成功
token|string|存取token
refreshToken|string|刷新token
tokenExpireIn|string|token 有效时间

## 查看第三方账号列表
> 
#### HttpMethod: `POST`
#### Url: `/user/lst3rdAccount`
#### Request: 
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Response:
param|type|description
-|-|-
success|bool|是否成功
accounts|Array|账号数据数组， 如果没有绑定第三方，数组为空，内部item格式与登录传入参数意义相同。

## 绑定第三方账号
> 
#### HttpMethod: `POST`
#### Url: `/user/bind3rdAccount`
#### Header:
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------
accountType      |int        |false      | google(1), facebook(2), instagram(3), line(4), newbei(5)
uid              |string  |false      |第三方账号ID
name             |string  |false      |第三方账号名称
accesstoken      |string  |false      |第三方账号存取权杖
email            |string  |true      |第三方账号注册mail
icon             |string  |true      |第三方账号头像url
#### Response:
param|type|description
-|-|-
success|bool|是否成功

## 解绑第三方账号
> 
#### HttpMethod: `POST`
#### Url: `/user/unbind3rdAccount`
#### Header:
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------
accountType      |int        |false      | google(1), facebook(2), instagram(3), line(4), newbei(5)
uid              |string  |false      |第三方账号ID
#### Response:
param|type|description
-|-|-
success|bool|是否成功

***
# 记步
***
    
## 获取每日步数目标
> 
#### HttpMethod: `GET`
#### Url: `/warkGoal/getData`
#### Header: 
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Response:
param|type|description
-|-|-
success|bool|是否成功
data._id|string| id
data.goal|number| 目标步数

## 更新每日步数目标
> 
#### HttpMethod: `POST`
#### Url: `/warkGoal/updateData`
#### Header:
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------
_id      |string        |false      | id
goal     |number        |false      |目标步数
#### Response:
param|type|description
-|-|-
success|bool|是否成功
#### Sample
    ```  
    request:
    {
            "_id": "596ec9bf0b17a40604a71cab",
            "goal": 16000
    }   
    ```
## 上传步数
> 
#### HttpMethod: `POST`
#### Url: `/wark/uploadData`
#### Header: 
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------
dataSource  |number        |false      |  phone(1) belt(2), other(3)
data        |array        |false      |目标步数数组
startTime |string  |false      | 开始时间UTC 
endTime |string  |false      | 结束时间UTC 
steps   |number  |false      | 步数 
#### Response:
param|type|description
-|-|-
success|bool|是否成功
data.insertedCount|number| 插入数量
data.insertedIds|array| 插入步数记录ids 
#### Sample
```
 request:
    {
        "dataSource": 2,
        "data": [
            {"steps": 1200, "startTime": "2017-07-18T05:10:10Z", "endTime": "2017-07-18T05:30:10Z"},
            {"steps": 1300, "startTime": "2017-07-19T08:10:10Z", "endTime": "2017-07-19T08:30:10Z"}
        ]
    }
response:
    {
        "success": true,
        "data": {
            "insertedCount": 2,
            "insertedIds": [
                "5971570ac60492e20223a421",
                "5971570ac60492e20223a422"
            ]
        }
    }
  ``` 
##  获取每日步数
> 
#### HttpMethod: `POST`
#### Url: `/wark/getDataByDay`
#### Header: 
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------
dataSource  |number        |true      |  phone(1) belt(2), other(3) 不传获取所有来源
date |string  |false      | 指定日期UTC 
#### Response:
param|type|description
-|-|-
success|bool|是否成功
data        |array   | 目标步数数组
startTime   |string  | 开始时间UTC 
endTime     |string  | 结束时间UTC 
steps       |number  | 步数 
dataSource  |number  | 来源
#### Sample
```
request:
    {
    	"dataSource":1,
    	"date":"2017-07-19T00:00:00Z"
    }
response:
   {
       "success": true,
       "data": [
           {
               "_id": "597074a729f888d60f6af01d",
               "steps": 1300,
               "startTime": "2017-07-19T08:10:10.000Z",
               "endTime": "2017-07-19T08:30:10.000Z",
               "dataSource": 1
           }
       ]
   }
```
##  获取每周步数（指定日 - 7）
>
#### HttpMethod: `POST`
#### Url: `/wark/getDataByWeek`
#### Header:
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request:
param       |type       |nullable   |description
------------|-----------|-----------|-----------
dataSource  |number        |true      |  phone(1) belt(2), other(3) 不传获取所有来源
date |string  |false      | 指定日期UTC
#### Response:
param|type|description
-|-|-
success|bool|是否成功
data        |array   | 目标步数数组
_id         |class   | 按天分组的year， month，day 字段
steps       |number  | 每日步数总计
#### Sample
```
request:
   {
    	"dataSource":1,
    	"date":"2017-07-18T00:00:00Z"
   }
response:
  {
      "success": true,
      "data": [
          {
              "_id": {
                  "year": 2017,
                  "month": 7,
                  "day": 12
              },
              "steps": 1200
          },
          {
              "_id": {
                  "year": 2017,
                  "month": 7,
                  "day": 13
              },
              "steps": 1300
          },
          {
              "_id": {
                  "year": 2017,
                  "month": 7,
                  "day": 18
              },
              "steps": 1200
          }
      ]
  }
```
##  获取每月步数（从指定日-30）
>
#### HttpMethod: `POST`
#### Url: `/wark/getDataByWeek`
#### Header:
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request:
param       |type       |nullable   |description
------------|-----------|-----------|-----------
dataSource  |number        |true      |  phone(1) belt(2), other(3) 不传获取所有来源
date |string  |false      | 指定日期UTC
#### Response:
param|type|description
-|-|-
success|bool|是否成功
data        |array   | 目标步数数组
_id         |class   | 按天分组的year， month，day 字段
steps       |number  | 每日步数
#### Sample
```
request:
    {
    	"dataSource":1,
    	"date":"2017-07-18T00:00:00Z"
    }
response:
 {
     "success": true,
     "data": [
         {
             "_id": {
                 "year": 2017,
                 "month": 7,
                 "day": 10
             },
             "steps": 2700
         },
         {
             "_id": {
                 "year": 2017,
                 "month": 7,
                 "day": 12
             },
             "steps": 1200
         },
         {
             "_id": {
                 "year": 2017,
                 "month": 7,
                 "day": 13
             },
             "steps": 1300
         },
         {
             "_id": {
                 "year": 2017,
                 "month": 7,
                 "day": 18
             },
             "steps": 1200
         }
     ]
 }
```
