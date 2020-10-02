// 1.get语法会将对象的属性绑定在一个取值函数身上，调用该属性即调用该函数，该函数会返回一个值，这个值将作为这个对象属性的值
let o1 = {
  get name() {
    return "liu1";
  },
};
console.log(o1); //{ name: [Getter] }
console.log(o1.name); //liu1

// 2.可以使用definedProperty在现有的对象上定义getter
console.log("-------2-------");
let o2 = {};
Object.defineProperty(o2, "name", {
  //   enumerable: true, //默认是不可枚举的，修改为可枚举才能在打印该对象时看到该属性
  get() {
    return "liu";
  },
});
console.log(o2); //{ name: [Getter] }
console.log(o2.name); //liu

// 3.同样，set语法也会将对象的属性绑定在一个函数身上，当调用该属性时，即是调用该函数
console.log("--------3---------");
let o3 = {
  list: [],
  set name(value) {
    name = value;
    this.list.push(value);
  },
};
o3.name = "xiao";
o3.name = "kang";
console.log(o3.list); //[ 'xiao', 'kang' ]
console.log(o3.name); //undefined   name属性是未定义的，所以访问时会返回undefined

// 4.使用defineProperty为当前对象的属性定义setter
console.log("---------4----------");
const o4 = {
  a: 0,
};
Object.defineProperty(o4, "b", {
  set(value) {
    this.a += value;
  },
});
o4.b = 10;
o4.b = 10;
console.log(o4.a); //20

// 5.使用setter和getter监听属性的变化
console.log("-------5---------");

var obj5 = {};
Object.defineProperty(obj5, "a", {
  get() {
    return a;
  },
  set(value) {
    a = value;
    // 需要触发的渲染函数写在这里，这样在属性改变的时候就不需要手动调用渲染函数了
  },
});
obj5.a = "liu";
console.log(obj5.a); //liu
