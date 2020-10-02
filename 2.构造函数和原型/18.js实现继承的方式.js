function Animal(name, size, likes) {
  this.name = name || "Animal";
  this.size = size || "small";
  this.sleep = function () {
    console.log(this.name + " is sleeping");
  };
  this.likes = likes || [];
}
Animal.prototype.eat = function (food) {
  console.log(this.name + " is eating " + food);
};

// // 6.寄生组合继承
// // 解决组合继承中的冗余问题，将 实例属性/方法的继承 与 原型对象上属性/方法的继承 分开
// function Cat(name, size) {
//   Animal.call(this, name, size); //继承实例属性和方法
//   (function () {
//     var Super = function () {};
//     Super.prototype = Animal.prototype; //通过寄生方式，砍掉父类的实例属性。使子类的原型直接指向的实例不包括父类的实例属性；这样就不会初始化两次实例方法/属性，避免的组合继承的缺点
//     Cat.prototype = new Super();
//   })();
// }
// var cat = new Cat("alice", "big");
// console.log(cat.name); //alice
// console.log(cat.size); //big
// cat.sleep(); //alice is sleeping

// // 5.组合继承:原型链继承+构造继承
// // 优点：
// // 弥补了原型链继承的局限性，可以传参；
// // 弥补了构造继承的局限性，可以继承原型上的属性和方法
// // 缺点：调用了两次父构造函数，多消耗了一些内存
// function Cat(name, size) {
//   Animal.call(this, name, size);
// }
// Cat.prototype = new Animal();
// var cat = new Cat("alice", "big");
// console.log(cat.name); //alice
// console.log(cat.size); //big
// cat.sleep(); //alice is sleeping

// // 4.拷贝继承，利用for..in可以遍历原型对象属性的特性
// // 特点：可以多继承
// // 缺点：因为存在拷贝，内存占用高；无法获取父类不可枚举的方法（for in 只能获取枚举的属性）
// function Cat(name) {
//   var animal = new Animal();
//   for (key in animal) {
//     Cat.prototype[key] = animal[key];
//   }
//   Cat.prototype.name = name || "tom";
// }
// var cat = new Cat("jim");
// console.log(cat.name);
// cat.sleep();
// console.log(cat instanceof Animal); //false
// console.log(cat instanceof Cat); //true

// // 3.实例继承
// // 核心：在子构造函数中创建一个父类实例，并在其上添加新特性，然后返回这个对象
// // 特点：可以通过new调用，也可直接调用
// // 缺点：实例是父类的实例，不是子类的实例; 不支持多继承; 而且在子构造函数的原型对象上添加方法是无效的。
// function Cat(name) {
//   var instance = new Animal();
//   instance.name = name || "Tom";
//   return instance;
// }
// Cat.prototype.sing = function () {
//   console.log("sing a song");
// };
// var cat = new Cat("jim");
// console.log(cat.name); //jim
// cat.sleep(); //jim is sleeping
// cat.sing(); // cat.sing is not a function

// // 2.构造继承
// function Cat() {
//   Animal.call(this);
// }
// var cat = new Cat("tom");
// console.log(cat.name); //tom
// cat.sleep(); //tom is sleeping

// 1.原型链继承
function Cat() {}
Cat.prototype = new Animal();
console.log(Cat.prototype);

var cat = new Cat();
console.log(cat.name); //Animal
cat.sleep(); //Animal is sleeping
console.log(cat instanceof Cat); //true
console.log(cat instanceof Animal); //true

var cat2 = new Cat();
cat.likes.push("play");
console.log(cat2.likes); //[ 'play' ]
