window.onload = function(){
	let item = document.getElementsByClassName('item');
	let point = document.getElementsByClassName('point');
	let left = document.getElementsByClassName('left')[0];
	let right = document.getElementsByClassName('right')[0];
	let index = 0;					//图片索引
	let interval = 2000;			//定时器时间间隔
	
	let timer = setInterval(function(){
		autoPlay();
	},interval)
	stop();
	star();
	hit();
	dot();
	
	function display(){				//显示
		for(let i = 0;i<item.length;i++){
			item[i].className = 'item';
			point[i].classList.remove('co');
		}
		item[index].classList.add('op');
		point[index].classList.add('co');
	}
	
	function autoPlay(){    //自动轮播
		index < item.length-1 ? index++ : index = 0;
		display();
	}
	
	function stop(){		//鼠标覆盖  停止轮动
		for(let i = 0;i < item.length;i++){
			item[i].onmouseover = function(){
				clearInterval(timer);
			}
		}
	}
	
	function star(){		//鼠标离开  开始轮动
		for(let i = 0;i < item.length;i++){
			item[i].onmouseleave = function(){
				timer = setInterval(function(){
					autoPlay();
				},interval)
			}
		}
	}
	
	function hit(){			//点击左右切换
		//向左
		left.addEventListener('click',function(){
			clearInterval(timer);
			index == 0 ? index = item.length-1 : index--;
			display();
			timer = setInterval(function(){
				autoPlay();
			},interval)
		},false)
		
		right.addEventListener('click',function(){
			clearInterval(timer);
			index == item.length-1 ? index = 0 : index++;
			display();
			timer = setInterval(function(){
				autoPlay();
			},interval)
		},false)
	}			

	function dot(){			//点击圆点切换
		for(let i = 0;i < point.length;i++){
			point[i].onclick = function(){
				clearInterval(timer);
				index = i;
				display();
				timer = setInterval(function(){
					autoPlay();
				},interval)
			}
		}
	}
}