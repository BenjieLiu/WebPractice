//需求：鼠标进入盒子之后只要移动，哪怕1像素，随时显示鼠标在盒子中的坐标。
//技术点：新事件，onmousemove：在事件源上，哪怕鼠标移动1像素也会触动这个事件。
//一定程度上，模拟了定时器
//步骤：
//1.老三步和新五步
//2.获取鼠标在整个页面的位置
//3.获取盒子在整个页面的位置
//4.用鼠标的位置减去盒子的位置赋值给盒子的内容。

//1.老三步和新五步
var div = document.getElementsByTagName("div")[0];

div.onmousemove = function (event) {

    event = event || window.event;
    //2.获取鼠标在整个页面的位置
    var pagex = event.pageX || scroll().left + event.clientX;
    var pagey = event.pageY || scroll().top + event.clientY;
    //3.获取盒子在整个页面的位置
    // var xx =
    // var yy =
    //4.用鼠标的位置减去盒子的位置赋值给盒子的内容。
    var targetx = pagex - div.offsetLeft;
    var targety = pagey - div.offsetTop;
    this.innerHTML = "鼠标在盒子中的X坐标为：" + targetx + "px;<br>鼠标在盒子中的Y坐标为：" + targety + "px;"
}