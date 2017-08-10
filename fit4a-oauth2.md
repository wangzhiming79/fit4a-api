# 新北动健康OAuth2.0 API接口文档 v1.0.0  
    测试服务器地址:http://101.201.234.233:4001
## 
    
## 请求授权code
>
#### HttpMethod: `GET`
#### Url: `/oauth/authorise`
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------
client_id        |string        |false      | client_id 
redirect_uri     |string  |false      |授权回调地址
state            |string  |true       |用于保持请求和回调的状态，在回调时，会在Query Parameter中回传该参数
#### Response:
param|type|description
-|-|-
code|string|用于第二步调用oauth/token接口，获取授权后的access token
state|string|如果传递参数，会回传该参数

#### Example
```
//请求
http://127.0.0.1:4001/oauth/authorise?client_id=oauth2Client&redirect_uri=http://127.0.0.1:3000/fit4a-callback

//同意授权后会重定向
http://127.0.0.1:3000/fit4a-callback?code=fc660d1cc15e7f4a8e760d4333c0fcba0a780217
```
## 请求授权 Access Token
> 
#### HttpMethod: `POST`
#### Url: `/oauth/token`
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------
client_id        |string        |false      | 申请应用时分配的client_id 
client_secret    |string        |false      | 申请应用时分配的client_secret
redirect_uri     |string  |false       |授权回调地址
grant_type       |string  |false       |请求的类型，填写authorization_code  
code             |string  |false       |调用authorize获得的code值 

#### Response:
param|type|description
-|-|-
code|string|用于第二步调用oauthtoken接口，获取授权后的access token
state|string|如果传递参数，会回传该参数

#### Example
```
//成功返回数据
{
    "token_type": "bearer",
    "access_token": "b7c4d193692e0402cabb80df81948d56d432136a",
    "expires_in": 3600,
    "refresh_token": "eb60202f6fde75acfd3568fd6d7ec07934c41047"
}
```
## 获取用户信息
> 
#### HttpMethod: `GET`
#### Url: `/oauth/userProfile`
#### Header:
Headers       |type       |nullable   |description
------------|-----------|-----------|-----------
Authorization      |string        |false      | 账号授权token, 格式 "Bearer " + token 字串

#### Response:
param|type|description
-|-|-
success|bool|是否成功

#### Example
```
//返回数据
{
    "success": true,
    "properties": {
        "name": "Bill",
        "gender": "male",
        "birthday": "1982/01/15",
        "address": "xi'an"
    }
}
```
## 刷新授权 Access Token
> 
#### HttpMethod: `POST`
#### Url: `/oauth/token`
#### Request: 
param       |type       |nullable   |description
------------|-----------|-----------|-----------
client_id        |string        |false      | 申请应用时分配的client_id 
client_secret    |string        |false      | 申请应用时分配的client_secret
redirect_uri     |string  |false       |授权回调地址
grant_type       |string  |false       |请求的类型，填写refresh_token 
refresh_token    |string  |false       |请求到的refresh_token 

#### Response:
param|type|description
-|-|-
code|string|用于第二步调用oauthtoken接口，获取授权后的access token
state|string|如果传递参数，会回传该参数

#### Example
```
//成功返回数据
{
    "token_type": "bearer",
    "access_token": "b7c4d193692e0402cabb80df81948d56d432136a",
    "expires_in": 3600,
    "refresh_token": "eb60202f6fde75acfd3568fd6d7ec07934c41047"
}
```