name字段：名称

value字段：cookie的值

domain字段：为可以访问此cookie的域名，顶级域名只能设置domain为顶级域名，不能设置为二级域名或者三级域名，否则cookie法生成。二级域名能读取设置了domain为顶级域名或者自身的cookie，不能读取其他二级域名domain的cookie。**所以要想cookie在多个二级域名中共享，需要设置domain为顶级域名，这样就可以在所有二级域名里面或者到这个cookie的值了**。（可以想象成一个树状结构）

path字段：为可以访问此cookie的页面路径。 比如domain是abc.com,path是/test，那么只有/test路径下的页面可以读取此cookie。

Size字段：设置cookie的大小

http字段：cookie的**httponly**属性。若为true，则**只有在http请求头中会带有此cookie的信息，而不能通过document.cookie来访问此cookie**

expires/Max-Age字段：设置cookie的过期时间。不设置的话默认值是Session，意思是cookie会和session一起失效。当浏览器关闭(不是浏览器标签页，而是整个浏览器) 后，此cookie失效。

**secure字段：设置是否只能通过https来传递此条cookie**

