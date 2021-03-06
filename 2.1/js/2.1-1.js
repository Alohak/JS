function sayHi(){
	alert("Hi!");
}

sayHi();

/*包含在JS内部的JavaScript代码将被从上至下依次解释。
解释器会解释一个函数的定义，然后将该定义保存在自己的环境当中。
在解释器对JS内部的所有代码求值完毕以前，页面中的其余内容都不会被浏览器加在或显示。*/

/*带有src属性的<script>元素不应该在其<script>和</script>标签之间再包含额外的JavaScript代码。
如果包含了嵌入的代码，则只会下载并执行外部脚本文件，嵌入的代码会被忽略。*/