// 获取相应节点元素		
var zoom = document.querySelector('.zoom');
var simg = document.querySelector('.small_area img');
var bimg = document.querySelector('.big_area img');
var big = document.querySelector('.big_area');
var small = document.querySelector('.small_area');
var mask = document.querySelector('.mask');


// 设置遮罩层宽高  小图宽 除以 大图宽 乘以 大显示区域边框		
mask.style.width = (simg.offsetWidth / bimg.offsetWidth) * big.clientWidth + "px";
mask.style.height = (simg.offsetHeight / bimg.offsetHeight) * big.clientHeight + "px";

// 定义遮罩层最大边距，也就是最大移动距离		
var maxW = simg.clientWidth - mask.offsetWidth;
var maxH = simg.clientHeight - mask.offsetHeight;

// 鼠标移入小显示区域发生事件：1.遮罩层显示 2.大显示区域显示		
small.onmouseenter = function () {
    mask.style.left = 0;
    big.style.left = 210 + "px";
}
// 鼠标移入小显示区域发生事件：1.遮罩层消失 2.大显示区域消失		
small.onmouseleave = function () {
    mask.style.left = -10000 + "px";
    big.style.left = -10000 + "px";
}
// 鼠标在小显示区域移动		
small.onmousemove = function (e) {
    // 解决兼容问题			
    e = e || window.event;
    // 定义两个变量 让鼠标位置一直处于遮罩层位置中间			
    var nLeft = e.pageX - zoom.offsetLeft - zoom.clientLeft - mask.offsetWidth / 2;
    var nTop = e.pageY - zoom.offsetTop - zoom.clientTop - mask.offsetHeight / 2;
    
    // 设置遮罩层永远显示在小显示区域内部 也就是判断nLeft、nTop值			
    nLeft = Math.min(maxW, Math.max(0, nLeft));
    nTop = Math.min(maxH, Math.max(0, nTop));
    
    // 遮罩层位置			
    mask.style.left = nLeft + "px";
    mask.style.top = nTop + "px";
    
    // 设置大图片移动位置 跟随遮罩层百分比移动（语法带入）			
    bimg.style.left = -(bimg.offsetWidth - big.clientWidth) * (nLeft / (simg.clientWidth - mask.offsetWidth)) + "px";
    bimg.style.top = -(bimg.offsetHeight - big.clientHeight) * (nTop / (simg.clientHeight - mask.offsetHeight)) + "px";
}
