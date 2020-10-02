Function.prototype.bind2 = function () {
  var that = this;
  // 获取一个参数
  var context = [].shift.call(arguments);
  // 获取后面的参数
  var args = [].slice.call(arguments);
  return function () {
    that.apply(context, args);
  };
};
var name = "liu";
var o = {
  name: "xiao",
};
function fn() {
  console.log(this.name);
}
var fn2 = fn.bind2(o);
fn2(); //liu
