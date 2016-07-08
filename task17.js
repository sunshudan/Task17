/*数据格式演示
var aqiSourceData={
	"北京":{
      "2016-01-01":10,
      "2016-01-02":10,
      "2016-01-03":10,
      "2016-01-04":10,
	}
};
*/
// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat){
	var y=dat.getFullYear();
	var m=dat.getMonth()+1;
	m=m<10? '0'+m:m;
    var d=dat.getDate();
    d=d<10? '0'+d:d;
    return y+'-'+m+'-'+d;
}

function randomBuildData(seed){
	var returnData={};
	var dat=new Date("2016-01-01");
	var datStr='';
	for(var i=1;i<92;i++){
        datStr=getDataStr(dat);
        returnData[datStr]=Math.ceil(Math.random()*seed);
        dat.setDate(dat.getDate()+1);
	}
	return returnData;
}

var aqiSourceData = {
  "北京": randomBuildData(500),
  "上海": randomBuildData(300),
  "广州": randomBuildData(200),
  "深圳": randomBuildData(100),
  "成都": randomBuildData(300),
  "西安": randomBuildData(500),
  "福州": randomBuildData(100),
  "厦门": randomBuildData(100),
  "沈阳": randomBuildData(500)
};

var colors = ['#16324a', '#24385e', '#393f65', '#4e4a67', '#5a4563', '#b38e95', 
              '#edae9e', '#c1b9c2', '#bec3cb', '#9ea7bb', '#99b4ce', '#d7f0f8']; 

//用于渲染图表的数据
var chartData={};
//记录当前页面的表单选项
var pageState={
	nowSelectCity:-1,
	nowGraTime:"day"
}
//不懂这是啥意思
function getWidth(width,len){
  var posObj={};
  posObj.width=Math.floor(width/(len*2));
  posObj.left=Math.floor(width/len);
  posObj.offsetLeft=(width-posObj.left*(len-1)-posObj.width)/2;
  return posObj;
}

function getHintLfeft(posObj,i){
  if(posObj.left*i+posObj.offsetLeft+posObj.width/2-60<=0){
    return 5;
  }
  else if(posObj.left*i+posObj.offsetLeft+posObj.width/2+60>=1200){
    return (posObj.left*i+posObj.offsetLeft+posObj.width/2-110);
  }
  else{
    return (posObj.left*i+posObj.offsetLeft+posObj.width/2-60);
  }
}

function getTitle(){
  switch (pageState.nowGraTime){
    case "day":
          return "每日";
    case "week":
          return "周平均";
    case "month":
          return "月平均";
  }
}
//addEventHandler方法，跨浏览器实现事件绑定
function addEventHandler(ele,event,handler){
   if(ele.addEventHandler){
    ele.addEventListener(event,handler,false);
   }
   else if(ele.attachEvent){
    ele.attachEvent("on"+event,handler);
   }
   else{
    ele["on"+event]=handler;
   }
}


//渲染图表
function renderChart(){
	var innerHTML="",i=0;
  var wrapper=document.getElementById("aqi-chart-wrap");
  var width=wrapper.clientWidth;
  var selectedData=chartData[pageState.nowGraTime][pageState.nowSelectCity];
  var len=Object.keys(selectedData).length;
  var posObj=getWidth(width,len);
  innerHTML+="<div class='title'>"+



}