// 正则实例对象的test方法返回一个布尔值，表示当前正则表达式能否在给定的字符串中匹配到对应的字符串
var regExp = /123/;

console.log(regExp.test(123)); //true
console.log(regExp.test("123")); //true
console.log(regExp.test(61234)); //true
console.log(regExp.test(343)); //false

// 对于一般情况，每次执行完后，正则对象的lastIndex属性会重置为0。
// 但带有g修饰符时，正则表达式内部会记住上一次的lastIndex属性。
console.log("---------------------");
var r = /x/g;
var s = "_x_x";

console.log(r.lastIndex); // 0
console.log(r.test(s)); // true

console.log(r.lastIndex); // 2
console.log(r.test(s)); // true

console.log(r.lastIndex); // 4
console.log(r.test(s)); // false

console.log("---------------------");
var r = /bb/g;
console.log(r.test("bb")); // true
console.log(r.test("-bb-")); // false
