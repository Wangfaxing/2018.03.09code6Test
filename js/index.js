/*
	我们在这里编写主页的js代码
	注意这里编写的代码函数，必须按照requirejs的AMD规范去编写
*/
/*
	第一个参数，是我们要引入的模块
	第二个参数，是当模块引入之后，我们要做的操作。
		【注】在回调函数中使用模块中的函数时，一定要当做参数传入
 */
define(["jquery","add"],function($,add){
	var main = function(){

		$(function(){
			$("#div1").click(function(){
				alert("我是测试JQ的点击事件sss");
			})
			console.log("两个数相加的和结果是：" + add.add(20,25));
		})
		/*var div1 = document.getElementById("div1");
		div1.onclick = function(){
			alert("我是测试JQ的点击事件");
		}*/

		return "我是main函数";
	}
	return {
		main : main
	}
});