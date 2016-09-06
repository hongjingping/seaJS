/**
 * Created by pingbaobei on 2016/9/6.
 */
/*2.定义模块，可以使用require引进很多的模块*/
define(function(require,exports,module){
    /*4.在此处使用module1中的showLog方法*/
    //var obj = require('module1.js');
    /*obj.obj.showLog();*/
    //obj.showLog();
    //exports.sayHello = function(){
    //    console.log("hello");
    //}

    //exports.abc = 123;
    //module.exports = {
    //    hello:function(){
    //        console.log("helloworld");
    //    }
    //};
    /*本来module.exports = exports={},都指向同一个对象，然后我们先给exports添加了一个属性abc123，然后给module.exports重新赋值了一个对象，指向了新的对象，对象轴有hello方法，此时我们在通过module.js调用的时候，就调用不到abc，因为只能到用到modue.exports中的hello方法,两个不能同时使用*/

    //exports.abc = 123;
    //exports.hello = function(){
    //    console.log("hello");
    //};
    ///*以上可以同时使用*/



    module.exports = {
        hello:function(){
            console.log("helloworld");
        }
    };
    module.exports.abc = 123;
    /*以上可以同时使用*/


});