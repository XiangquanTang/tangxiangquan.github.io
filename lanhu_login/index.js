// 登录校验方法
function login() {
	var email = $("#email").val();
	var password = $("#password").val();
	if (email === '') {
		alert("请输入邮箱!")
		return;
	}
	if (password === '') {
		alert("请输入密码!")
		return;
	}
	// 调用后端接口判断账号是否正确
	$.ajax({
		url: "https://localhost:44307/api/User/Login",
		type: 'post',
		dataType: 'json',
		data: {
			email: email,
			password: password
		},
		success: function(data) {
			if (data != null) {
				if (data === "邮箱地址有误，请重试！") {
					$("#email").val(""); // 清空input框内容
					alert(data);
				} else if (data === "密码有误，请重试！") {
					$("#password").val("");
					alert(data);
				} else if (data === "success") {
					// 跳转到首页
					location.href = "http://127.0.0.1:8848/lanhu_6.10final/qianduan_6.10final/lanhu_homepggbench/index.html";
				} else {
					$("#email").val("");
					$("#password").val("");
					alert(data);
				}
			}
		},
		error: function(xhr) {
			console.log("请求发生错误，状态码：" + xhr.status);
		}
	})
}

// Github登录
function loginGithub() {
	alert("抱歉，功能还未完善.");
	// .....
}

// Google登录
function loginGoogle() {
	alert("抱歉，功能还未完善.");
	// .....
}