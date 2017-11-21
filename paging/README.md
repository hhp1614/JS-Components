# 原生JS分页插件
- 引入插件
	```
	<script src="./index.js"></script>
	```
- 实例化
	```
	new Paging({
	    listEl      : '.paging',                // list 列表父级(支持ID或者唯一的类名)
	    pageEl      : '#paging-pages',          // page 页码父级(支持ID或者唯一的类名)
	    limit       : 15,                       // 每页显示数目(如果不写，默认是10)
	    class       : 'btn btn-default btn-xs', // 给页码添加类名(需要自己定义样式，可以引用样式库)
	    activeClass : 'btn-primary'             // 给页码添加active类名(需要自己定义样式，可以引用样式库)
	});
	```
- 效果
	![1.gif](https://i.loli.net/2017/11/21/5a13d43c391c1.gif)
