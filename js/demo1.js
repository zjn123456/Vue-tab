//判断是否是NaN
    console.log(Number.isNaN("123"))  //false
//判断一个数是否是有限的并且只能接收数值类型，
//且其它类型一律返回false 
    console.log(Number.isFinite(2.1))
//判断是否是整数
    console.log(Number.isInteger(1.0))  //true
//es6默认值
	function test(val="hello"){
		console.log(val)
	}
	test()

let a=b;
var b=123;
//var b变量声明提升
console.log(a)//undefined

//传参的优先级大于默认

//区别  从本质上没有不同 Javascript 弱类型语言  在js中称函数 在后端语言中成为方法
	function fun(){}
	function Fun(){}
	//大写为构造函数  小写函数


//模式  解构赋值  数组和对象的区别
	// 数组
	let [aa,bb]=[11,22];
	console.log(aa)
	// 对象
	let {x,y}={x:1,y:2};
	console.log(x);
	console.log(y);
//没有默认 打印undefined
let {xx,yy}={};
console.log(xx)//undefined

//箭头函数  一个形参可不加括号 两个以上必须加括号
	let t=val=>1;
	console.log(t())  //返回结果1

	let tt=(val,val1)=>{
		return 1;
	}
	console.log(tt())

//扩展运算符
//将nodeList这类的伪数组或类数组，及可以遍历对象的es6里面的set、map数据类型的对象转换成数组
//
// var q=1;
// console.log(window.q) 
//在node中执行node顶层对象global

let divs=document.getElementsByTagName('div');
// 不是个真实的数组不能用map   forEach 方法
// 循环遍历只能用  for循环遍历 或 把它转换成真正的数组
// 转换成数组
	[...divs].forEach(function(item,index,arr){
		console.log(item)
	})
//es5写法
let attr=function(){
	console.log(arguments)
}
//es6写法
let attr1=(...item)=>{
	console.log(item[0])
}
attr1("11","22","33")
attr(1,2,3)



//合并数组
let a1=["a","b","c"];
let a2=[1,2,3];
let a3=a1.push(...a2);
console.log(a1)//原数组被修改
console.log(a2)//没有变化
console.log(a3)//返回新数组长度
class Tab{
	//constructor为类的构造函数
	constructor(index=0){
		this.index=index;
		this.init()
	}
	init(){
	   this.createEle()
	}
	
	createTit(){
		let ul=document.createElement('ul');
        let arr=['新闻',"财经","娱乐","军事"];
        arr.map(function(item,i){

        	let li=document.createElement('li');
        	li.innerHTML=item;
        	if(i==0){
        		li.classList.add('on')
        	}
        	ul.append(li)
        	console.log(item)
        })
        return ul;
	}
	createContent(){
        let ol=document.createElement('ol');
        let con=['新闻:女孩因化妆爆红堪称“变脸妖术”',"财经：乐视转让易到股份来抵消债务","娱乐：癌细胞也是生命，当选韩剧史上最荒唐的一幕","军事：中国万人奔赴巴基斯坦竟然让巴铁举国沸腾"];
        con.map(function(item,i){
        	let li=document.createElement('li');
        	li.innerHTML=item;
        	if(i==0){
        		li.style.display="block"
        	}
        	ol.append(li)
        	console.log(item)
        })
        return ol;
	}
	createEle(){
		let tab=document.createElement('div');
		tab.id="tab";
		tab.append(this.createTit())
		tab.append(this.createContent())
		document.body.append(tab);
		this.addClick()
	}
	addClick(){
		let uls=document.getElementsByTagName('ul')[0];
		let ols=document.getElementsByTagName('ol')[0];
		let ulli=uls.getElementsByTagName('li');
		let olli=ols.getElementsByTagName('li');
		[...ulli].forEach(function(item,i,arr){
			item.addEventListener('click',(event)=>{
				for(var j=0;j<ulli.length;j++){
					ulli[j].classList.remove('on');
					olli[j].style.display="none"
				}
				item.classList.add('on');
				olli[i].style.display="block"
			})
		})
	}
}

let tab=new Tab()
