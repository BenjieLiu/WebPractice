function getPos(ev) {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    return { x: ev.clientX + scrollLeft, y: ev.clientY + scrollTop }
}

document.onmousemove = function (ev) {
    var oDiv = document.getElementsByTagName('div')
    var oEvent = ev || event
    var pos = getPos(oEvent)
    //后面的div跟这前面的div走	
    for (var i = oDiv.length - 1; i > 0; i--) {
        oDiv[i].style.left = oDiv[i - 1].offsetLeft + 'px';
        oDiv[i].style.top = oDiv[i - 1].offsetTop + 'px';
    }
    //第一个div跟着鼠标走	
    oDiv[0].style.left = pos.x + 'px';
    oDiv[0].style.top = pos.y + 'px';
}