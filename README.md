# 新北动健康API接口文档 v1.0.0
        由于是接手的项目，目前只收录添加的API，后续有时间将逐步完善。
        服务器 hostname 列表： 
        阿里云测试服务器: 101.201.234.233:4001
        台北测试服务器:   61.218.20.233
        官服 
        BXC 内部测试服务器:10.180.3.24:4001
        BXC DEBUG 服务器：10.180.3.27:4001(有线) 192.168.30.10:4001（无线）
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
    1032|UnSupportAccountType
    1033|NoEnoughIcon
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
#### Url: `/walkGoal/getData`
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
#### Url: `/walkGoal/updateData`
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
#### Url: `/walk/uploadData`
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
#### Url: `/walk/getDataByDay`
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
_id         |class   | 按小时分组的hour字段
steps       |number  | 每小时步数总计
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
              "_id": {
                  "hour": 0
              },
              "steps": 2500
          },
          {
              "_id": {
                  "hour": 5
              },
              "steps": 1200
          },
          {
              "_id": {
                  "hour": 8
              },
              "steps": 1500
          },
          {
              "_id": {
                  "hour": 15
              },
              "steps": 2400
          }
      ]
  }
```
##  获取每周步数（指定日 - 7）
>
#### HttpMethod: `POST`
#### Url: `/walk/getDataByWeek`
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
_id         |class   | 按天分组的year， month，day，附带dayOfWeek字段 
dayOfWeek   |number  | 周日（1） ---- 周六（7）
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
                  "dayOfWeek": 3
              },
              "steps": 1200
          },
          {
              "_id": {
                  "dayOfWeek": 4
              },
              "steps": 1200
          },
          {
              "_id": {
                  "dayOfWeek": 5
              },
              "steps": 1300
          }
      ]
  }
```
##  获取每月步数（从指定日-30）
>
#### HttpMethod: `POST`
#### Url: `/walk/getDataByMonth`
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

## 查看我的步数总排名 
> 
#### HttpMethod: `POST`
#### Url: `/walk/getTodayRank`
#### Header: 
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------
name        |string     |false      | 查找字串
#### Response:
param|type|description
-|-|-
success|bool|是否成功
data                     |object     | 目标数组
item.lv                  |number     | 0 表示无排名 
item.total               |number     | 今日运动人数

#### Sample
```
 request:
   {
      
   }
response:
   {
       "success": true,
       "data": {
           "lv": 0,
           "total": 1
       }
   }
  ``` 

***
# 睡眠
***
 
## 上传睡眠数据
> 
#### HttpMethod: `POST`
#### Url: `/sleep/uploadData`
#### Header: 
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------
data        |array      |false      | 目标数组
startTime   |string     |false      | 开始时间UTC 
endTime     |string     |false      | 结束时间UTC 
quality     |number     |false      | 浅睡(1) 中睡(2), 深睡(3) 人工（4）
#### Response:
param|type|description
-|-|-
success|bool|是否成功
data.insertedCount|number| 插入数量
data.insertedIds|array| 插入记录ids 
#### Sample
```
 request:
    {
        "data": [
          {"quality": 4, "startTime": "2017-08-01T13:00:00Z", "endTime": "2017-08-01T14:00:10Z"},
          {"quality": 1, "startTime": "2017-08-01T14:30:00Z", "endTime": "2017-08-01T15:00:10Z"},
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
##  获取每日睡眠（前日21：00~当日09：00）
> 
#### HttpMethod: `POST`
#### Url: `/sleep/getDataByDay`
#### Header: 
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------
date          |string  |false      | 指定日期UTC 
count         |bool    |true       |如果指定且为True，将返回当日的统计数据
quality       |Number  |true       |如果指定，将返回指定类型的数据
refresh       |string  |true       |如果指定，强制刷新数据

#### Response:
param|type|description
-|-|-
success|bool|是否成功
data        |array   | 目标数组
_id         |class   | 
startTime   |String  | UTC格式，注意转换
endTime     |String  | UTC格式，注意转换
quality     |number  | 睡眠类型
duration    |number  | 按分钟统计的数据
#### Sample
```
request:
   {
   	"date":"2017-08-15T00:00:00Z"
   }
response:
  {
      "success": true,
      "data": [
                 {
                     "_id": "59913bd9df5639f605d1f0e1",
                     "duration": 60,
                     "startTime": "2017-08-14T13:00:00.000Z",
                     "endTime": "2017-08-14T14:00:10.000Z",
                     "quality": 4
                 },
                 {
                     "_id": "59913bd9df5639f605d1f0e2",
                     "duration": 30,
                     "startTime": "2017-08-14T14:30:00.000Z",
                     "endTime": "2017-08-14T15:00:10.000Z",
                     "quality": 1
                 }
      ]
  }
```
##  获取每周睡眠统计（指定日 - 7）
>
#### HttpMethod: `POST`
#### Url: `/sleep/getDataByWeek`
#### Header:
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request:
param       |type       |nullable   |description
------------|-----------|-----------|-----------
date |string  |false      | 指定日期UTC
#### Response:
param|type|description
-|-|-
success|bool|是否成功
data        |array   | 目标数组
_id         |class   | 按天分组的year， month，day，附带dayOfWeek字段
dayOfWeek   |number  | 周日（1） ---- 周六（7）
sleep       |array   | item 包含quality 和 duration 数据
#### Sample
```
request:
   {
    	"date":"2017-08-15T00:00:00Z"
   }
response:
  {
      "success": true,
      "data": [
         {
                    "_id": {
                        "year": 2017,
                        "month": 8,
                        "day": 14,
                        "dayOfWeek": 2
                    },
                    "sleep": [
                        {
                            "quality": 2,
                            "duration": 320
                        },
                        {
                            "quality": 1,
                            "duration": 239
                        },
                        {
                            "quality": 4,
                            "duration": 180
                        },
                        {
                            "quality": 3,
                            "duration": 90
                        }
                    ]
                }
               
      ]
  }
```
##  获取每月睡眠统计（从指定日-30）
>
#### HttpMethod: `POST`
#### Url: `/sleep/getDataByMonth`
#### Header:
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request:
param       |type       |nullable   |description
------------|-----------|-----------|-----------
date |string  |false      | 指定日期UTC
#### Response:
param|type|description
-|-|-
success|bool|是否成功
data        |array   | 目标数组
_id         |class   | 按天分组的year， month，day 字段
sleep       |array   | item 包含quality 和 duration 数据
#### Sample
```
request:
    {
    	"date":"2017-08-15T00:00:00Z"
    }
response:
 {
     "success": true,
     "data": [
            {
                    "_id": {
                        "year": 2017,
                        "month": 8,
                        "day": 2
                    },
                    "sleep": [
                        {
                            "quality": 4,
                            "duration": 90
                        },
                        {
                            "quality": 2,
                            "duration": 120
                        },
                        {
                            "quality": 1,
                            "duration": 110
                        },
                        {
                            "quality": 3,
                            "duration": 45
                        }
                    ]
            }
     ]
 }
```
***
# 饮食
***
 
## 获取食物类型
> 
#### HttpMethod: `POST`
#### Url: `/food/getType`
#### Header: 
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------
counts      |int        |false      | 获取记录的条数
timeStamp   |string     |false      | 指定起始时间UTC之后的记录  （ "2016-10-01T16:00:00.000Z" ）
#### Response:
param|type|description
-|-|-
success|bool|是否成功
data        |array   | 目标数组
sequence    |number | 显示次序
systemType  |bool   | 系统创建
#### Sample
```
 request:
   {
       "counts": 100,
       "timeStamp":"2016-11-20T08:43:28.872Z"
   }
response:
    {
        "success": true,
        "data": [
           {
                      "_id": "000000000000000000000005",
                      "foodTypeName": "油脂堅果類",
                      "foodUnitName": "份",
                      "foodTypeNote": "NewTaipei",
                      "sequence": 6,
                      "iconUrl": "https://f4a.tw/v1/food/downloadphoto?filename=c60fb2e8-e17d-4e9f-b593-8d4a6a2f6eab",
                      "webIcon": "/images/food/c60fb2e8-e17d-4e9f-b593-8d4a6a2f6eab-_@food_img_oil.png",
                      "timeStamp": "2016-11-23T02:27:07.238Z",
                      "systemType": true
            }
        ]
    }
  ``` 
## 获取食物
> 
#### HttpMethod: `POST`
#### Url: `/food/getItem`
#### Header: 
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------
counts      |int        |false      | 获取记录的条数
timeStamp   |string     |false      | 指定起始时间UTC 之后的记录（"2016-08-27T16:00:00.000Z"）
#### Response:
param|type|description
-|-|-
success|bool|是否成功
data        |array   | 目标数组
item.foodTypeID          |string    | 类型id
item.foodItemName        |string    | 食物名称
item.foodItemCalories    |number    | 食物卡路里
#### Sample
```
 request:
   {
       "counts": 100,
       "timeStamp":"2016-11-20T08:43:28.872Z"
   }
response:
    {
        "success": true,
        "data": [
           {
                      "_id": "000000000000000000000005",
                      "foodTypeName": "油脂堅果類",
                      "foodUnitName": "份",
                      "foodTypeNote": "NewTaipei",
                      "sequence": 6,
                      "iconUrl": "https://f4a.tw/v1/food/downloadphoto?filename=c60fb2e8-e17d-4e9f-b593-8d4a6a2f6eab",
                      "webIcon": "/images/food/c60fb2e8-e17d-4e9f-b593-8d4a6a2f6eab-_@food_img_oil.png",
                      "timeStamp": "2016-11-23T02:27:07.238Z",
                      "systemType": true
            }
        ]
    }
  ``` 

## 获取指定类型的相关食物
> 
#### HttpMethod: `POST`
#### Url: `/food/getItemByType`
#### Header: 
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------
foodTypeID  |string     |false      | id
#### Response:
param|type|description
-|-|-
success|bool|是否成功
data                     |array     | 目标数组
item.foodTypeID          |string    | 类型id
item.foodItemName        |string    | 食物名称
item.foodItemCalories    |number    | 食物卡路里

#### Sample
```
 request:
   {
      "foodTypeID": "000000000000000000000000"
   }
response:
    {
        "success": true,
        "data": [
          {
                         "_id": "000000000000000000000000",
                         "foodTypeID": "000000000000000000000000",
                         "foodItemName": "飯",
                         "foodItemCalories": 71,
                         "foodUnitName": "一份=1/4碗 (50g)",
                         "iconUrl": "https://f4a.tw/v1/food/downloadphoto?filename=dab5366b-d410-48c9-8471-b24d4ce439c8",
                         "webIcon": "/images/food/dab5366b-d410-48c9-8471-b24d4ce439c8-_@l_food_img_rice.png",
                         "timeStamp": "2016-11-23T02:28:13.199Z",
                         "readonly": true,
                         "recordBy": null,
                         "isDeleted": false,
                         "foodTypeDetail": [],
                         "systemItem": true
            }
        ]
    }
  ``` 

## 添加饮食
> 
#### HttpMethod: `POST`
#### Url: `/food/createData`
#### Header: 
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------
date            |string     |false      | 就餐日期UTC 
foodItemID      |string     |false      | 食物item id
foodItemValue   |number     |false      | 食物的份数 
#### Response:
param|type|description
-|-|-
success|bool|是否成功
_id      |string | item id
#### Sample
```
 request:
  {
      "date" : "2017/08/15",
      "foodItemID" : "00000000000000000000005b",
      "foodItemValue" : 10
  }
response:
    {
        "success": true,
         "_id": "59955d96565c127f081be16f"
    }
```


## 添加基本食物（3蔬2果5蛋白8水）
> 
#### HttpMethod: `POST`
#### Url: `/food/createBaseData`
#### Header: 
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------
date            |string     |false      | 日期UTC  
foods           |array      |false      | 目标数组
type            |number     |false      | 蔬（1） 果（2） 蛋白（3） 水（4） 
value           |number     |false      | 份数 
#### Response:
param|type|description
-|-|-
success|bool|是否成功
data.insertedCount|number| 插入数量
data.insertedIds|array| 插入记录ids  
#### Sample
```
 request:  //添加 1份蔬菜 2分蛋白

  {
      "date"  : "2017-08-25T13:49:00.000Z",
      "foods" : [
         {"type": 1, "value": 1},
         {"type": 3, "value": 2}    
      ]     
  }
response:
    {
       "success": true,
       "data": {
               "insertedCount": 2,
               "insertedIds": [
                   "599d4477eb4dbf3e081938df",
                   "599d4477eb4dbf3e081938e0"
               ]
           }
    }
```

## 更新饮食
> 
#### HttpMethod: `POST`
#### Url: `/food/updateData`
#### Header: 
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------
_id             |string     |false      | 饮食条目id 
date            |string     |true      | 就餐日期 
foodItemID      |string     |true      | 食物item id
foodItemValue   |number     |true      | 食物的份数 
#### Response:
param|type|description
-|-|-
success|bool|是否成功
_id      |string | item id
#### Sample
```
 request:
  {
      "_id" : "599568ffa7ec2c1378491819",
      "date" : "2017/08/16",
      "foodItemValue" : 8
  }
response:
    {
        "success": true,
        "_id": "599568ffa7ec2c1378491819"
    }
```

## 删除饮食
> 
#### HttpMethod: `POST`
#### Url: `/food/deleteData`
#### Header: 
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------
_id             |string     |false      | 饮食条目id 
#### Response:
param|type|description
-|-|-
success|bool|是否成功
_id      |string | item id
#### Sample
```
 request:
  {
      "_id" : "599568ffa7ec2c1378491819",
  }
response:
    {
        "success": true,
        "_id": "599568ffa7ec2c1378491819"
    }
```


## 删除多条饮食数据
> 
#### HttpMethod: `POST`
#### Url: `/food/deleteManyData`
#### Header: 
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------
_idArr      |array     |false      | 饮食条目id 数组
#### Response:
param|type|description
-|-|-
success|bool|是否成功
_id      |object | update相关信息
#### Sample
```
 request:
  {
     	"_idArr":[
     	    "599f9c012922c51f0333b327",
     		"599f9c012922c51f0333b326"
     		]
  }
response:
    {
        "success": true,
       "_id": {
              "n": 2,
              "nModified": 2,
              "ok": 1
          }
    }
``` 
 
## 获取用户所需6大营养数份数
  > 
  #### HttpMethod: `POST`
  #### Url: `/food/getNeedUnits`
  #### Header: 
  Headers       |type       |nullable   |description
  ------------|-----------|-----------|-----------
  Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
  #### Request: 
  param       |type       |nullable   |description
  ------------|-----------|-----------|-----------
  #### Response:
  param|type|description
  -|-|-
  success|bool|是否成功
  data      |array  |Object
  foodTypeID|string |食物类型ID
  unit      |number |份数
  #### Sample
  ```
   request:
     {
       	"contentID" : "000000000000000000000012"
     }
  response:
      {
          "success": true,
             "data": 
                 {
                    "calories": 1800,
                           "units": [
                               {
                                   "foodTypeID": "000000000000000000000000",
                                   "unit": 3
                               },
                               {
                                   "foodTypeID": "000000000000000000000002",
                                   "unit": 5
                               },
                               {
                                   "foodTypeID": "000000000000000000000001",
                                   "unit": 1.5
                               },
                               {
                                   "foodTypeID": "000000000000000000000003",
                                   "unit": 3
                               },
                               {
                                   "foodTypeID": "000000000000000000000004",
                                   "unit": 2
                               },
                               {
                                   "foodTypeID": "000000000000000000000005",
                                   "unit": 5
                               }
                           ]
             }
      }
 ``` 


## 获取指定日分类饮食数据
  > 
  #### HttpMethod: `POST`
  #### Url: `/food/getGroupDataByDay`
  #### Header: 
  Headers       |type       |nullable   |description
  ------------|-----------|-----------|-----------
  Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
  #### Request: 
  param       |type       |nullable   |description
  ------------|-----------|-----------|-----------
  date |string  |false      | 指定日期UTC
  2017/08/15
  #### Response:
  param|type|description
  -|-|-
  success|bool|是否成功
  foods              |array  | 目标数组
  foodItemID         |string |食物ID
  foodItemValue      |number |份数
  _id                |string |饮食ID
  #### Sample
  ```
   request:
     {
        "date":"2017-07-18T00:00:00Z"
     }
  response:
     {
         "success": true,
         "data": [
             {
                 "foodTypeID": "000000000000000000000000",
                 "foods": [
                     {
                         "date": "2016-08-15T07:01:20.580Z",
                            "_id": "599fa6cbe4603985035b6485",
                         "foodItemID": "000000000000000000000004",
                         "foodItemValue": 1
                     }
                 ]
             },
             {
                 "foodTypeID": "000000000000000000000001",
                 "foods": [
                     {
                         "date": "2016-08-15T08:01:20.580Z",
                            "_id": "599fa6cbe4603985035b6485",
                         "foodItemID": "000000000000000000000014",
                         "foodItemValue": 1
                     }
                 ]
             },
             {
                 "foodTypeID": "000000000000000000000002",
                 "foods": [
                     {
                         "date": "2016-08-15T07:01:20.580Z",
                            "_id": "599fa6cbe4603985035b6485",
                         "foodItemID": "00000000000000000000001c",
                         "foodItemValue": 1
                     }
                 ]
             },
             {
                 "foodTypeID": "000000000000000000000003",
                 "foods": [
                     {
                         "date": "2016-08-15T07:01:20.580Z",
                            "_id": "599fa6cbe4603985035b6485",
                         "foodItemID": "00000000000000000000003a",
                         "foodItemValue": 1
                     }
                 ]
             },
             {
                 "foodTypeID": "000000000000000000000004",
                 "foods": [
                     {
                         "date": "2016-08-15T07:01:20.580Z",
                            "_id": "599fa6cbe4603985035b6485",
                         "foodItemID": "000000000000000000000053",
                         "foodItemValue": 1
                     }
                 ]
             },
             {
                 "foodTypeID": "000000000000000000000005",
                 "foods": [
                     {
                         "date": "2016-08-15T07:01:20.580Z",
                            "_id": "599fa6cbe4603985035b6485",
                         "foodItemID": "00000000000000000000006c",
                         "foodItemValue": 1
                     }
                 ]
             }
         ]
     }
 ``` 
##  获取每周饮食统计（指定日 - 7）
>
#### HttpMethod: `POST`
#### Url: `/food/getGroupDataByWeek`
#### Header:
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request:
param       |type       |nullable   |description
------------|-----------|-----------|-----------
date |string  |false      | 指定日期UTC
#### Response:
param|type|description
-|-|-
success|bool|是否成功
data        |array   | 目标数组
_id         |class   | 按天分组的year， month，day，附带dayOfWeek字段
dayOfWeek   |number  | 周日（1） ---- 周六（7）
foods       |array   | item foodTypeID 和 totalValue， _id 数据
#### Sample
```
request:
   {
    	"date":"2017-08-15T00:00:00Z"
   }
response:
  {
      "success": true,
      "data": [
         {
                    "_id": {
                        "year": 2017,
                        "month": 8,
                        "day": 14,
                        "dayOfWeek": 2
                    },
                    "foods": [
                       {
                           "foodTypeID": "000000000000000000000002",
                           "items": [
                               {
                                   "date": "2017-08-23T16:00:00.000Z",
                                    "_id": "599fa6cbe4603985035b6485",
                                   "foodItemID": "00000000000000000000001c",
                                   "foodItemValue": 3
                               }
                           ]
                       },
                       {
                           "foodTypeID": "000000000000000000000003",
                           "items": [
                               {
                                   "date": "2017-08-23T16:00:00.000Z",
                                    "_id": "599fa6cbe4603985035b6485",
                                   "foodItemID": "000000000000000000000041",
                                   "foodItemValue": 1
                               }
                           ]
                       }
                        
                    ]
                }
               
      ]
  }
```
##  获取每月饮食统计（从指定日-30）
>
#### HttpMethod: `POST`
#### Url: `/food/getGroupDataByMonth`
#### Header:
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request:
param       |type       |nullable   |description
------------|-----------|-----------|-----------
date |string  |false      | 指定日期UTC
#### Response:
param|type|description
-|-|-
success|bool|是否成功
data        |array   | 目标数组
_id         |class   | 按天分组的year， month，day 字段
foods       |array   | item foodTypeID 和 totalValue, _id数据
#### Sample
```
request:
    {
    	"date":"2017-08-15T00:00:00Z"
    }
response:
 {
     "success": true,
     "data": [
            {
                    "_id": {
                        "year": 2017,
                        "month": 8,
                        "day": 2
                    },
                    "foods": [
                      {
                          "foodTypeID": "000000000000000000000002",
                          "items": [
                              {
                                  "date": "2017-08-23T16:00:00.000Z",
                                    "_id": "599fa6cbe4603985035b6485",
                                  "foodItemID": "00000000000000000000001c",
                                  "foodItemValue": 3
                              }
                                  ]
                              },
                              {
                                  "foodTypeID": "000000000000000000000003",
                                  "items": [
                                      {
                                          "date": "2017-08-23T16:00:00.000Z",
                                            "_id": "599fa6cbe4603985035b6485",
                                          "foodItemID": "000000000000000000000041",
                                          "foodItemValue": 1
                                      }
                                  ]
                              }
                       }
                   ]
            }
     ]
 }
```

## 按名称查找食物项目 
> 
#### HttpMethod: `POST`
#### Url: `/food/getItemByName`
#### Header: 
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------
name        |string     |false      | 查找字串
#### Response:
param|type|description
-|-|-
success|bool|是否成功
data                     |array     | 目标数组
item.foodTypeID          |string    | 类型id
item.foodItemName        |string    | 食物名称
item.foodItemCalories    |number    | 食物卡路里

#### Sample
```
 request:
   {
       "name" :"果"
   }
response:
    {
        "success": true,
        "data": [
              {
                     "_id": "000000000000000000000055",
                     "foodTypeID": "000000000000000000000004",
                     "foodItemName": "青龍蘋果(小)",
                     "foodItemCalories": 61,
                     "foodUnitName": "一份=1個 (130g)",
                     "iconUrl": "https://f4a.tw/v1/food/downloadphoto?filename=8da7859e-898e-413d-a0f6-b0fd9bfe7aab",
                     "webIcon": "/images/food/8da7859e-898e-413d-a0f6-b0fd9bfe7aab-_@l_food_img_apple_fuji.png",
                     "timeStamp": "2016-11-23T02:29:38.195Z",
                     "readonly": true,
                     "recordBy": null,
                     "isDeleted": false,
                     "foodTypeDetail": [],
                     "systemItem": true
                 },
                 {
                     "_id": "000000000000000000000057",
                     "foodTypeID": "000000000000000000000004",
                     "foodItemName": "百香果",
                     "foodItemCalories": 62,
                     "foodUnitName": "一份=約2個 (190g)",
                     "iconUrl": "https://f4a.tw/v1/food/downloadphoto?filename=3b546aae-0965-4d26-8ba4-476c325ee972",
                     "webIcon": "/images/food/3b546aae-0965-4d26-8ba4-476c325ee972-_@l_food_img_passion_fruit.png",
                     "timeStamp": "2016-11-23T02:29:40.196Z",
                     "readonly": true,
                     "recordBy": null,
                     "isDeleted": false,
                     "foodTypeDetail": [],
                     "systemItem": true
                 }
        ]
    }
  ``` 
  
## 按月统计报表 
> 
#### HttpMethod: `POST`
#### Url: `/food/getMonthReport`
#### Header: 
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------
date        |string     |true      | 指定日期UTC， 如果不填，默认当月
#### Response:
param|type|description
-|-|-
success|bool|是否成功
data                     |array     | 目标数组
item.foodTypeID          |string    | 类型id
item.standardValue       |number    | 标准参考值 
item.value               |number    | 实际值
item.range               |number    | 区间 （0）<=80% (1) <=100% (2)>100%
item.msg                 |string    | 提示信息


#### Sample
```
 request:
   {
         "date":"2017-08-27T16:00:00.000Z"
   }
response:
    {
        "success": true,
        "data": [
                          {
                             "fontTypeID": "000000000000000000000000",
                             "standardValue": 93,
                             "value": 0,
                             "range": 0,
                             "msg": "碳水化合物其實很重要，可以提供身體一天所需能量，應該吃得巧而不是完全避免；建議食用未精緻、含麩皮的全穀或以根莖類取代精緻過的白飯、白麵、麵包。"
                         },
                         {
                             "fontTypeID": "000000000000000000000002",
                             "standardValue": 155,
                             "value": 66,
                             "range": 0,
                             "msg": "蛋白質是肌肉、組織、骨骼和牙齒組成的重要來源! 攝取不足則容易造成發育不良、水腫、貧血、對疾病抵抗力弱、易疲倦等症狀。建議攝取好的奶類、豆類、蛋類、魚類、肉類、豆製品以獲取優質蛋白質喔!"
                         }
        ]
    }
  ``` 
  
***
# 运动
***
 

## 按名称查找运动项目 
> 
#### HttpMethod: `POST`
#### Url: `/sports/getItemByName`
#### Header: 
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------
name        |string     |false      | 查找字串
#### Response:
param|type|description
-|-|-
success|bool|是否成功
data                     |array     | 目标数组
item.sportsTypeID        |array     | 运动类型id 数组
item.sportsItemName      |string    | 運動名称
item.itemCalories        |number    | 卡路里

#### Sample
```
 request:
   {
       "name" :"球"
   }
response:
    {
        "success": true,
        "data": [
            {
                     "_id": "00000000000000000000000e",
                     "sportsItemName": "排球",
                     "itemCalories": 3.6,
                     "itemNote": "大卡/公斤體重/小時",
                     "timeStamp": "2016-11-23T02:19:06.850Z",
                     "readonly": true,
                     "recordBy": null,
                     "isDeleted": false,
                     "iconUrl": {
                         "btnNormal": "https://f4a.tw/v1/sports/downloadphoto?filename=c473130f-0435-43bf-94f8-77f444db6391",
                         "btnPressed": "https://f4a.tw/v1/sports/downloadphoto?filename=49f4c5b5-5f46-4616-9003-02d8491c51b7",
                         "img": "https://f4a.tw/v1/sports/downloadphoto?filename=bfd7c5f7-1d30-4953-8c3c-b5545c8280a1"
                     },
                     "sportsTypeID": [
                         "000000000000000000000000",
                         "000000000000000000000001"
                     ],
                     "systemItem": true
                 },
                 {
                     "_id": "00000000000000000000000f",
                     "sportsItemName": "保齡球",
                     "itemCalories": 3.6,
                     "itemNote": "大卡/公斤體重/小時",
                     "timeStamp": "2016-11-23T02:19:07.851Z",
                     "readonly": true,
                     "recordBy": null,
                     "isDeleted": false,
                     "iconUrl": {
                         "btnNormal": "https://f4a.tw/v1/sports/downloadphoto?filename=93871a47-5862-46e2-b99d-5ef8c915932f",
                         "btnPressed": "https://f4a.tw/v1/sports/downloadphoto?filename=65e51278-d87e-45e5-926f-88704e29cff9",
                         "img": "https://f4a.tw/v1/sports/downloadphoto?filename=f1f9b877-8025-45bd-8906-e921f0842374"
                     },
                     "sportsTypeID": [
                         "000000000000000000000000",
                         "000000000000000000000001"
                     ],
                     "systemItem": true
                 }
        ]
    }
  ``` 
  
  ## 按月统计报表 
  > 
  #### HttpMethod: `POST`
  #### Url: `/sports/getMonthReport`
  #### Header: 
  Headers       |type       |nullable   |description
  ------------|-----------|-----------|-----------
  Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
  #### Request: 
  param       |type       |nullable   |description
  ------------|-----------|-----------|-----------
  date        |string     |true      | 指定日期UTC， 如果不填，默认当月
  #### Response:
  param|type|description
  -|-|-
  success|bool|是否成功
  data          |object    | 目标数组
  score         |object    | 类型id 字段对应相应的运动类型, 依次是有氧，平衡，柔软，阻力，敏捷
  suggest       |object    | 建议项， 字段 bsq 是平衡，柔软，敏捷3in1
  
  #### Sample
  ```
   request:
     {
           "date":"2017-08-27T16:00:00.000Z"
     }
  response:
     {
         "success": true,
         "data": {
             "score": {
                 "000000000000000000000000": 0,
                 "000000000000000000000001": 0,
                 "000000000000000000000002": 0,
                 "000000000000000000000003": 0,
                 "000000000000000000000004": 0,
                 "walk": 13
             },
             "suggest": {
                 "000000000000000000000000": "每週完成至少150分鐘有氧身體活動",
                 "000000000000000000000003": "每週至少應有2天進行大肌群參與的增強肌肉力量的活動",
                 "bsq": "活動能力較差者，每週至少應有3天進行增強平衡能力和預防跌倒的活動",
                 "walk": "走路」被稱之為最完美的運動，不但沒有年齡限制，還能隨時隨地進行；能增強心肺功能、提高代謝、預防肥胖、控制體重、 預防高血脂、高血壓、 強化免疫系統、預防及控制糖尿病、遠離憂鬱 天天好心情。日行萬步好處多，你還不GO嗎?"
             }
         }
     }
   ``` 


## 查看我的今日运动总排名 
> 
#### HttpMethod: `POST`
#### Url: `/sports/getTodayRank`
#### Header: 
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------
name        |string     |false      | 查找字串
#### Response:
param|type|description
-|-|-
success|bool|是否成功
data                     |object     | 目标数组
item.lv                  |number     | 0 表示无排名 
item.total               |number     | 今日运动人数

#### Sample
```
 request:
   {
      
   }
response:
   {
       "success": true,
       "data": {
           "lv": 0,
           "total": 1
       }
   }
  ``` 
  
***
# 宠物
***
 

## 获取宠物状态 
> 
#### HttpMethod: `GET`
#### Url: `/pet/getStatus`
#### Header: 
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------
date        |string     |true      | 指定日期UTC，不传默认当日
#### Response:
param|type|description
-|-|-
success|bool|是否成功
data    |object    | 目标
mode    |number    | 积分模式：0（蔬菜）1（水果） 2（蛋白） 3（水） 4（步）5（睡）
score   |number    | 得分
msg     |string    | 提示信息


#### Sample
```
 request:
   {
       "date" :"球"
   }
response:
    {
        "success": true,
        "data": {
               "msg": "主人~今天蛋白質的基本份量達到了!",
               "score": 11,
               "mode": 0
        }
    }
  ```   


## 获取宠物状态 
> 
#### HttpMethod: `POST`
#### Url: `/pet/lstGoods`
#### Header: 
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------
#### Response:
param|type|description
-|-|-
success|bool|是否成功
data    |Array     | Array
item._id     |string    | 商品购买id， buyPetGoods 请求需要
item.thumb   |string    | 缩略图
item.type     |Number   | 物品类型 (1)"寵物", (2)"飼料盒", (3)"小窩",(4)"玩具",(5)"坐墊",(6)"花束",(7)"飾品",(8)"服飾",(9)"窗簾",(10)"牆壁", (11)"地板", (12)"神奇藥水"
item.typeName |string    | 物品类型名称 
item.score    |string    | 购买所需health icon. 
item.goodsNo  |String    | 物品ID ，与MyGoods API 返回的 goodsNo一致，用于判断此商品是否可继续购买。


#### Sample
```
 request:
   {
   }
response:
    {
        "success": true,
      "data": [
                  {
                       "_id": "59f1d100d368989c13fcb5cf",
                       "title": "動動狗",
                       "score": 150,
                       "type": 1,
                       "thumb": "http://101.201.234.233/v1/pet/downloadphoto?filename=e74bf82a-a19d-402d-944e-ecd77ccfceba",
                       "goodsNo": "000000000000000000000000",
                       "typeName": "寵物"
                   },
                   {
                       "_id": "59f1d100d368989c13fcb5d0",
                       "title": "健健貓",
                       "score": 150,
                       "type": 1,
                       "thumb": "http://101.201.234.233/v1/pet/downloadphoto?filename=10db6b07-7134-45d3-bcb8-f676e7223d9b",
                       "goodsNo": "000000000000000000000001",
                       "typeName": "寵物"
                   },
           ]
             
    }
  ```   
  

## 宠物现有商品 
> 
#### HttpMethod: `POST`
#### Url: `/pet/myGoods`
#### Header: 
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------
#### Response:
param|type|description
-|-|-
success|bool|是否成功
data    |Array     | Array
item.type     |Number   | 物品类型 (1)"寵物", (2)"飼料盒", (3)"小窩",(4)"玩具",(5)"坐墊",(6)"花束",(7)"飾品",(8)"服飾",(9)"窗簾",(10)"牆壁", (11)"地板", (12)"神奇藥水"
item.title    |string    | 物品名称
item.goodsNo  |String    | 物品ID ，lstGoods API 返回的 goodsNo一致，用于判断此商品是否可继续购买。


#### Sample
```
 request:
   {
   }
response:
    {
        "success": true,
      "data": [
                    {
                        "_id": "59f97c50ddea9b1b06aa6dce",
                        "goodsNo": "000000000000000000000003",
                        "type": 2,
                        "title": "塑膠飼料盒(含普通飼料)"
                    },
                    {
                        "_id": "59f97c50ddea9b1b06aa6dce",
                        "goodsNo": "000000000000000000000008",
                        "type": 3,
                        "title": "豪華小窩"
                    },
           ]
             
    }
  ```   
  

  
***
# 健康币
***

## 插入记录 
> 
#### HttpMethod: `POST`
#### Url: `/healthCoin/insert`
#### Header: 
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------
type        |number     |false      | 类型 1（收入） 2 （支出）
score       |number     |false      | 分值
description |string     |true       | 描述信息

#### Response:
param|type|description
-|-|-
success|bool|是否成功
data    |object    | 目标
_id     |String    | 

#### Sample
```
 request:
 {
      "score":30,
      "type":1,
      "description":"use for gift"
 }
response:
  {
      "success": true,
      "data": {
          "_id": "59ae0dbdc4f616960b1aa276"
      }
  }
  ```   
 

## 获取余额统计 
> 
#### HttpMethod: `POST`
#### Url: `/healthCoin/summery`
#### Header: 
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------

#### Response:
param|type|description
-|-|-
success|bool|是否成功
data    |object    | 目标
income  |number    | 收入
expenses|number    | 支出
balance |number    | 余额

#### Sample
```
 request:
 {
      "score":30,
      "type":1,
      "description":"use for gift"
 }
response:
  {
        "success": true,
        "data": {
            "income": 100,
            "expenses": 60,
            "balance": 40
        }
   }
  ```   

 

## 获取明细 
> 
#### HttpMethod: `POST`
#### Url: `/healthCoin/detail`
#### Header: 
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------

#### Response:
param|type|description
-|-|-
success|bool|是否成功
data    |array     | array 内部object 字段含义同上传
 
#### Sample
```
 request:
 {
      "score":30,
      "type":1,
      "description":"use for gift"
 }
response:
   {
        "success": true,
         "data": [
               {
                   "_id": "59ae025fd5487ec70af574d5",
                   "timeStamp": "2017-09-05T01:48:15.336Z",
                   "score": 10,
                   "type": 1,
                   "description": "add from walk"
               },
               {
                   "_id": "59ae0268d5487ec70af574d6",
                   "timeStamp": "2017-09-05T01:48:24.499Z",
                   "score": 10,
                   "type": 1,
                   "description": "add from sleep"
               }
         ]
   }
  ```   


## 获取抽獎列表 
> 
#### HttpMethod: `POST`
#### Url: `/healthCoin/getLotteryList`
#### Header: 
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------

#### Response:
param|type|description
-|-|-
success|bool|是否成功
data       | array     | array 
item.score | number    | 所需健康幣
item.title | string     |
item.description| string|
 
#### Sample
```
 request:
 {
     
 }
response:
   {
       "success": true,
       "data": [
           {
               "_id": "59c4cbdbb920b7e00e537d71",
               "timeStamp": "2017-09-22T08:37:47.478Z",
               "score": 5,
               "title": "7-11 500元员商品券 X名",
               "description": "7-11 500元商品劵 X名"
           },
           {
               "_id": "59c4cc85b920b7e00e537d72",
               "timeStamp": "2017-09-22T08:40:37.625Z",
               "score": 120,
               "title": "Zenbo標準版+充電器 1名",
               "description": "Zenbo標準版+充電器 1名"
           },
           {
               "_id": "59c4ccc2b920b7e00e537d73",
               "timeStamp": "2017-09-22T08:41:38.592Z",
               "score": 200,
               "title": "iPhone X 64G顏色隨機 1名",
               "description": "iPhone X 64G顏色隨機 1名"
           }
       ]
   }
  ```   

## 參加抽獎，注意系統會自動扣健康幣
> 
#### HttpMethod: `POST`
#### Url: `/healthCoin/signLottery`
#### Header: 
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------
_id         |string     |false      | 獎項id

#### Response:
param|type|description
-|-|-
success|bool|是否成功，如果餘額不足，錯誤碼1033，
balance   |number    | 成功返回賬號餘額

#### Sample
```
 request:
 {
     "_id":"59c4cbdbb920b7e00e537d71"
 }
response:
  {
      "success": true,
      "balance": 11
  }
  ```   
  
## 检查是否參加过抽獎
> 
#### HttpMethod: `POST`
#### Url: `/healthCoin/checkSignedLottery`
#### Header: 
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------
_id         |string     |false      | 獎項id

#### Response:
param|type|description
-|-|-
success|bool|是否成功
data   |object    | 如果没有返回null，否则返回相关信息。

#### Sample
```
 request:
 {
     "_id":"59c4cbdbb920b7e00e537d71"
 }
response:
 {
     "success": true,
     "data": {
         "_id": "59cc900e044173820639fb1e",
         "timeStamp": "2017-09-28T06:00:46.858Z",
         "score": 5,
         "description": "7-11 500元员商品券 X名"
     }
 }
  ```   


 
## 购买宠物物品
> 
#### HttpMethod: `POST`
#### Url: `/healthCoin/buyPetGoods`
#### Header: 
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------
_id         |string     |false      | 商品id

#### Response:
param|type|description
-|-|-
success|bool|是否成功，如果餘額不足，錯誤碼1033，
balance   |number    | 成功返回賬號餘額

#### Sample
```
 request:
 {
     "_id":"59f1d100d368989c13fcb5de"
 }
response:
{
    "success": true,
    "balance": 174
}
  ```   

  
  
***
# 用药提醒
***

## 获取用药提醒  
> 
#### HttpMethod: `POST`
#### Url: `/user/getMedicationReminder`
#### Header: 
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------

#### Response:
param|type|description
-|-|-
success|bool|是否成功
data    |object    | 目标
_id     |String    | string
items   |Array     | 用药提醒内容， 

#### Sample
```
 request:
 {
      
 }
response:
  {
      "success": true,
       "data": {
              "_id": "59b109d4bb0c6994e0d61e81",
              "items": [
                  {
                      "order": 0,
                      "title": "一天一次（QD):每日9點提醒",
                      "enable": false,
                      "_id": "59b108fe45d55ab00be9ad98",
                      "reminderTime": [
                          9
                      ]
                  },
                  {
                      "order": 1,
                      "title": "一天兩次（BID):每日9點，17點提醒",
                      "enable": false,
                      "_id": "59b108fe45d55ab00be9ad97",
                      "reminderTime": [
                          9,
                          17
                      ]
                  },
                  {
                      "order": 2,
                      "title": "一天三次（TIDPC):每日9點，每日13點，18點提醒",
                      "enable": false,
                      "_id": "59b108fe45d55ab00be9ad96",
                      "reminderTime": [
                          9,
                          13,
                          17
                      ]
                  }
              ]
          }
  }
  ```   

## 更新用药提醒  
> 
#### HttpMethod: `POST`
#### Url: `/user/updateMedicationReminder`
#### Header: 
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------
_id         |String     |false      |id
items       |Array      |false      |get时获取的items，更新时请设置 enable ，取值为 true/false

#### Response:
param|type|description
-|-|-
success|bool|是否成功
data    |object    | 目标
_id     |String    | 

#### Sample
```
 request:
 {
       "_id": "59b109d4bb0c6994e0d61e81",
                    "items": [
                        {
                            "order": 0,
                            "title": "一天一次（QD):每日9點提醒",
                            "enable": false,
                            "_id": "59b108fe45d55ab00be9ad98",
                            "reminderTime": [
                                9
                            ]
                        },
                        {
                            "order": 1,
                            "title": "一天兩次（BID):每日9點，17點提醒",
                            "enable": false,
                            "_id": "59b108fe45d55ab00be9ad97",
                            "reminderTime": [
                                9,
                                17
                            ]
                        },
                        {
                            "order": 2,
                            "title": "一天三次（TIDPC):每日9點，每日13點，18點提醒",
                            "enable": false,
                            "_id": "59b108fe45d55ab00be9ad96",
                            "reminderTime": [
                                9,
                                13,
                                17
                            ]
                        }
                    ]
 }
response:
  {
      "success": true,
      "data": {
          "n": 1,
          "nModified": 1,
          "ok": 1
      }
  }
  ```   
 
***
# 广告
***

## 获取首页广告  
> 
#### HttpMethod: `POST`
#### Url: `/adseed/homeAD`
#### Header: 
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------

#### Response:
param|type|description
-|-|-
success|bool|是否成功
data    |object    | 目标
_id     |String    | string
type    |Number    |  1 首页 2 底部 3 底部 
source  |String    | 广告商
keyId   |String    | 广告识别ID

#### Sample
```
 request:
 {
      
 }
response:
  {
      "success": true,
       "data": {
              "_id": "000000000000000000000000",
              "type": 1,
              "source": "youtube",
              "keyId": "v3O61vIN9Ks",
              "moreLink": "https://www.youtube.com/channel/UCltLZ1l3dgPvs_INJf-770g",
              "title": "新北勞工八月大腸癌免費檢查",
              "content": "新北市轄內工商行號的勞工朋友不分男女、只要揪滿30人，就可與當地衛生所協調日期，派專業的醫護團隊前往公司免費進行大腸癌及口腔癌篩檢，守護勞工朋友的健康、守護勞工朋友的家庭",
              "timeStamp": "2017-09-08T01:32:53.133Z",
              "recordBy": null,
              "isDeleted": false
          }
  }
  ``` 
  

## 获取活動快訊滾動列表  
> 
#### HttpMethod: `POST`
#### Url: `/activity/getMarqueeList`
#### Header: 
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------

#### Response:
param|type|description
-|-|-
success|bool|是否成功
data    |Array    | 目标

#### Sample
```
 request:
 {
      
 }
response:
  {
      "success": true,
      "data": [
              {
                  "title": "社區課程002",
                  "description": "動健康初級班，適合從未接觸過動健康的民眾。",
                  "_id": "59b74a1282e7db094ce74107"
              },
              {
                  "title": "專業運動課程001",
                  "description": "動健康初級班，適合從未接觸過動健康的民眾。",
                  "_id": "59b74a1282e7db094ce74104"
              },
              {
                  "title": "社區運動班01",
                  "description": "活動02",
                  "_id": "59b742d01dae2105208a3283"
              },
              {
                  "title": "大型活動一",
                  "description": "好吃好玩 der",
                  "_id": "59af7d2f042b6e0f107006be"
              }
       ]
  }
  ```      
  
 
  
***
# 群組功能
***

## 創建群組  
> 
#### HttpMethod: `POST`
#### Url: `/fitGroup/create`
#### Header: 
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------
title       |String     |false      |名稱
type        |Number     |false      |類型 (1)萬步走 (2)運動 30 分 (3) 五蔬果 (4)八杯水
visible     |boolean    |false      | 開放true 私有false
description |String     |true       |介紹
avatar      |String     |true       |圖標Url ，請先call upload  上傳圖像后獲取文件url 填入，可不填
  
#### Response:
param|type|description
-|-|-
success|bool|是否成功
data    |object    | 目标
_id     |String    | string

#### Sample
```
 request:
 {
      "title":"干杯吧朋友",
      "type":1,
      "description":"每天八杯水，健康五十年",
      "visible":true,
      "avatar":"http://localhost:4001/v1/fitGroup/downloadphoto?filename=dfdd370c-912b-458a-a145-0e2ea8a96067"
 }
response:
 {
     "success": true,
     "data": {
         "_id": "59e490e2e31bee270dbaa80e"
     }
 }
  ```   


## 更新群組  
> 
#### HttpMethod: `POST`
#### Url: `/fitGroup/update`
#### Header: 
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------
groupId     |string     |false      | 群id
title       |String     |true       |名稱
type        |Number     |true       |類型 (1)萬步走 (2)運動 30 分 (3) 五蔬果 (4)八杯水
visible     |boolean    |true       |開放true 私有false
description |String     |true       |介紹
avatar      |String     |true       |圖標Url ，請先call upload  上傳圖像后獲取文件url 填入，可不填
  
#### Response:
param|type|description
-|-|-
success|bool|是否成功
data    |object    | 目标

#### Sample
```
 request:
 {
    "groupId":"59e47165a2ee860a0a9c49a7",
    "title":"水果大比拼",
    "type":2,
    "description":"水果有营养",
    "visible":true,
    "avatar":"http://101.201.234.233/v1/fitGroup/downloadphoto?filename=dfdd370c-912b-458a-a145-0e2ea8a96067"
 }
response:
 {
     "success": true,
     "data": {
         "n": 1,
         "nModified": 1,
         "ok": 1
     }
 }
  ```   


## 上傳群組圖標  
> 
#### HttpMethod: `POST`
#### Url: `/fitGroup/upload`
#### Header: 
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------
  files     |File       |false       |上傳採用的是 form-data 模式，具體參考食物上傳
#### Response:
param|type|description
-|-|-
success|bool|是否成功
data    |Object     | 
 
#### Sample
```
 request:
{
    "types":[2]
}
response:
{
    "success": true,
    "fileUrl": "http://localhost:4001/v1/fitGroup/downloadphoto?filename=53bbd27c-8422-4baf-96c2-1648f9753b8f"
}
  ```   

## 下載群組圖標  
> 
#### HttpMethod: `GET`
#### Url: `/fitGroup/downloadphoto`
#### Header: 
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------
  filename  |string       |false    | 返回的標識字串
#### Response:
param|type|description
-|-|-
圖形數據
 
#### Sample
```
URL 格式：http://localhost:4001/v1/fitGroup/downloadphoto?filename=19a94389-63d2-43a8-bb72-b688a7d772fe

  ```   

## 群組列表
> 
#### HttpMethod: `POST`
#### Url: `/fitGroup/list`
#### Header: 
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------
  
#### Response:
param|type|description
-|-|-
success|bool|是否成功
data    |Array     | 
 
#### Sample
```
 request:
{
   
}
response:
 {
     "success": true,
     "data": [
          {
             "_id": "59e490e2e31bee270dbaa80e",
             "title": "運動大本營",
             "type": 2,
             "description": "每天運動30分，健康五十年",
             "avatar": "http://localhost:4001/v1/fitGroup/downloadphoto?filename=dfdd370c-912b-458a-a145-0e2ea8a96067",
             "numberOfMember": 1,
             "owner": true
           }
   ]
 }
  ```   
  


## 查看待审核群組
> 
#### HttpMethod: `POST`
#### Url: `/fitGroup/listPending`
#### Header: 
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------
  
#### Response:
param|type|description
-|-|-
success|bool|是否成功
data    |Array     |
item.owner: 是否是群主 , 与下面 2，3状态组合， 可以得出4种状态 
item.member.state  （1） 正常 （2） 邀请， （3） 申请 
 
 
#### Sample
```
 request:
{
   
}
response:
 {
     "success": true,
     "data": [
          {
                     "_id": "59e47165a2ee860a0a9c49a7",
                     "avatar": "http://101.201.234.233/v1/fitGroup/downloadphoto?filename=dfdd370c-912b-458a-a145-0e2ea8a96067",
                     "title": "吃水果大賽",
                     "member": {
                          "userNo": "59ddbbf33f398a155c9c5310",
                               "state": 3,
                               "name": "billwang",
                               "photo": "default.png"
                     },
                     "owner": true
          }
   ]
 }
```

## 查找群組  
> 
#### HttpMethod: `POST`
#### Url: `/fitGroup/find`
#### Header: 
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------
  types     |Array      |true       |不傳默認顯示所有群組，類型 (1)萬步走 (2)運動 30 分 (3) 五蔬果 (4)八杯水
  name      |String     |true       |群名
  groupId   |String     |true       |群組ID
#### Response:
param|type|description
-|-|-
success|bool|是否成功
data    |Array     | 
 
#### Sample
```
 request:
{
    "types":[2]
}
response:
 {
     "success": true,
     "data": [
          {
             "_id": "59e490e2e31bee270dbaa80e",
             "title": "運動大本營",
             "type": 2,
             "description": "每天運動30分，健康五十年",
             "avatar": "http://localhost:4001/v1/fitGroup/downloadphoto?filename=dfdd370c-912b-458a-a145-0e2ea8a96067",
             "numberOfMember": 1,
             
           }
   ]
 }
  ```
  
## 群组详情
> 
#### HttpMethod: `POST`
#### Url: `/fitGroup/detail`
#### Header: 
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------
  groupId   | string    | false     | 群id
#### Response:
param|type|description
-|-|-
success|bool|是否成功
data    |Object     | 
 
#### Sample
```
 request:
{
    "groupId":"59e891ae8143f22f13d66242"
}
response:
{
    "success": true,
    "data": {
        "_id": "59e891ae8143f22f13d66242",
        "title": "跑步軍團-093-310",
        "avatar": "http://localhost:4001/v1/group/downloadphoto?filename=dfdd370c-912b-458a-a145-0e2ea8a96067",
        "members": [
            {
                "userNo": "59ddbbf33f398a155c9c5310",
                "name": "billwang",
                "photo": "default.png"
            }
        ],
        "owner": false
    }
}
  ```     

## 查找用户  
> 
#### HttpMethod: `POST`
#### Url: `/fitGroup/findUser`
#### Header: 
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------
account     | string    |false      | 用户账号或手机号
#### Response:
param|type|description
-|-|-
success|bool|是否成功
data     |Object     | 
item._id   | String    | userNo
item.photo | String    | 参考用户api 获取头像
 
#### Sample
```
 request:
{
    "types":[2]
}
response:
 {
     "success": true,
      "data": {
            "_id": "5982ec27587743070562bf8e",
            "name": "billwang",
            "photo": "default.png"
      }
 }
  ```   


## 群主功能
> 
#### HttpMethod: `POST`
#### Url: `/fitGroup/invite`
#### Url: `/fitGroup/approve`
#### Url: `/fitGroup/reject`
#### Url: `/fitGroup/kick`
#### Header: 
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------
groupId     | string    |false      | 群ID
userNo     | string     |false      | 用户ID

#### Response:
param|type|description
-|-|-
success|bool|是否成功
data     |Object     | 
 
#### Sample
```
 request:
{
  "groupId":"59e891ae8143f22f13d66242",
  "userNo":"5982ec27587743070562bf8e"
}
response:
 {
     "success": true,
      "data": {
           "n": 1,
           "nModified": 1,
           "ok": 1
      }
 }
  ```

## 用户功能 
> 
#### HttpMethod: `POST`
#### Url: `/fitGroup/apply`
#### Url: `/fitGroup/agree`
#### Url: `/fitGroup/disagree`
#### Url: `/fitGroup/quit`
#### Header: 
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------
groupId     | string    |false      | 群ID

#### Response:
param|type|description
-|-|-
success|bool|是否成功
data     |Object     | 
 
#### Sample
```
 request:
{
  "groupId":"59e891ae8143f22f13d66242",
}
response:
 {
     "success": true,
      "data": {
           "n": 1,
           "nModified": 1,
           "ok": 1
      }
 }
  ```        

## 获取运动群组排名
> 
#### HttpMethod: `POST`
#### Url: `/fitGroup/getTodaySportRank`
#### Header: 
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------
  groupId   | string    | false     | 群id
#### Response:
param|type|description
-|-|-
success|bool|是否成功
data    |Array     | 返回本群的运动排名数组，如果数组为空，表示没有数据，
item.isSelf|boolean | 为true表示用户自己，没有为true的item表示用户无数据。 
#### Sample
```
 request:
{
    "groupId":"59e891ae8143f22f13d66242"
}
response:
{
    "success": true,
    "data": [
                {
                    "sportsTime": 60,
                    "userNo": "59ddbbf33f398a155c9c5310",
                    "name": "billwang",
                    "photo": "default.png",
                    "isSelf": false
                },
                {
                    "sportsTime": 30,
                    "userNo": "5982ec27587743070562bf8e",
                    "name": "billwang",
                    "photo": "5982ec27587743070562bf8e.png",
                    "isSelf": true
                }
            ]
}
  ```   

## 获取运动步行排名
> 
#### HttpMethod: `POST`
#### Url: `/fitGroup/getTodayWalkRank`
#### Header: 
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------
  groupId   | string    | false     | 群id
#### Response:
param|type|description
-|-|-
success|bool|是否成功
data    |Array     | 返回本群排名数组，如果数组为空，表示没有数据，
item.isSelf|boolean | 为true表示用户自己，没有为true的item表示用户无数据。 
#### Sample
```
 request:
{
    "groupId":"59e891ae8143f22f13d66242"
}
response:
{
    "success": true,
    "data": [
               {
                      "steps": 11400,
                      "userNo": "5982ec27587743070562bf8e",
                      "name": "billwang",
                      "photo": "5982ec27587743070562bf8e.png",
                      "isSelf": true
                  }
            ]
}
  ```   

    