// 封装提示框函数，重复调用，满足提示需求
const myAlert = document.querySelector('.alert')
function alertFn(msg, isSuccess) {
    // 1.显示提示框
    myAlert.classList.add('show')
    //2.实现细节
    myAlert.innerText = msg
    const bgStyle = isSuccess ? 'alert-success' : 'alert-danger'
    myAlert.classList.add(bgStyle)
    //3.过2秒隐藏
    setTimeout(() => {
        myAlert.classList.remove('show')
        //提示：避免类名冲突，重置背景色
        myAlert.classList.remove(bgStyle)
    }, 2000)
}

document.querySelector('.btn-login').addEventListener('click', () => {
    // 获取用户名和密码
    const username = document.querySelector('.username').value
    const password = document.querySelector('.password').value

    // 判断长度
    if (username.length < 8) {
        alertFn('用户名必须大于等于8位', false)
        console.log('用户名必须大于等于8位')
        return   //阻止代码继续执行
    }
    if (password.length < 6) {
        alertFn('密码必须大于等于6位', false)
        console.log('密码必须大于等于6位')
        return   //阻止代码继续执行
    }

    // 基于axios提交用户名和密码
    axios({
        url: 'http://hmajax.itheima.net/api/login',
        method: 'post',
        data: {
            username,
            password
        }
    }).then(result => {
        alertFn(result.data.message, true)
        console.log(result.data.message)
    }).catch(error => {
        //处理错误信息
        alertFn(error.response.data.message, false)
        console.log(error.response.data.message)
    })
})