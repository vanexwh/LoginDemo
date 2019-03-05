//table表格切换
(function(){
	var btnarr = document.getElementsByClassName("btn");
	var tablearr = document.getElementsByClassName("table");

	for(var i = 0; i < btnarr.length; i++) {
		btnarr[0].style.color = '#FE8B8B'; //设置数组中第一个为active
		btnarr[0].style.backgroundColor = 'rgba(0, 0, 0, .1)';
		tablearr[0].style.display = 'block'; 
		btnarr[i].onclick = function() { 
			for(var j = 0; j < btnarr.length; j++) { //遍历按钮，重置按钮style
				btnarr[j].style.color = "#4D4D4D";
				btnarr[j].style.backgroundColor = "#eee";
				this.style.color = "#FE8B8B"; //点击当前的按钮
				tablearr[j].style.display = "none"; //设置所有table为display:none
				if(this == btnarr[j]) {
					tablearr[j].style.display = 'block'; //显示对应的
					btnarr[j].style.backgroundColor = "rgba(0, 0, 0, .1)";
					btnarr[j].style.transition = '.3s';
				}
			}
		}
	}
})();

