### 对话框组件
功能：弹框
目录：component文件夹下的modal
使用：点击页面上的绿色按钮，展示或隐藏弹窗，改变popup的属性值可以切换弹窗模式。叉号icon使用了阿里的图标库。

### API
| 属性   |   说明    |  类型     |  默认值 |
| :----  |   :----   |  :------  |  :----  |
| visible | 对话框是否可见 |Boolean |false|
| popup | 是否弹窗模式 |Boolean |false|
| title | 标题 |String |''|
| closable | 是否显示关闭按钮	 |Boolean |true|
| maskClosable | 点击蒙层是否允许关闭 |Boolean |true|
| onClose | 关闭弹窗 |function |()=>{}|
| isFooter | 是否展示底部内容 |Boolean |true|
| footerChildEle | 底部子元素 |String |''|
| actions | 底部操作按钮 |Array |[]|
| onConfirm | 底部确认按钮 |function |()=>{}|
| onCancle | 底部取消按钮 |function |()=>{}|
| contentStyle | 手动设置 content 的样式	 |Object |null|

### 两种模式
**正常弹窗模式**
![image_1cuoh47f9gb11e7c3r39uococ9.png-59.6kB](http://static.zybuluo.com/only-twj520Q/asz1ony6xzmq4mjzfj4zr8wi/image_1cuoh47f9gb11e7c3r39uococ9.png)

**上弹模式**
![image_1cuoibugm1e3t15p75fgv9318s1m.png-49.2kB](http://static.zybuluo.com/only-twj520Q/5wtp9cuosd51j5lzmatcmgd8/image_1cuoibugm1e3t15p75fgv9318s1m.png)
