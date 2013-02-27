#i18n support 本地化支持#

如需增加本地化资源在nls添加相应地区代码文件夹，并在文件夹内增加res.js文件，文件内容结构如下，您可以随意增加属性

> define({
> 
>         "welcome": "Welcome",
>         "login": "Login",
>         "logout": "Logut",
>         "title":"NJBlog base on Nodejs"
> 
> });
> 


在nls根目录中的res.js配置相应本地化资源，并在main.js中配置如下节点内容
> i18n: {
>         locale: 'en-us'
>     },