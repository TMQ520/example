QUnit.module("测试");
QUnit.test("二部分",function(assert){
	//第二题
	var str = 'update set name=?';
	var pattern = /name/g;
	function findName(pat,str){
		var res = pat.exec(str);
		return res;
	}
	assert.deepEqual(findName(pattern,str),['name'],"编写一个方法用正则表达式找出name");
	

	//第三题
	var num = [1,2,3,4,5,4,3,2,1],num2 = [3,4,5,4,3];
	function gt2(num){
		var num1 = num.filter(function(item,index,array){
			return item>2;
		});
		return num1;
	}
	assert.deepEqual(gt2(num),num2,'编写一个方法 找出大于2的');
	
});