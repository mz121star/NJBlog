

#*NJBlog*     [![Build Status](https://travis-ci.org/mz121star/NJBlog.png?branch=master)](https://travis-ci.org/mz121star/NJBlog)
  [项目进度查询](https://trello.com/board/node-js-blog/50dda31c39e3d3341b001433 "项目进度")

----------

**Project introduction：**

  - NJBLog through  [Nodejs](http://nodejs.org/ "Nodejs") and [express](http://expressjs.com/) Provide the Restful API.
  - Data stored in [Mongodb](http://www.mongodb.org/)，Driven by [Mongoose](https://github.com/LearnBoost/mongoose) 。
  - Front-End  use of the [AngularJs](http://angularjs.org/)。
  - NJBlog all javascript files follow AMD standard，by [Requirejs](http://requirejs.org/)   loading （The future might consider using [Seajs](http://seajs.org/docs/)）。
  - NJBlog through [mocha](http://visionmedia.github.com/mocha/) and [jasmine](http://pivotal.github.com/jasmine/) for UT 。
  - Style use of the [bootstrap](https://github.com/twitter/bootstrap)。
  - NJBlog building by Grunt。
 。

**Checkout and Run：**

  > First ,Assume you installed[Mongodb](http://www.mongodb.org/)，and [Nodejs](http://nodejs.org/ "Nodejs") in your OS。

**1，clone code**

 >  `git clone https://github.com/mz121star/NJBlog.git`
 

**2，install**

>  `npm install`


**3，Run app**


>  `node app.js`


----

**项目介绍：**

  - NJBlog后台采用[Nodejs](http://nodejs.org/ "Nodejs")+[express](http://expressjs.com/)来提供Restful API.
  - 数据库采用 [Mongodb](http://www.mongodb.org/)，通过[Mongoose](https://github.com/LearnBoost/mongoose)驱动。
  - NJBlog前台采用[AngularJs](http://angularjs.org/)进行开发。
  - NJBlog目前所有前端JS代码全部采用模块化编写，使用[Requirejs](http://requirejs.org/)驱动（将来可能考虑采用国产[Seajs](http://seajs.org/docs/)）。
  - NJBlog使用[mocha](http://visionmedia.github.com/mocha/)+[jasmine](http://pivotal.github.com/jasmine/)来编写js单元测试。
  - 前端UI使用了[bootstrap](https://github.com/twitter/bootstrap)。
  - NJBlog使用强大的grunt对项目进行构建工作。
  - NJBlog全部代码托管在GitHub上，使用牛逼的travis-ci进行持续集成（可用来跑单元测试）。
  - 项目的demo由appfog和mongohq提供动力。

**获得并运行项目：**

  > 首先确保您系统中安装了[Mongodb](http://www.mongodb.org/)，和[Nodejs](http://nodejs.org/ "Nodejs")，一起准备完善之后。按照如下操作。

**1，clone代码**

 >  `git clone https://github.com/mz121star/NJBlog.git`
 

**2，安装依赖**

>  `npm install`


**3，启动程序**


>  `node app.js`
 




  


```

Copyright (c) 2012 Jarrick,Sailor contributors

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

```