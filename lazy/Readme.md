### 懒加载组件
功能：代码分割，按需加载
目录：component文件夹下的lazy.js
使用：方法参见 component/demo 下的index。将组件按照要求的配置格式传给 lazy.js，返回一个高阶组件。

### 加载过程如下
**加载前**
![image_1cuo81vtq1nc7v1q1g2b12mk6jd9.png-52.9kB](http://static.zybuluo.com/only-twj520Q/os7po7i0awhh7qtbpn0uoojr/image_1cuo81vtq1nc7v1q1g2b12mk6jd9.png)
**加载中**
![image_1cuo83iu1sl8104v92bfctsbim.png-63.5kB](http://static.zybuluo.com/only-twj520Q/y4hrugbc2t66kidqv8pj0uj9/image_1cuo83iu1sl8104v92bfctsbim.png)
**加载完成**
![image_1cuo842s21i3hpfs1sbc19n3k3213.png-38.4kB](http://static.zybuluo.com/only-twj520Q/ayklmrn9uewwl4nn3wwys2z0/image_1cuo842s21i3hpfs1sbc19n3k3213.png)

**注意**：需要引入@babel/plugin-syntax-dynamic-import插件和@babel/polyfill
