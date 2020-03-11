//输入密码
function load_itemname() {
    const name = document.getElementById("u_name").innerText;
    if (name === "") {
        let word = prompt("请输入密码", "");
        $.ajax({
            url: "finduser",
            type: "post",
            data: {"pwd": word},
            success: function (d) {
                if (d === "ok") {
                } else {
                    location.reload();
                }
            }
        })
    }
}
load_itemname();
//
// let settings = {
//     "url": "http://display.incich.com:9208/display-rest/oauth/token",
//     "method": "POST",
//     "timeout": 0,
//     "headers": {
//         "Authorization": "Basic aW5jaF9sc190ZTo5ZDAwMjlmZS1lMzUyLTExZTktYWIxOC03Y2QzMGFkYWEyMTg=",
//         "Content-Type": "application/x-www-form-urlencoded"
//     },
//     "data": {
//         "username": "youjin",
//         "systemid": "lsxx",
//         "grant_type": "password",
//         "password": "670b14728ad9902aecba32e22fa4f6bd"
//     }
// };
//
// $.ajax(settings).done(function (response) {
//     console.log(response);
// });