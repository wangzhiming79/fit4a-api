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
timeStamp   |string     |false      | 指定起始时间UTC 
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
data        |array   | 目标数组
sequence    |number | 显示次序
systemType  |bool   | 系统创建
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
date            |string     |false      | 就餐日期 
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
date            |string     |false      | 就餐日期 
foods           |array      |false      | 目标数组
type            |number     |false      | 蔬（1） 果（2） 蛋白（3） 水（4） 
value           |number     |false      | 份数 
#### Response:
param|type|description
-|-|-
success|bool|是否成功
data     |array   | 目标数组
#### Sample
```
 request:  //添加 1份蔬菜 2分蛋白

  {
      "date"  : "2017/08/15",
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
  data        |array  | 目标数组
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
             "data": [
                 {
                     "_id": "599c123281ab675e11f41dd5",
                     "calories": 1800,
                     "recordBy": null,
                     "isDeleted": false,
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
             ]  
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
foods       |array   | item foodTypeID 和 totalValue 数据
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
                            "foodTypeID": "000000000000000000000000",
                            "totalValue": 5
                        },
                        {
                            "foodTypeID": "000000000000000000000001",
                            "totalValue": 6
                        },
                        {
                            "foodTypeID": "000000000000000000000002",
                            "totalValue": 7
                        },
                        {
                            "foodTypeID": "000000000000000000000003",
                            "totalValue": 8
                        },
                        {
                            "foodTypeID": "000000000000000000000004",
                            "totalValue": 7
                        },
                        {
                            "foodTypeID": "000000000000000000000005",
                            "totalValue": 8
                        }
                        
                    ]
                }
               
      ]
  }
```
##  获取每月饮食统计（从指定日-30）
>
#### HttpMethod: `POST`
#### Url: `/food/getGroudDataByMonth`
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
foods       |array   | item foodTypeID 和 totalValue 数据
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
                           "foodTypeID": "000000000000000000000000",
                           "totalValue": 5
                       },
                       {
                           "foodTypeID": "000000000000000000000001",
                           "totalValue": 6
                       },
                       {
                           "foodTypeID": "000000000000000000000002",
                           "totalValue": 7
                       },
                       {
                           "foodTypeID": "000000000000000000000003",
                           "totalValue": 8
                       },
                       {
                           "foodTypeID": "000000000000000000000004",
                           "totalValue": 7
                       },
                       {
                           "foodTypeID": "000000000000000000000005",
                           "totalValue": 8
                       }
                       
                   ]
            }
     ]
 }
```