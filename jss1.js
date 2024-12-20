window.onload = function () {
    // 获取EV.png对应的图片超链接元素
    var evLink = document.getElementById('ev-link');
    // 获取PV.png对应的图片超链接元素
    var hvLink = document.getElementById('hv-link');
	var ecarLink = document.getElementById('ecar-link');
    var suvLink = document.getElementById('suv-link');
    var mpvLink = document.getElementById('mpv-link');
    var sportcarLink = document.getElementById('sportcar-link');
    var pickupLink = document.getElementById('pickup-link');

    // 获取id为body1的div元素
    var body1Div = document.getElementById('body1');
    // 获取body1Div内部的所有div元素
    var divElements = body1Div.getElementsByTagName('div');

    // 为EV.png的图片超链接添加点击事件监听器
    evLink.addEventListener('click', function (event) {
        // 阻止超链接的默认行为，防止页面跳转
        event.preventDefault();
        var targetClass = '1'; // 设定筛选的目标类选择器
        performFilter(targetClass);
    });

    // 为PV.png的图片超链接添加点击事件监听器
    hvLink.addEventListener('click', function (event) { 
        // 阻止超链接的默认行为，防止页面跳转
        event.preventDefault();
        var targetClass = '2'; // 设定筛选的目标类选择器
        performFilter(targetClass);
    });
    ecarLink.addEventListener('click', function (event) { 
        // 阻止超链接的默认行为，防止页面跳转
        event.preventDefault();
        var targetClass = '3'; // 设定筛选的目标类选择器
        performFilter(targetClass);
    });
    suvLink.addEventListener('click', function (event) { 
        // 阻止超链接的默认行为，防止页面跳转
        event.preventDefault();
        var targetClass = '4'; // 设定筛选的目标类选择器
        performFilter(targetClass);
    });
    mpvLink.addEventListener('click', function (event) { 
        // 阻止超链接的默认行为，防止页面跳转
        event.preventDefault();
        var targetClass = '5'; // 设定筛选的目标类选择器
        performFilter(targetClass);
    });
   sportcarLink.addEventListener('click', function (event) { 
        // 阻止超链接的默认行为，防止页面跳转
        event.preventDefault();
        var targetClass = '6'; // 设定筛选的目标类选择器
        performFilter(targetClass);
    });
    pickupLink.addEventListener('click', function (event) { 
        // 阻止超链接的默认行为，防止页面跳转
        event.preventDefault();
        var targetClass = '7'; // 设定筛选的目标类选择器
        performFilter(targetClass);
    });

    // 定义筛选函数，避免重复代码
    function performFilter(targetClass) {
        for (var i = 0; i < divElements.length; i++) {
            if (divElements[i].classList.contains(targetClass)) {
                divElements[i].style.display = 'block';
            } else {
                divElements[i].style.display = 'none';
            }
        }
    }
};