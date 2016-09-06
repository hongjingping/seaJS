/**
 * Created by pingbaobei on 2016/9/6.
 */
/*3.模块依赖*/
define(function(require,exports,module){
    var obj  = {};
    obj.showLog = function(){
        console.log("日志信息");
    };
    /*返回*/
    /*exports.obj = obj;*/
    /*exports和module.exports指向是同一个地方，如果exports= obj;相当于将exports重新赋值了obj，重新指向了新的地址，就不在具有之前的指向，exports和module.exports指向就不同了不可以重新赋值*/
    /*
    module用来公开整个对象，
    exports公开其中的一部分方法，
    本质是是module.expores = exports = {}
    */
    module.exports = obj;

});