/**
 * Created by pingbaobei on 2016/9/6.
 */
define(function(require,exports,module){
    var $ = require('jquery');

    //获取元素
    var $container = $(".container");
    var $Input = $container.children('input');
    var $Div = $container.children(".content");

    //设置样式
    $Input.eq(0).css("backgroundColor","orange");
    $Div.eq(0).css("display","block");

    //设置点击事件
    //for(var i=0;i<$Input.length;i++){
    //    $Input[i].onclick = function(){
    //        $(this).siblings("input").css("backgroundColor","");
    //        $(this).siblings(".content").css("display","none");
    //        $(this).css("backgroundColor","orange");
    //        $(this).siblings(".content").eq($(this).index()).css("display","block");
    //    }
    //}

    //$container.find("input").click(function(){
    //    $(this).siblings("input").css("backgroundColor","");
    //    $(this).siblings(".content").css("display","none");
    //    $(this).css("backgroundColor","orange");
    //    $(this).siblings(".content").eq($(this).index()).css("display","block");
    //});

    //链式编程
    $container.find("input").click(function(){
        $(this).siblings("input").css("backgroundColor","").end()
            .siblings(".content").css("display","none").end()
            .css("backgroundColor","orange").siblings(".content").eq($(this).index()).css("display","block");
    })
});
