#### http状态码
* 100-199  信息性状态码， 接受的请求正在处理
* 200-299 请求成功， 请求正常处理完毕
* 300-399 重定向 需要进行附加操作以完成请求
    * 301 moved permanently 新url在响应头信息
    * 302 found/moved temporarily
    * 304 命中协商缓存
* 400~499 客户端错误 服务器无法处理请求
    * 401 unauthorized
    * 403 forbidden   
    * 404 not found
* 500~599 服务器错误 服务器请求出错

#### https加密实现
总结： 对称加密+非对称加密(HTTPS采用这种方式)，使用非对称加密验证证书，使用非对称加密传递密钥，使用对称加密传输内容。
对称加密：使用相同的密匙对同一密码进行加密和解密。
非堆成加密：使用不同的密钥进行加密和解密。

步骤：
* 服务器管理者向第三方机构申请证书。
* 第三方机构验证身份合法后，发放证书。包含一个数字签名，发放给服务器。其中签名的产生算法：首先，使用散列函数（哈希函数）计算公开的明文信息的信息摘要，然后，采用CA的私钥对信息摘要进行加密，密文即签名;
* 客户端建立发起请求，服务器返回证书，验证证书的合法性、公钥是否值得信任。
* 客户端 Client 读取证书中的相关的明文信息，采用相同的散列函数计算得到信息摘要。然后，利用对应CA的公钥解密签名数据，对比证书的信息摘要，如果一致，则可以确认证书的合法性，即服务器的公开密钥是值得信赖的。
* client生成随机数，通过服务器公钥加密。传给服务器，服务器通过私钥解密得到密钥，此过程为非堆成加密。以后通信通过这个密钥进行对称加密传输。

https://www.cnblogs.com/fengf233/p/11775415.html

#### get和post

#### http缓存
##### 强缓存
当第一次请求时服务器返回的响应头中： 
* Cache-Control的max-age没有过期
* Expires的缓存时间没有过期
状态码200

##### 协商缓存
当第一次请求时服务器返回的响应头中
* 没有Cache-Control和Expires
* Cache-Control和Expires过期
* Cache-Control的属性设置为no-cache时(即不走强缓存)
那么浏览器第二次请求时就会与服务器进行协商，与服务器端对比判断资源是否进行了修改更新。

作用字段：
ETag： hash值
If-Not-Match： hash值

Last-Modified： GMT格式的最后修改时间
If-Modified-Since： GMT格式的最后修改时间
对比Etag 和 If-Not-Match，Last-Modified 和 If-Modified-Since。如果返回的是304状态码，则说明请求的资源没有修改，浏览器可以直接在缓存中取数据，
否则，服务器会直接返回数据。

注： etag 精确到秒级， Last-Modified只能到秒。etag优先级更高。

html 缓存设置
<meta http-equiv="Cache-Control" content="max-age=7200" />
// 其他主流浏览器识别的标签
<meta http-equiv="Expires" content="Mon, 20 Aug 2018 23:00:00 GMT" />


#### 从url到网页展示
##### DNS解析  域名 -> ip
* 查询浏览器缓存
* 查询本地host文件
* 询问 ISP（Internet Service Provider）互联网服务提供商
##### 通信过程 - 三次握手
* 客服端发送标记为SYN，序号为seq=1的数据包(报文)，表示发起一个新连接。
* 服务端返回标记为SYN/ACK的数据包，表示同意创建新连接。
* 客户端发送标有标记为ACK的数据包，表示“确认收到服务器端同意连接的信号”
##### 通信过程 - 四次挥手
* 客户端发送请求，申请断开连接，进入等待阶段，此时不会发送数据，但是会继续接收数据。
* 服务端接收请求后，告知客户端已明白，此时服务端进入等待状态，不会再接收数据，但是会继续发送数据。
* 服务端发送完剩余的数据后，告知客户端可以断开连接，此时服务端不会发送和接收数据。
* 客户端收到后，告知服务端我开始断开连接。服务端收到后，开始断开连接。
https://baijiahao.baidu.com/s?id=1654225744653405133&wfr=spider&for=pc


#### http1.0 和 http2.0 和 https