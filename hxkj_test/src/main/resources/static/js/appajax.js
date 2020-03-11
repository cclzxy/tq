//获取当前星期几
var a = ["日", "一", "二", "三", "四", "五", "六"];
var week = new Date().getDay();
var str = "星期" + a[week];
var hour = new Date().getHours();
//生成当前时间的唯一标识
var myDate = new Date();
var timesrc = myDate.getFullYear() + "_" + myDate.getMonth() + 1 + "_" + myDate.getDate() + "_" + myDate.getTime();

//选择班级
function selclaidshow() {
    document.getElementById("alertmsg").style.display = "block";
}

function stopp() {
    event.stopPropagation();//阻止触发父元素的点击事件
}
function showalert() {
    document.getElementById("alertmsg2").style.display = "block";
}
function selclaidhide() {
    document.getElementById("alertmsg").style.display = "none";
}
function selclaidhide2() {
    document.getElementById("alertmsg2").style.display = "none";
}

// 获取当前具体日期
function getime() {
    let ddd = new Date();
    let day = ddd.getDate();
    if (ddd.getMonth() < 10) {
        var month = "0" + (ddd.getMonth() + 1);
    }
    if (ddd.getDate() < 10) {
        day = "0" + ddd.getDate();
    }
    let datew = ddd.getFullYear() + "-" + month + "-" + day;
    let dates = datew.toString();
    $("#date").val(dates);
}

/**
 * 点击确认按钮,修改单项分数,项目1
 */
function confirmupdate1() {
    getime();
    let getclass = document.getElementById("claselect").value;//班级编号1-8
    let dayif = app.mora;                                               //上午或下午
    let nowdate = document.getElementById("date").value;      //当天日期2020-01-01
    let imagesrc;
    let itemid = 1;
    let srcn11 = 1 + timesrc;
    let postf;
    if ($('#imagesrc11').val() === "") {
        imagesrc = "";
    } else {
        let filename = $('#imagesrc11').val();
        let index1 = filename.lastIndexOf(".");
        let index2 = filename.length;
        postf = filename.substring(index1, index2);//后缀名
        imagesrc = "images/" + srcn11 + postf;//图片路径String
    }
    let score = app.score1;//包干区
    let detail = document.getElementById("showifchange12").value;
    $.ajax({
        url: "updatecomment",
        type: "post",
        data: {
            "getclass": getclass,//班级编号
            "dayif": dayif,      //上午下午
            "nowdate": nowdate,  //日期
            "score": score,
            "detail": detail,
            "imagesrc": imagesrc,
            "itemid": itemid,
        },
        success: function (d) {
            let elid = "imagesrc11";
            upimage(elid, srcn11, postf);
            if ($('#imagesrc').val() === "") {
                app.isshow1 = false;
                app.detail11 = true;
                app.ifping11 = false;
                app.ifping12 = false;
                if (score < 10) {
                    app.score1 = score;
                    app.abc1 = true;//分数字体颜色变红
                } else {
                    app.score1 = 10;
                    app.abc1 = false;
                }
                app.det1 = detail;
            } else {
                upimage();
                if (score < 10) {
                    app.score1 = score;
                    app.abc1 = true;//分数字体颜色变红
                } else {
                    app.score1 = 10;
                    app.abc1 = false;
                }
                app.det1 = detail;
                app.isshow1 = false;
                app.detail11 = true;
                app.ifping11 = false;
                app.ifping12 = false;
            }

        }
    });
}

/**
 * 点击确认按钮,修改单项分数,项目2
 */
function confirmupdate2() {
    getime();
    let getclass = document.getElementById("claselect").value;//班级编号1-8
    let dayif = app.mora;                                               //上午或下午
    let nowdate = document.getElementById("date").value;      //当天日期2020-01-01
    let imagesrc;
    let itemid = 2;
    let srcn22 = 2 + timesrc;
    let postf;
    if ($('#imagesrc22').val() === "") {
        imagesrc = "";
    } else {
        let filename = $('#imagesrc22').val();
        let index1 = filename.lastIndexOf(".");
        let index2 = filename.length;
        postf = filename.substring(index1, index2);//后缀名
        imagesrc = "images/" + srcn22 + postf;//图片路径String
    }
    let score = app.score2;//包干区
    let detail = document.getElementById("showifchange22").value;
    $.ajax({
        url: "updatecomment",
        type: "post",
        data: {
            "getclass": getclass,//班级编号
            "dayif": dayif,      //上午下午
            "nowdate": nowdate,  //日期
            "score": score,
            "detail": detail,
            "imagesrc": imagesrc,
            "itemid": itemid,
        },
        success: function (d) {
            let elid = "imagesrc22";
            upimage(elid, srcn22, postf);
            if ($('#imagesrc2').val() === "") {
                app.isshow2 = false;
                app.detail22 = true;
                app.ifping21 = false;
                app.ifping22 = false;
                if (score < 5) {
                    app.score2 = score;
                    app.abc2 = true;//分数字体颜色变红
                } else {
                    app.score2 = 5;
                    app.abc2 = false;
                }
                app.det2 = detail;
            } else {
                upimage();

                if (score < 5) {
                    app.score2 = score;
                    app.abc2 = true;//分数字体颜色变红
                } else {
                    app.score2 = 5;
                    app.abc2 = false;
                }
                app.det2 = detail;
                app.isshow2 = false;
                app.detail22 = true;
                app.ifping21 = false;
                app.ifping22 = false;
            }
        }
    });
}

/**
 * 点击确认按钮,修改单项分数,项目3
 */
function confirmupdate3() {
    getime();
    let getclass = document.getElementById("claselect").value;//班级编号1-8
    let dayif = app.mora;                                               //上午或下午
    let nowdate = document.getElementById("date").value;      //当天日期2020-01-01
    let imagesrc;
    let itemid = 3;
    let srcn33 = 3 + timesrc;
    let postf;
    if ($('#imagesrc33').val() === "") {
        imagesrc = "";
    } else {
        let filename = $('#imagesrc33').val();
        let index1 = filename.lastIndexOf(".");
        let index2 = filename.length;
        postf = filename.substring(index1, index2);//后缀名
        imagesrc = "images/" + srcn33 + postf;//图片路径String
    }
    let score = app.score3;//包干区
    let detail = document.getElementById("showifchange32").value;
    $.ajax({
        url: "updatecomment",
        type: "post",
        data: {
            "getclass": getclass,//班级编号
            "dayif": dayif,      //上午下午
            "nowdate": nowdate,  //日期
            "score": score,
            "detail": detail,
            "imagesrc": imagesrc,
            "itemid": itemid,
        },
        success: function (d) {
            let elid = "imagesrc33";
            upimage(elid, srcn33, postf);
            if ($('#imagesrc3').val() === "") {
                app.isshow3 = false;
                app.detail33 = true;
                app.ifping31 = false;
                app.ifping32 = false;
                if (score < 2.5) {
                    app.score3 = score;
                    app.abc3 = true;//分数字体颜色变红
                } else {
                    app.score3 = 2.5;
                    app.abc3 = false;
                }
                app.det3 = detail;
            } else {
                upimage();
                if (score < 2.5) {
                    app.score3 = score;
                    app.abc3 = true;//分数字体颜色变红
                } else {
                    app.score3 = 2.5;
                    app.abc3 = false;
                }
                app.det3 = detail;
                app.isshow3 = false;
                app.detail33 = true;
                app.ifping31 = false;
                app.ifping32 = false;
            }
        }
    });
}

/**
 * 点击确认按钮,修改单项分数,项目4
 */
function confirmupdate4() {
    getime();
    let getclass = document.getElementById("claselect").value;//班级编号1-8
    let dayif = app.mora;                                               //上午或下午
    let nowdate = document.getElementById("date").value;      //当天日期2020-01-01
    let imagesrc;
    let itemid = 4;
    let srcn44 = 4 + timesrc;
    let postf;
    if ($('#imagesrc44').val() === "") {
        imagesrc = "";
    } else {
        let filename = $('#imagesrc44').val();
        let index1 = filename.lastIndexOf(".");
        let index2 = filename.length;
        postf = filename.substring(index1, index2);//后缀名
        imagesrc = "images/" + srcn44 + postf;//图片路径String
    }
    let score = app.score4;
    let detail = document.getElementById("showifchange42").value;
    $.ajax({
        url: "updatecomment",
        type: "post",
        data: {
            "getclass": getclass,//班级编号
            "dayif": dayif,      //上午下午
            "nowdate": nowdate,  //日期
            "score": score,
            "detail": detail,
            "imagesrc": imagesrc,
            "itemid": itemid,
        },
        success: function (d) {
            let elid = "imagesrc44";
            upimage(elid, srcn44, postf);
            if ($('#imagesrc4').val() === "") {
                app.isshow4 = false;
                app.detail44 = true;
                app.ifping41 = false;
                app.ifping42 = false;
                if (score < 2.5) {
                    app.score4 = score;
                    app.abc4 = true;//分数字体颜色变红
                } else {
                    app.score4 = 2.5;
                    app.abc4 = false;
                }
                app.det4 = detail;
            } else {
                upimage();
                if (score < 2.5) {
                    app.score4 = score;
                    app.abc4 = true;//分数字体颜色变红
                } else {
                    app.score4 = 2.5;
                    app.abc4 = false;
                }
                app.det4 = detail;
                app.isshow4 = false;
                app.detail44 = true;
                app.ifping41 = false;
                app.ifping42 = false;
            }
        }
    });
}

/**
 * 点击确认按钮,修改单项分数,项目5
 */
function confirmupdate5() {
    getime();
    let getclass = document.getElementById("claselect").value;//班级编号1-8
    let dayif = app.mora;                                               //上午或下午
    let nowdate = document.getElementById("date").value;      //当天日期2020-01-01
    let imagesrc;
    let itemid = 5;
    let srcn55 = 5 + timesrc;
    let postf;
    if ($('#imagesrc55').val() === "") {
        imagesrc = "";
    } else {
        let filename = $('#imagesrc55').val();
        let index1 = filename.lastIndexOf(".");
        let index2 = filename.length;
        postf = filename.substring(index1, index2);//后缀名
        imagesrc = "images/" + srcn55 + postf;//图片路径String
    }
    let score = app.score5;//包干区
    let detail = document.getElementById("showifchange52").value;
    $.ajax({
        url: "updatecomment",
        type: "post",
        data: {
            "getclass": getclass,//班级编号
            "dayif": dayif,      //上午下午
            "nowdate": nowdate,  //日期
            "score": score,
            "detail": detail,
            "imagesrc": imagesrc,
            "itemid": itemid,
        },
        success: function (d) {
            let elid = "imagesrc55";
            upimage(elid, srcn55, postf);
            if ($('#imagesrc5').val() === "") {
                app.isshow5 = false;
                app.detail55 = true;
                app.ifping51 = false;
                app.ifping52 = false;
                if (score < 2.5) {
                    app.score5 = score;
                    app.abc5 = true;//分数字体颜色变红
                } else {
                    app.score5 = 2.5;
                    app.abc5 = false;
                }
                app.det5 = detail;
            } else {
                upimage();
                if (score < 2.5) {
                    app.score5 = score;
                    app.abc5 = true;//分数字体颜色变红
                } else {
                    app.score5 = 2.5;
                    app.abc5 = false;
                }
                app.det5 = detail;
                app.isshow5 = false;
                app.detail55 = true;
                app.ifping51 = false;
                app.ifping52 = false;
            }
        }
    });
}

/**
 * 点击确认按钮,修改单项分数,项目6
 */
function confirmupdate6() {
    getime();
    let getclass = document.getElementById("claselect").value;//班级编号1-8
    let dayif = app.mora;                                               //上午或下午
    let nowdate = document.getElementById("date").value;      //当天日期2020-01-01
    let imagesrc;
    let itemid = 6;
    let srcn66 = 6 + timesrc;
    let postf;
    if ($('#imagesrc66').val() === "") {
        imagesrc = "";
    } else {
        let filename = $('#imagesrc66').val();
        let index1 = filename.lastIndexOf(".");
        let index2 = filename.length;
        postf = filename.substring(index1, index2);//后缀名
        imagesrc = "images/" + srcn66 + postf;//图片路径String
    }
    let score = app.score6;//包干区
    let detail = document.getElementById("showifchange62").value;
    $.ajax({
        url: "updatecomment",
        type: "post",
        data: {
            "getclass": getclass,//班级编号
            "dayif": dayif,      //上午下午
            "nowdate": nowdate,  //日期
            "score": score,
            "detail": detail,
            "imagesrc": imagesrc,
            "itemid": itemid,
        },
        success: function (d) {
            let elid = "imagesrc66";
            upimage(elid, srcn66, postf);
            if ($('#imagesrc').val() === "") {
                app.isshow6 = false;
                app.detail66 = true;
                app.ifping61 = false;
                app.ifping62 = false;
                if (score < 2.5) {
                    app.score6 = score;
                    app.abc6 = true;//分数字体颜色变红
                } else {
                    app.score6 = 2.5;
                    app.abc6 = false;
                }
                app.det6 = detail;
            } else {
                upimage();
                if (score < 2.5) {
                    app.score6 = score;
                    app.abc6 = true;//分数字体颜色变红
                } else {
                    app.score6 = 2.5;
                    app.abc6 = false;
                }
                app.det6 = detail;
                app.isshow6 = false;
                app.detail66 = true;
                app.ifping61 = false;
                app.ifping62 = false;
            }
        }
    });
}

/**
 * 点击确认按钮,修改单项分数,项目7
 */
function confirmupdate7() {
    getime();
    let getclass = document.getElementById("claselect").value;//班级编号1-8
    let dayif = app.mora;                                               //上午或下午
    let nowdate = document.getElementById("date").value;      //当天日期2020-01-01
    let imagesrc;
    let itemid = 7;
    let srcn77 = 7 + timesrc;
    let postf;
    if ($('#imagesrc77').val() === "") {
        imagesrc = "";
    } else {
        let filename = $('#imagesrc22').val();
        let index1 = filename.lastIndexOf(".");
        let index2 = filename.length;
        postf = filename.substring(index1, index2);//后缀名
        imagesrc = "images/" + srcn77 + postf;//图片路径String
    }
    let score = app.score7;//包干区
    let detail = document.getElementById("showifchange72").value;
    $.ajax({
        url: "updatecomment",
        type: "post",
        data: {
            "getclass": getclass,//班级编号
            "dayif": dayif,      //上午下午
            "nowdate": nowdate,  //日期
            "score": score,
            "detail": detail,
            "imagesrc": imagesrc,
            "itemid": itemid,
        },
        success: function (d) {
            let elid = "imagesrc77";
            upimage(elid, srcn77, postf);
            if ($('#imagesrc').val() === "") {
                app.isshow7 = false;
                app.detail77 = true;
                app.ifping71 = false;
                app.ifping72 = false;
                if (score < 2.5) {
                    app.score2 = score;
                    app.abc7 = true;//分数字体颜色变红
                } else {
                    app.score2 = 2.5;
                    app.abc7 = false;
                }
                app.det7 = detail;
            } else {
                upimage();
                if (score < 2.5) {
                    app.score2 = score;
                    app.abc7 = true;//分数字体颜色变红
                } else {
                    app.score2 = 2.5;
                    app.abc7 = false;
                }
                app.det7 = detail;
                app.isshow7 = false;
                app.detail77 = true;
                app.ifping71 = false;
                app.ifping72 = false;
            }
        }
    });
}

/**
 * 图片文件上传
 */
function upimage(src, imgname, lastname) {
    const type = "file";              //后台接收时需要的参数名称，自定义即可
    const formData = new FormData();  //创建一个文件对象
    formData.append(type, $("#" + src)[0].files[0]);    //生成一对表单属性
    formData.append('imgname', imgname);
    formData.append('lastname', lastname);
    $.ajax({
        type: "POST",           //因为是传输文件，所以必须是post
        url: '/upimage',         //对应的后台处理类的地址
        data: formData,
        processData: false,
        contentType: false,
        success: function (d) {
        }
    });
}

/**
 * 初始化vue数据
 */
function chushi() {
    app.baif11 = false;
    app.baif12 = false;
    app.baif13 = false;
    app.baif21 = false;
    app.baif22 = false;
    app.baif23 = false;
    app.baif31 = false;
    app.baif32 = false;
    app.baif33 = false;
    app.baif41 = false;
    app.baif42 = false;
    app.baif43 = false;
    app.baif51 = false;
    app.baif52 = false;
    app.baif53 = false;
    app.baif61 = false;
    app.baif62 = false;
    app.baif63 = false;
    app.baif71 = false;
    app.baif72 = false;
    app.baif73 = false;
    app.isshow1 = false;
    app.isshow2 = false;
    app.isshow3 = false;
    app.isshow4 = false;
    app.isshow5 = false;
    app.isshow6 = false;
    app.isshow7 = false;
    app.detail11 = false;
    app.detail22 = false;
    app.detail33 = false;
    app.detail44 = false;
    app.detail55 = false;
    app.detail66 = false;
    app.detail77 = false;
    app.detail1 = true;
    app.detail2 = true;
    app.detail3 = true;
    app.detail4 = true;
    app.detail5 = true;
    app.detail6 = true;
    app.detail7 = true;
    app.ifping = true;
    app.ifping11 = true;
    app.ifping12 = true;
    app.ifping21 = true;
    app.ifping22 = true;
    app.ifping31 = true;
    app.ifping32 = true;
    app.ifping41 = true;
    app.ifping42 = true;
    app.ifping51 = true;
    app.ifping52 = true;
    app.ifping61 = true;
    app.ifping62 = true;
    app.ifping71 = true;
    app.ifping72 = true;
    app.abc1 = false;
    app.abc2 = false;
    app.abc3 = false;
    app.abc4 = false;
    app.abc5 = false;
    app.abc6 = false;
    app.abc7 = false;
    app.score1 = 10;
    app.score2 = 5;
    app.score3 = 2.5;
    app.score4 = 2.5;
    app.score5 = 2.5;
    app.score6 = 2.5;
    app.score7 = 2.5;
    document.getElementById("addcoment1").style.display = "none";
    document.getElementById("addcoment2").style.display = "none";
    document.getElementById("addcoment3").style.display = "none";
    document.getElementById("addcoment4").style.display = "none";
    document.getElementById("addcoment5").style.display = "none";
    document.getElementById("addcoment6").style.display = "none";
    document.getElementById("addcoment7").style.display = "none";
}

/**
 * 选择班级触发方法
 */
function selclassid(that) {
    //点击上午下午
    if (that === undefined) {
        let ind = 0;
        for (ind; ind <= 35; ind++) {
            if (app.ifcomp[ind] <= 1) {
                document.getElementById("claselect").value = ind + 1;
                app.nowclass = app.allclasses[ind];
                break;
            }
        }
    } else if (that.id === "t") {}
    //手动点击班级
    else {
        document.getElementById("claselect").value = that.value;//赋值给隐藏的value值
        app.nowclass = that.innerText;//显示当前所选班级
        document.getElementById("alertmsg").style.display = "none";
    }

    getime();
    let selclassid = document.getElementById("claselect").value;
    let nowdate = document.getElementById("date").value;
    let dayif = app.mora;
    $.ajax({
        url: "selclassid",
        type: "post",
        data: {
            "selclassid": selclassid,//班级编号
            "dayif": dayif,      //上午下午
            "nowdate": nowdate,  //日期
        },
        success: function (d) {
            if (d.isping === 1) {//已经点评过的情况
                document.getElementById("itemsubmit").style.display = "none";
                document.getElementById("scoreshowif").style.marginLeft = "45%";
                app.isshow1 = false;//修改按钮及上传图片
                app.isshow2 = false;//修改按钮及上传图片
                app.isshow3 = false;//修改按钮及上传图片
                app.isshow4 = false;//修改按钮及上传图片
                app.isshow5 = false;//修改按钮及上传图片
                app.isshow6 = false;//修改按钮及上传图片
                app.isshow7 = false;//修改按钮及上传图片
                app.ifping = false;
                app.ifping11 = false;//加减按钮
                app.ifping12 = false;//加减按钮
                app.ifping21 = false;//加减按钮
                app.ifping22 = false;//加减按钮
                app.ifping31 = false;//加减按钮
                app.ifping32 = false;//加减按钮
                app.ifping41 = false;//加减按钮
                app.ifping42 = false;//加减按钮
                app.ifping51 = false;//加减按钮
                app.ifping52 = false;//加减按钮
                app.ifping61 = false;//加减按钮
                app.ifping62 = false;//加减按钮
                app.ifping71 = false;//加减按钮
                app.ifping72 = false;//加减按钮
                app.detail1 = false;//扣分项按钮
                app.detail2 = false;//扣分项按钮
                app.detail3 = false;//扣分项按钮
                app.detail4 = false;//扣分项按钮
                app.detail5 = false;//扣分项按钮
                app.detail6 = false;//扣分项按钮
                app.detail7 = false;//扣分项按钮
                app.detail11 = true;//修改按钮
                app.detail22 = true;//修改按钮
                app.detail33 = true;//修改按钮
                app.detail44 = true;//修改按钮
                app.detail55 = true;//修改按钮
                app.detail66 = true;//修改按钮
                app.detail77 = true;//修改按钮
                app.det1 = d.de1;//评价
                app.det2 = d.de2;
                app.det3 = d.de3;
                app.det4 = d.de4;
                app.det5 = d.de5;
                app.det6 = d.de6;
                app.det7 = d.de7;

                if (d.points1 < 10) {
                    app.score1 = d.points1;
                    app.abc1 = true;//分数字体颜色变红
                } else {
                    app.score1 = 10;
                    app.abc1 = false;
                }

                if (d.points2 < 5) {
                    app.score2 = d.points2;
                    app.abc2 = true;
                } else {
                    app.score2 = 5;
                    app.abc2 = false;
                }

                if (d.points3 < 2.5) {
                    app.score3 = d.points3;
                    app.abc3 = true;
                } else {
                    app.score3 = 2.5;
                    app.abc3 = false;
                }

                if (d.points4 < 2.5) {
                    app.score4 = d.points4;
                    app.abc4 = true;
                } else {
                    app.score4 = 2.5;
                    app.abc4 = false;
                }
                if (d.points5 < 2.5) {
                    app.score5 = d.points5;
                    app.abc5 = true;
                } else {
                    app.score5 = 2.5;
                    app.abc5 = false;
                }

                if (d.points6 < 2.5) {
                    app.score6 = d.points6;
                    app.abc6 = true;
                } else {
                    app.score6 = 2.5;
                    app.abc6 = false;
                }

                if (d.points7 < 2.5) {
                    app.score7 = d.points7;
                    app.abc7 = true;
                } else {
                    app.score7 = 2.5;
                    app.abc7 = false;
                }

            } else {
                chushi();
                document.getElementById("itemsubmit").style.display = "block";
                document.getElementById("scoreshowif").style.marginLeft = "20px";
            }
       document.getElementById("app").style.display="block";
        }
    });
}

//判断扣分项是否选择
function ifkoufen() {
    let comment1 = document.getElementById("f15").value;
    let imgup1 = document.getElementById("imagesrc").value;
    let isfalse1 = app.baif11 === true || app.baif12 === true || app.baif13 === true || comment1 !== "" || imgup1 !== "";
    if (!isfalse1 && app.score1 < 10) {
        alert("请选择包干区扣分原因！");
        return false;
    }
    let comment2 = document.getElementById("f25").value;
    let imgup2 = document.getElementById("imagesrc2").value;
    let isfalse2 = app.baif21 === true || app.baif22 === true || app.baif23 === true || comment2 !== "" || imgup2 !== "";
    if (!isfalse2 && app.score2 < 5) {
        alert("请选择室内卫生扣分原因！");
        return false;
    }
    let comment3 = document.getElementById("f35").value;
    let imgup3 = document.getElementById("imagesrc3").value;
    let isfalse3 = app.baif31 === true || app.baif32 === true || app.baif33 === true || comment3 !== "" || imgup3 !== "";
    if (!isfalse3 && app.score3 < 2.5) {
        alert("请选择工具摆放扣分原因！");
        return false;
    }
    let comment4 = document.getElementById("f45").value;
    let imgup4 = document.getElementById("imagesrc4").value;
    let isfalse4 = app.baif41 === true || app.baif42 === true || app.baif43 === true || comment4 !== "" || imgup4 !== "";
    if (!isfalse4 && app.score4 < 2.5) {
        alert("请选择走廊扣分原因！");
        return false;
    }
    let comment5 = document.getElementById("f55").value;
    let imgup5 = document.getElementById("imagesrc5").value;
    let isfalse5 = app.baif51 === true || app.baif52 === true || app.baif53 === true || comment5 !== "" || imgup5 !== "";
    if (!isfalse5 && app.score5 < 2.5) {
        alert("请选择窗台扣分原因！");
        return false;
    }
    let comment6 = document.getElementById("f65").value;
    let imgup6 = document.getElementById("imagesrc6").value;
    let isfalse6 = app.baif61 === true || app.baif62 === true || app.baif63 === true || comment6 !== "" || imgup6 !== "";
    if (!isfalse6 && app.score6 < 2.5) {
        alert("请选择瓷砖门窗扣分原因！");
        return false;
    }
    let comment7 = document.getElementById("f75").value;
    let imgup7 = document.getElementById("imagesrc7").value;
    let isfalse7 = app.baif71 === true || app.baif72 === true || app.baif73 === true || comment7 !== "" || imgup7 !== "";
    if (!isfalse7 && app.score7 < 2.5) {
        alert("请选择多媒体讲台扣分原因！");
        return false;
    }
}

//今日点评
function upload() {
    //扣分校验
    if (ifkoufen() === false) {
        document.getElementById("alertmsg2").style.display = "none";
        return false;
    }else{
        loadhide();//请求动画
        getime();
        let getclass = document.getElementById("claselect").value;//班级编号1-8;
        let dayif = app.mora;                                               //上午或下午
        let nowdate = document.getElementById("date").value;      //当天日期2020-01-01
        setTimeout(function(){
            $.ajax({
                url: "commentif",
                type: "post",
                data: {
                    "getclass": getclass,//班级编号
                    "nowdate": nowdate,  //日期
                    "dayif": dayif,//上午下午
                },
                success: function (d) {
                    dian();
                }
            })
        },1000);
    }

}

//点评
function dian() {
    getime();
    let getclass = document.getElementById("claselect").value;//班级编号1-8
    let dayif = app.mora;                                               //上午或下午
    let nowdate = document.getElementById("date").value;      //当天日期2020-01-01
    let imagesrc;
    let imagesrc2;
    let imagesrc3;
    let imagesrc4;
    let imagesrc5;
    let imagesrc6;
    let imagesrc7;
    let srcn1 = 1 + timesrc;
    let srcn2 = 2 + timesrc;
    let srcn3 = 3 + timesrc;
    let srcn4 = 4 + timesrc;
    let srcn5 = 5 + timesrc;
    let srcn6 = 6 + timesrc;
    let srcn7 = 7 + timesrc;
    if ($('#imagesrc').val() === "") {
        imagesrc = "";
    } else {
        let filename = $('#imagesrc').val();
        let index1 = filename.lastIndexOf(".");
        let index2 = filename.length;
        let postf = filename.substring(index1, index2);//后缀名
        imagesrc = "images/" + srcn1 + postf;//图片路径String
    }

    if ($('#imagesrc2').val() === "") {
        imagesrc2 = "";
    } else {
        let filename = $('#imagesrc2').val();
        let index1 = filename.lastIndexOf(".");
        let index2 = filename.length;
        let postf = filename.substring(index1, index2);//后缀名
        imagesrc2 = "images/" + srcn2 + postf;//图片路径String
    }

    if ($('#imagesrc3').val() === "") {
        imagesrc3 = "";
    } else {
        let filename = $('#imagesrc3').val();
        let index1 = filename.lastIndexOf(".");
        let index2 = filename.length;
        let postf = filename.substring(index1, index2);//后缀名
        imagesrc3 = "images/" + srcn3 + postf;//图片路径String
    }
    if ($('#imagesrc4').val() === "") {
        imagesrc4 = "";
    } else {
        let filename = $('#imagesrc4').val();
        let index1 = filename.lastIndexOf(".");
        let index2 = filename.length;
        let postf = filename.substring(index1, index2);//后缀名
        imagesrc4 = "images/" + srcn4 + postf;//图片路径String
    }
    if ($('#imagesrc5').val() === "") {
        imagesrc5 = "";
    } else {
        let filename = $('#imagesrc5').val();
        let index1 = filename.lastIndexOf(".");
        let index2 = filename.length;
        let postf = filename.substring(index1, index2);//后缀名
        imagesrc5 = "images/" + srcn5 + postf;//图片路径String
    }
    if ($('#imagesrc6').val() === "") {
        imagesrc6 = "";
    } else {
        let filename = $('#imagesrc6').val();
        let index1 = filename.lastIndexOf(".");
        let index2 = filename.length;
        let postf = filename.substring(index1, index2);//后缀名
        imagesrc6 = "images/" + srcn6 + postf;//图片路径String
    }
    if ($('#imagesrc7').val() === "") {
        imagesrc7 = "";
    } else {
        let filename = $('#imagesrc7').val();
        let index1 = filename.lastIndexOf(".");
        let index2 = filename.length;
        let postf = filename.substring(index1, index2);//后缀名
        imagesrc7 = "images/" + srcn7 + postf;//图片路径String
    }

    let score1 = app.score1;
    let score2 = app.score2;
    let score3 = app.score3;
    let score4 = app.score4;
    let score5 = app.score5;
    let score6 = app.score6;
    let score7 = app.score7;

    let detail1;
    let detail2;
    let detail3;
    let detail4;
    let detail5;
    let detail6;
    let detail7;

    let f11 = document.getElementById("f11");
    let s12 = document.getElementById("s12");
    let t13 = document.getElementById("t13");
    let f15 = document.getElementById("f15");

    let f21 = document.getElementById("f21");
    let s22 = document.getElementById("s22");
    let t23 = document.getElementById("t23");
    let f25 = document.getElementById("f25");

    let f31 = document.getElementById("f31");
    let s32 = document.getElementById("s32");
    let t33 = document.getElementById("t33");
    let f35 = document.getElementById("f35");

    let f41 = document.getElementById("f41");
    let s42 = document.getElementById("s42");
    let t43 = document.getElementById("t43");
    let f45 = document.getElementById("f45");

    let f51 = document.getElementById("f51");
    let s52 = document.getElementById("s52");
    let t53 = document.getElementById("t53");
    let f55 = document.getElementById("f55");

    let f61 = document.getElementById("f61");
    let s62 = document.getElementById("s62");
    let t63 = document.getElementById("t63");
    let f65 = document.getElementById("f65");

    let f71 = document.getElementById("f71");
    let s72 = document.getElementById("s72");
    let t73 = document.getElementById("t73");
    let f75 = document.getElementById("f75");

    //id:f11,s12,t13,f14
    if (app.baif11 === true && app.baif12 === true && app.baif13 === true) {
        detail1 = f11.value + "  " + s12.value + "  " + t13.value + "  " + f15.value;
    } else if (app.baif11 === true && app.baif12 === false && app.baif13 === true) {
        detail1 = f11.value + "  " + t13.value + "  " + f15.value;
    } else if (app.baif11 === true && app.baif12 === false && app.baif13 === false) {
        detail1 = f11.value + "  " + f15.value;
    } else if (app.baif11 === true && app.baif12 === true && app.baif13 === false) {
        detail1 = f11.value + "  " + s12.value + "  " + f15.value;
    } else if (app.baif11 === false && app.baif12 === true && app.baif13 === true) {
        detail1 = s12.value + "  " + t13.value + "  " + f15.value;
    } else if (app.baif11 === false && app.baif12 === false && app.baif13 === false) {
        detail1 = f15.value;
    } else if (app.baif11 === false && app.baif12 === true && app.baif13 === false) {
        detail1 = s12.value + "  " + f15.value;
    } else if (app.baif11 === false && app.baif12 === false && app.baif13 === true) {
        detail1 = t13.value + "  " + f15.value;
    } else {
        alert("系统出错，请联系管理员")
    }

    if (app.baif21 === true && app.baif22 === true && app.baif23 === true) {
        detail2 = f21.value + "  " + s22.value + "  " + t23.value + "  " + f25.value;
    } else if (app.baif21 === true && app.baif22 === false && app.baif23 === true) {
        detail2 = f21.value + "  " + t23.value + "  " + f25.value;
    } else if (app.baif21 === true && app.baif22 === false && app.baif23 === false) {
        detail2 = f21.value + "  " + f25.value;
    } else if (app.baif21 === true && app.baif22 === true && app.baif23 === false) {
        detail2 = f21.value + "  " + s22.value + "  " + f25.value;
    } else if (app.baif21 === false && app.baif22 === true && app.baif23 === true) {
        detail2 = s22.value + "  " + t23.value + "  " + f25.value;
    } else if (app.baif21 === false && app.baif22 === false && app.baif23 === false) {
        detail2 = f25.value;
    } else if (app.baif21 === false && app.baif22 === true && app.baif23 === false) {
        detail2 = s22.value + "  " + f25.value;
    } else if (app.baif21 === false && app.baif22 === false && app.baif23 === true) {
        detail2 = t23.value + "  " + f25.value;
    } else {
        alert("系统出错，请联系管理员");
    }

    if (app.baif31 === true && app.baif32 === true && app.baif33 === true) {
        detail3 = f31.value + "  " + s32.value + "  " + t33.value + "  " + f35.value;
    } else if (app.baif31 === true && app.baif32 === false && app.baif33 === true) {
        detail3 = f31.value + "  " + t33.value + "  " + f35.value;
    } else if (app.baif31 === true && app.baif32 === false && app.baif33 === false) {
        detail3 = f31.value + "  " + f35.value;
    } else if (app.baif31 === true && app.baif32 === true && app.baif33 === false) {
        detail3 = f31.value + "  " + s32.value + "  " + f35.value;
    } else if (app.baif31 === false && app.baif32 === true && app.baif33 === true) {
        detail3 = s32.value + "  " + t33.value + "," + f35.value;
    } else if (app.baif31 === false && app.baif32 === false && app.baif33 === false) {
        detail3 = f35.value;
    } else if (app.baif31 === false && app.baif32 === true && app.baif33 === false) {
        detail3 = s32.value + "  " + f35.value;
    } else if (app.baif31 === false && app.baif32 === false && app.baif33 === true) {
        detail3 = t33.value + "  " + f35.value;
    } else {
        alert("系统出错，请联系管理员");
    }

    if (app.baif41 === true && app.baif42 === true && app.baif43 === true) {
        detail4 = f41.value + "  " + s42.value + "  " + t43.value + "  " + f45.value;
    } else if (app.baif41 === true && app.baif42 === false && app.baif43 === true) {
        detail4 = f41.value + "  " + t43.value + "  " + f45.value;
    } else if (app.baif41 === true && app.baif42 === false && app.baif43 === false) {
        detail4 = f41.value + "  " + f45.value;
    } else if (app.baif41 === true && app.baif42 === true && app.baif43 === false) {
        detail4 = f41.value + "  " + s42.value + "  " + f45.value;
    } else if (app.baif41 === false && app.baif42 === true && app.baif43 === true) {
        detail4 = s42.value + "  " + t43.value + "  " + f45.value;
    } else if (app.baif41 === false && app.baif42 === false && app.baif43 === false) {
        detail4 = f45.value;
    } else if (app.baif41 === false && app.baif42 === true && app.baif43 === false) {
        detail4 = s42.value + "  " + f45.value;
    } else if (app.baif41 === false && app.baif42 === false && app.baif43 === true) {
        detail4 = t43.value + "  " + f45.value;
    } else {
        alert("系统出错，请联系管理员");
    }

    if (app.baif41 === true && app.baif42 === true && app.baif43 === true) {
        detail4 = f41.value + "  " + s42.value + "  " + t43.value + "  " + f45.value;
    } else if (app.baif41 === true && app.baif42 === false && app.baif43 === true) {
        detail4 = f41.value + "  " + t43.value + "  " + f45.value;
    } else if (app.baif41 === true && app.baif42 === false && app.baif43 === false) {
        detail4 = f41.value + "  " + f45.value;
    } else if (app.baif41 === true && app.baif42 === true && app.baif43 === false) {
        detail4 = f41.value + "  " + s42.value + "  " + f45.value;
    } else if (app.baif41 === false && app.baif42 === true && app.baif43 === true) {
        detail4 = s42.value + "  " + t43.value + "  " + f45.value;
    } else if (app.baif41 === false && app.baif42 === false && app.baif43 === false) {
        detail4 = f45.value;
    } else if (app.baif41 === false && app.baif42 === true && app.baif43 === false) {
        detail4 = s42.value + "  " + f45.value;
    } else if (app.baif41 === false && app.baif42 === false && app.baif43 === true) {
        detail4 = t43.value + "  " + f45.value;
    } else {
        alert("系统出错，请联系管理员");
    }

    if (app.baif51 === true && app.baif52 === true && app.baif53 === true) {
        detail5 = f51.value + "  " + s52.value + "  " + t53.value + "  " + f55.value;
    } else if (app.baif51 === true && app.baif52 === false && app.baif53 === true) {
        detail5 = f51.value + "  " + t53.value + "  " + f55.value;
    } else if (app.baif51 === true && app.baif52 === false && app.baif53 === false) {
        detail5 = f51.value + "  " + f55.value;
    } else if (app.baif51 === true && app.baif52 === true && app.baif53 === false) {
        detail5 = f51.value + "  " + s52.value + "  " + f55.value;
    } else if (app.baif51 === false && app.baif52 === true && app.baif53 === true) {
        detail5 = s52.value + "  " + t53.value + "  " + f55.value;
    } else if (app.baif51 === false && app.baif52 === false && app.baif53 === false) {
        detail5 = f55.value;
    } else if (app.baif51 === false && app.baif52 === true && app.baif53 === false) {
        detail5 = s52.value + "  " + f55.value;
    } else if (app.baif51 === false && app.baif52 === false && app.baif53 === true) {
        detail5 = t53.value + "  " + f55.value;
    } else {
        alert("系统出错，请联系管理员");
    }

    if (app.baif61 === true && app.baif62 === true && app.baif63 === true) {
        detail6 = f61.value + "  " + s62.value + "  " + t63.value + "  " + f65.value;
    } else if (app.baif61 === true && app.baif62 === false && app.baif63 === true) {
        detail6 = f61.value + "  " + t63.value + "  " + f65.value;
    } else if (app.baif61 === true && app.baif62 === false && app.baif63 === false) {
        detail6 = f61.value + "  " + f65.value;
    } else if (app.baif61 === true && app.baif62 === true && app.baif63 === false) {
        detail6 = f61.value + "  " + s62.value + "  " + f65.value;
    } else if (app.baif61 === false && app.baif62 === true && app.baif63 === true) {
        detail6 = s62.value + "  " + t63.value + "  " + f65.value;
    } else if (app.baif61 === false && app.baif62 === false && app.baif63 === false) {
        detail6 = f65.value;
    } else if (app.baif61 === false && app.baif62 === true && app.baif63 === false) {
        detail6 = s62.value + "  " + f65.value;
    } else if (app.baif61 === false && app.baif62 === false && app.baif63 === true) {
        detail6 = t63.value + "  " + f65.value;
    } else {
        alert("系统出错，请联系管理员");
    }

    if (app.baif71 === true && app.baif72 === true && app.baif73 === true) {
        detail7 = f71.value + "  " + s72.value + "  " + t73.value + "  " + f75.value;
    } else if (app.baif71 === true && app.baif72 === false && app.baif73 === true) {
        detail7 = f71.value + "  " + t73.value + "  " + f75.value;
    } else if (app.baif71 === true && app.baif72 === false && app.baif73 === false) {
        detail7 = f71.value + "  " + f75.value;
    } else if (app.baif71 === true && app.baif72 === true && app.baif73 === false) {
        detail7 = f71.value + "  " + s72.value + "  " + f75.value;
    } else if (app.baif71 === false && app.baif72 === true && app.baif73 === true) {
        detail7 = s72.value + "  " + t73.value + "  " + f75.value;
    } else if (app.baif71 === false && app.baif72 === false && app.baif73 === false) {
        detail7 = f75.value;
    } else if (app.baif71 === false && app.baif72 === true && app.baif73 === false) {
        detail7 = s72.value + "  " + f75.value;
    } else if (app.baif71 === false && app.baif72 === false && app.baif73 === true) {
        detail7 = t73.value + "  " + f75.value;
    } else {
        alert("系统出错，请联系管理员");
    }
    $.ajax({
        url: "commentup",
        type: "post",
        data: {
            "getclass": getclass,//班级编号
            "dayif": dayif,      //上午下午
            "nowdate": nowdate,  //日期
            "score1": score1,
            "score2": score2,
            "score3": score3,
            "score4": score4,
            "score5": score5,
            "score6": score6,
            "score7": score7,
            "detail1": detail1,
            "detail2": detail2,
            "detail3": detail3,
            "detail4": detail4,
            "detail5": detail5,
            "detail6": detail6,
            "detail7": detail7,
            "imagesrc": imagesrc, //图片路径
            "imagesrc2": imagesrc2, //图片路径
            "imagesrc3": imagesrc3, //图片路径
            "imagesrc4": imagesrc4, //图片路径
            "imagesrc5": imagesrc5, //图片路径
            "imagesrc6": imagesrc6, //图片路径
            "imagesrc7": imagesrc7, //图片路径
        },
        success: function (d) {
            if ($('#imagesrc').val() === "") {
            } else {
                let filename = $('#imagesrc').val();
                let index1 = filename.lastIndexOf(".");
                let index2 = filename.length;
                let postf = filename.substring(index1, index2);//后缀名

                let imageid1 = "imagesrc";
                upimage(imageid1, srcn1, postf);
            }

            if ($('#imagesrc2').val() === "") {
            } else {
                let filename = $('#imagesrc2').val();
                let index1 = filename.lastIndexOf(".");
                let index2 = filename.length;
                let postf = filename.substring(index1, index2);//后缀名

                let imageid2 = "imagesrc2";
                upimage(imageid2, srcn2, postf);
            }

            if ($('#imagesrc3').val() === "") {
            } else {
                let filename = $('#imagesrc3').val();
                let index1 = filename.lastIndexOf(".");
                let index2 = filename.length;
                let postf = filename.substring(index1, index2);//后缀名

                let imageid3 = "imagesrc3";
                upimage(imageid3, srcn3, postf);
            }

            if ($('#imagesrc4').val() === "") {
            } else {
                let filename = $('#imagesrc4').val();
                let index1 = filename.lastIndexOf(".");
                let index2 = filename.length;
                let postf = filename.substring(index1, index2);//后缀名

                let imageid4 = "imagesrc4";
                upimage(imageid4, srcn4, postf);
            }

            if ($('#imagesrc5').val() === "") {
            } else {
                let filename = $('#imagesrc5').val();
                let index1 = filename.lastIndexOf(".");
                let index2 = filename.length;
                let postf = filename.substring(index1, index2);//后缀名

                let imageid5 = "imagesrc5";
                upimage(imageid5, srcn5, postf);
            }

            if ($('#imagesrc6').val() === "") {
            } else {
                let filename = $('#imagesrc6').val();
                let index1 = filename.lastIndexOf(".");
                let index2 = filename.length;
                let postf = filename.substring(index1, index2);//后缀名

                let imageid6 = "imagesrc6";
                upimage(imageid6, srcn6, postf);
            }

            if ($('#imagesrc7').val() === "") {
                location.reload();
            } else {
                let filename = $('#imagesrc7').val();
                let index1 = filename.lastIndexOf(".");
                let index2 = filename.length;
                let postf = filename.substring(index1, index2);//后缀名
                let imageid7 = "imagesrc7";
                upimage(imageid7, srcn7, postf);
                location.reload();
            }

        }
    });
}

/*
动画加载
 */
function loadhide() {
    document.getElementById("app").style.display="none";
    document.getElementById("loader").style.display="block";
}