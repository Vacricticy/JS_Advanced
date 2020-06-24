window.onload = function() {
    var regTel = /^1[3-9]\d{9}$/; //验证手机号
    // console.log(regTel.test('19822906543')); //true
    // console.log(regTel.test('1982290654')); //false
    // console.log(regTel.test('12822906543')); //false
    var regQq = /^[1-9]\d{4,}$/ //第一个qq号为10000
    var regNc = /^[\u4e00-\u9fa5]{2,8}$/ //昵称为2~8个汉字 
    var regMsg = /^\d{6}$/ //验证码为6位数
    var regpwd = /^[0-9a-zA-Z_-]{6,16}$/ //密码为6~16位的数字，英文字母，-，_的组合。


    var tel = document.querySelector('#tel')
    var qq = document.querySelector('#qq')
    var nc = document.querySelector('#nc')
    var msg = document.querySelector('#msg')
    var pwd = document.querySelector('#pwd')
    var confirmpwd = document.querySelector('#surepwd')
    reg(tel, regTel)
    reg(qq, regQq)
    reg(nc, regNc)
    reg(msg, regMsg)
    reg(pwd, regpwd)

    function reg(element, reg) {
        element.onblur = function() {
            if (reg.test(this.value)) {
                this.nextElementSibling.className = "success"
                this.nextElementSibling.innerHTML = `<i class="success_icon"></i>`
            } else {
                this.nextElementSibling.className = "error"
                this.nextElementSibling.innerHTML = `<i class="error_icon"></i> 格式输入有误`
            }
        }
    }
    confirmpwd.onblur = function() {
        if (this.value === pwd.value) {
            this.nextElementSibling.className = "success"
            this.nextElementSibling.innerHTML = `<i class="success_icon"></i>`
        } else {
            this.nextElementSibling.className = "error"
            this.nextElementSibling.innerHTML = `<i class="error_icon"></i> 两次密码输入不同`
        }
    }



}