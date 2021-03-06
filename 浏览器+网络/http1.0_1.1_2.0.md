# HTTP 1.0

- 短链接：每次发送请求都需要重新建立tcp的链接，三次握手，性能比较差。
- 不允许断点续传，而且不能只传输对象的一部分，要求传输整个对象。
- 没有host头，（host：www.baidu.com）。

# 1.1

-  引入了协议缓存 last modify 和 etag 的使用。（也就是说协议缓存是1.1的版本中引用的）
- 在请求头引入range，允许只请求资源的部分的内容，返回的状态码是 206
- 含有host的请求header
- **支持长链，请求流水线**，在一个tcp链接上可以传输多个http串行请求，减少了建立和关闭链接的消耗，在http1.1中，默认开启Connection: keep-alive。

> 因为是串行的，所以会存在一个问题，第一个请求卡住了，后面的请求就没办法处理，（队头阻塞、线头阻塞）  

# 2.0

- 新的二进制格式，将请求拆分成多个帧。
- 多路复用。一个连接上可以有多个reques，一个request对用一个Id，每个request可以随机的混杂在一起，接收方可以根据requestid将request再归属到各自不同的服务端请求里面。
- header压缩，header的信息在1.0和1.1中会重复发送，在2.0中会缓存一份header的相关的信息，减少开销。
- 服务端推送，可以将一个请求里的其他相关文件一并发送给客户端。

> 1.1 中的请求是请求串行的，2.0中的请求是并行的，串行的情况下，第一个请求被卡住，后面的也必然被卡住所
>
> 毕竟HTTP属于基于TCP的应用层的协议，若TCP传输的过程中，某些的丢失，也会导致整个stream的的延迟。