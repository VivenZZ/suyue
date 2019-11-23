### 目录介绍
>bin 项目启动页
>
>controller 项目业务控制层
>
>public 静态资源文件，包括api接口文档输出地址apidoc
>
>routes 路由文件
>
>views 后台操作界面 页面地址
>
>


### 启动服务
```npm
npm start
```

### 重新生成api文档
> -i 输入文件地址，当前是routes
>
> -o 输出地址，当前是public/apidoc/
```npm
apidoc -i routes/ -o public/apidoc/
``` 