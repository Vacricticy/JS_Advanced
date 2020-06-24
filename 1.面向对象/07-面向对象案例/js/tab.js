// 要点1：点击标签栏可以切换相应样式
// 要点2：双击标签栏显示输入框，可修改其中的数据
// 要点3：点击添加按钮可添加标签栏
// 要点4：点击X可以删除标签栏

var that;
class Tab {
    constructor(id) {
        that = this;
        this.main = document.querySelector(id);

        // 获取添加按钮的元素
        this.add = this.main.querySelector(".tabadd");
        // 获取li的父元素
        this.ul = this.main.querySelector(".fisrstnav ul:first-child");
        // 获取section的父元素
        this.fsection = this.main.querySelector(".tabscon");
        this.init();
    };
    // 初始化操作，让相关的元素绑定事件
    init() {
        this.updateNode();
        // 为+绑定添加事件
        this.add.onclick = this.addTab;
        // 为li绑定切换事件
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
            this.guanbis[i].index = i;
            this.guanbis[i].onclick = this.deleteTab;
            // 绑定双击事件
            this.spans[i].ondblclick = this.editTab;
            this.sections[i].ondblclick = this.editTab;
        }
    };
    // 重新获取lis和sections
    updateNode() {
        this.lis = this.main.querySelectorAll("li");
        this.sections = this.main.querySelectorAll("section");
        this.guanbis = this.main.querySelectorAll(".icon-guanbi");
        this.spans = this.main.querySelectorAll(".fisrstnav li span:first-child");
    };
    // 切换功能
    toggleTab() {
        //clearClass函数是类的公共函数，所有只能通过that调用
        that.clearClass();
        // 该函数的调用者为li,所以函数内部的this指向的都是li元素，所有可以通过this.index获取到值
        console.log("tab" + this.index);
        this.className = "liactive";
        that.sections[this.index].className = "conactive";
    };
    //清除所有样式
    clearClass() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = "";
            this.sections[i].className = "";
        }
    };
    // 添加功能
    addTab() {
        that.clearClass();
        // 添加tab和section
        var random = Math.random();
        var newTab =
            '<li class="liactive"><span>测试1</span><span class="iconfont icon-guanbi"></span></li>';
        var newSection = `<section class="conactive">测试${random}</section>`;
        // 在ul内部的最后一个元素的后面添加标签
        that.ul.insertAdjacentHTML("beforeend", newTab);
        that.fsection.insertAdjacentHTML("beforeend", newSection);

        // 重新获取lis和sections元素，并绑定事件
        that.init();
    };
    // 删除功能
    deleteTab(e) {
        // ❤由于父元素绑定了点击切换事件，所有应该阻止点击时冒泡
        e.stopPropagation();
        console.log("delete" + this.index);
        var index = this.index;
        // ❤删除对应的li和section和guanbi
        that.lis[index].remove();
        that.sections[index].remove();
        that.guanbis[index].remove();

        // 若删除的是当前元素，则conactive样式已经不存在，if判断为空，然后继续后面的操作，即自动切换至上一个元素
        // 若删除的不是当前元素，即conactive样式还是存在的，if判断为真，此时不会切换至上一个元素
        if (document.querySelector(".conactive")) {
            that.init();
            return;
        }

        // ❤若删除的是第一个元素，则会切换至第二个元素，且只有第二个元素存在时，才进行此操作
        // ❤若删除的不是第一个元素，则会选择上一个元素
        index === 0 ?
            that.lis[1] && that.lis[1].click() :
            that.lis[--index].click();

        // ❤删除后重新初始化
        that.init();
    };
    // 编辑功能
    editTab() {
        var _that = this;

        // 双击时禁止选中文字
        window.getSelection ?
            window.getSelection().removeAllRanges() :
            document.selection.empty();
        // 为span的内容换成表单
        var str = this.innerHTML;
        this.innerHTML = `<input type='text' value=${str} />`;
        // 获取input的元素
        var input = this.children[0];
        // 选中input中的文字,增强用户体验
        input.select();
        // 离开输出框
        input.onblur = function() {
            // 方式一：
            // _that.innerHTML = input.value;
            // 方式二：
            this.parentNode.innerHTML = input.value;
        };

        // ❤按回车键实现输入框失去焦点同样的效果
        input.onkeyup = function(e) {
            if (e.keyCode == 13) {
                // 手动调用输入框失去焦点事件
                this.blur();
            }
        };
    }
}
var tab = new Tab("#tab");

// dom相关：
// 获取单个dom元素：document.querySelector('.fisrstnav ul:first-child')
// 获取所有满足条件的dom元素：.querySelectorAll("li");
// 绑定单击事件：.onclick=function(){}
// 绑定双击事件： .ondblclick
// 在ul的最后一个元素的后面添加标签：ul.insertAdjacentHTML("beforeend", newTab); 其他取值：beforstart,afterstart,afterend
// 阻止冒泡：e.stopPropagation()
// 删除自身元素: .remove()
// 双击禁止选中文字：window.getSelection ?window.getSelection().removeAllRanges() :document.selection.empty();
// 选中输入框的文字：input.select()
// 绑定失焦事件：input.onblur=function(){}
// 添加回车键事件：input.onkeyup=function(e){if(e.keyCode===13){.......}}