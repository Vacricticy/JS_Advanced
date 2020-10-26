// 字符串的实例方法：
// String.prototype.replace() 用于替换匹配到的字符串部分

// 1.g修饰符的使用
console.log("aaa".replace("a", "m")); //maa
console.log("aaa".replace(/a/, "m")); //maa
// 替换所有匹配到的值
console.log("aaa".replace(/a/g, "m")); //mmm

// 2.replace方法的一个应用：消除字符串首尾两端的空格。
var str = "     #id div.class  ";
console.log(str.replace(/^\s+|\s+$/, "")); //#id div.class
console.log(str.replace(/^\s|\s+$/, "")); //    #id div.class

// 3.replace方法的第二个参数可以使用美元符号$，用来指代所替换的内容。
/* 
$&：匹配的子字符串。
$`：匹配结果前面的文本。
$'：匹配结果后面的文本。
$n：匹配成功的第n组内容，n是从1开始的自然数。
$$：指代美元符号$。 
*/
console.log("hello wo rld liu".replace(/(\w+)\s(\w+)/, "$2-----$1")); //wo-----hello rld liu
console.log("abc".replace("b", "[$`-$&-$']")); //a[a-b-c]c

// 4.replace方法的第二个参数还可以是一个函数，将每一个匹配内容替换为函数返回值。
console.log(
  "3 and 5".replace(/[0-9]/g, function (match) {
    return 2 * match;
  })
); //6 and 10

// replace第二个参数为函数时，其可以函数可以接收多个参数，第一个参数是捕捉到的内容，第二个参数是捕捉到的内容的组匹配（有多少个组匹配，就有多少个对应的参数）
//通过组匹配可以获取匹配到的内容中的某一个部分
var prices = {
  p1: "$1.99",
  p2: "$9.99",
  p3: "$5.00",
};

var template =
  '<span id="p1"></span>' + '<span id="p2"></span>' + '<span id="p3"></span>';

let rs = template.replace(/(<span id=")(.*?)(">)(<\/span>)/g, function (
  match,
  $1,
  $2,
  $3,
  $4
) {
  console.log(match);
  return $1 + $2 + $3 + prices[$2] + $4;
});
console.log(rs); //<span id="p1">$1.99</span><span id="p2">$9.99</span><span id="p3">$5.00</span>
