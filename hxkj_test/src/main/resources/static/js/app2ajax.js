$.ajax({
    url: "FindAllclass",
    type: "post",
    success: function (d) {
        app2.allclas = d;
    }
});

$.ajax({
    url: "allpoints",
    type: "post",
    success: function (points) {
        app2.allpoints = points;
    }
});

$.ajax({
    url: "findnowcanvs",
    type: "post",
    success: function (scores) {
        for (let i=0;i<=35;i++){
            app2.classscore[i]=scores[i];
        }
        barChart();
    }
});
//监听排行榜选择事件
$("input[name='type']").change(function (){
    //alert(this.value);
});

//五项评比所有数据
function findall() {
    $.ajax({
        url: "allpoints",
        type: "post",
        success: function (points) {
            app2.allpoints = points;
        }
    });
}

//找到当前日期的数据，今日数据
function findnowdate() {
    $.ajax({
        url: "findnowdate",
        type: "post",
        success: function (points) {
            app2.allpoints = points;
        }
    });
}

//班级id查询
function findbyclassid() {
    let classid = document.getElementById("classid").value;
    $.ajax({
        url: "findbyclassid",
        type: "post",
        data: {"classid": classid},
        success: function (points) {
            app2.allpoints = points;
        }
    });
}
//班级id和日期查询
function findbynowclassid() {
    let classid = document.getElementById("classid2").value;
    $.ajax({
        url: "findbyclassid2",
        type: "post",
        data: {
            "classid": classid,
        },
        success: function (points) {
            app2.allpoints = points;
        }
    });
}
//每周每月数据统计
function weekmonthdates(){

    $.ajax({
        url: "every",
        type: "post",
        // data: {"itemid": itemid},
        success: function (p) {
            app2.weekscore1=p.slice(0,36);
            app2.weekscore2=p.slice(36,72);
            app2.weekscore3=p.slice(72,108);
            app2.weekscore4=p.slice(108,144);
            app2.weekscore5=p.slice(144,180);
            app2.weekscore6=p.slice(180,216);
            app2.weekscore7=p.slice(216,252);
            app2.weekscore8=p.slice(252,288);
            app2.weekscore9=p.slice(288,324);
            app2.weekscore10=p.slice(324,36*10);
            app2.weekscore11=p.slice(36*10,36*11);
            app2.weekscore12=p.slice(36*11,36*12);
            app2.weekscore13=p.slice(36*12,36*13);
            app2.weekscore14=p.slice(36*13,36*14);
            app2.weekscore15=p.slice(36*14,36*15);
            app2.weekscore16=p.slice(36*15,36*16);
            app2.weekscore17=p.slice(36*16,36*17);
            app2.weekscore18=p.slice(36*17,36*18);
            app2.weekscore19=p.slice(36*18,36*19);
            app2.weekscore20=p.slice(36*19,36*20);
            app2.weekscore21=p.slice(36*20,36*21);
            var d1 = new Date();
            var d2 = new Date();
            d2.setMonth(0);
            d2.setDate(1);
            var rq = d1-d2;
            var s1 = Math.ceil(rq/(24*60*60*1000));
            var s2 = Math.ceil(s1/7);
            app2.bacol[s2-1]=true;
            app2.maxweek[0]=Math.max.apply(null, app2.weekscore1);
            app2.maxweek[1]=Math.max.apply(null, app2.weekscore2);
            app2.maxweek[2]=Math.max.apply(null, app2.weekscore3);
            app2.maxweek[3]=Math.max.apply(null, app2.weekscore4);
            app2.maxweek[4]=Math.max.apply(null, app2.weekscore5);
            app2.maxweek[5]=Math.max.apply(null, app2.weekscore6);
            app2.maxweek[6]=Math.max.apply(null, app2.weekscore7);
            app2.maxweek[7]=Math.max.apply(null, app2.weekscore8);
            app2.maxweek[8]=Math.max.apply(null, app2.weekscore9);
            app2.maxweek[9]=Math.max.apply(null, app2.weekscore10);
            app2.maxweek[10]=Math.max.apply(null, app2.weekscore11);
            app2.maxweek[11]=Math.max.apply(null, app2.weekscore12);
            app2.maxweek[12]=Math.max.apply(null, app2.weekscore13);
            app2.maxweek[13]=Math.max.apply(null, app2.weekscore14);
            app2.maxweek[14]=Math.max.apply(null, app2.weekscore15);
            app2.maxweek[15]=Math.max.apply(null, app2.weekscore16);
            app2.maxweek[16]=Math.max.apply(null, app2.weekscore17);
            app2.maxweek[17]=Math.max.apply(null, app2.weekscore18);
            app2.maxweek[18]=Math.max.apply(null, app2.weekscore19);
            app2.maxweek[19]=Math.max.apply(null, app2.weekscore20);
            app2.maxweek[20]=Math.max.apply(null, app2.weekscore21);
            app2.minweek[0]=Math.min.apply(null, app2.weekscore1);
            app2.minweek[1]=Math.min.apply(null, app2.weekscore2);
            app2.minweek[2]=Math.min.apply(null, app2.weekscore3);
            app2.minweek[3]=Math.min.apply(null, app2.weekscore4);
            app2.minweek[4]=Math.min.apply(null, app2.weekscore5);
            app2.minweek[5]=Math.min.apply(null, app2.weekscore6);
            app2.minweek[6]=Math.min.apply(null, app2.weekscore7);
            app2.minweek[7]=Math.min.apply(null, app2.weekscore8);
            app2.minweek[8]=Math.min.apply(null, app2.weekscore9);
            app2.minweek[9]=Math.min.apply(null, app2.weekscore10);
            app2.minweek[10]=Math.min.apply(null, app2.weekscore11);
            app2.minweek[11]=Math.min.apply(null, app2.weekscore12);
            app2.minweek[12]=Math.min.apply(null, app2.weekscore13);
            app2.minweek[13]=Math.min.apply(null, app2.weekscore14);
            app2.minweek[14]=Math.min.apply(null, app2.weekscore15);
            app2.minweek[15]=Math.min.apply(null, app2.weekscore16);
            app2.minweek[16]=Math.min.apply(null, app2.weekscore17);
            app2.minweek[17]=Math.min.apply(null, app2.weekscore18);
            app2.minweek[18]=Math.min.apply(null, app2.weekscore19);
            app2.minweek[19]=Math.min.apply(null, app2.weekscore20);
            app2.minweek[20]=Math.min.apply(null, app2.weekscore21);
        }
    });
}
//项目id查询
function findbyitemid() {
    let itemid = document.getElementById("itemid").value;
    $.ajax({
        url: "findbyitemid",
        type: "post",
        data: {"itemid": itemid},
        success: function (points) {
            app2.allpoints = points;
        }
    });
}
//点击图片放大
function showimg(that) {
    document.getElementById("imgshowbig").src=that.value;
    app2.imghide=false;
    app2.imghide2=true;
    document.getElementById("top").style.display="none";
}
//点击大图片缩小
function hidebigimg(that) {
    that.src="";
    app2.imghide=true;
    app2.imghide2=false;
    document.getElementById("top").style.display="block";
}
//导出excel
function downfile() {
    let seldata = document.getElementById("seldata").value;//获取选择的日期
    let selclass = document.getElementById("selclass").value;//获取年级id
    location.href = "/UserExcelDownloads?seldata=" + seldata + "&selclass=" + selclass;//导出excel
}


var settings = {
    "url": "http://display.incich.com:9208/display-rest/oauth/token",
    "method": "POST",
    "timeout": 0,
    "headers": {
        "Authorization": "Basic aW5jaF9sc190ZTo5ZDAwMjlmZS1lMzUyLTExZTktYWIxOC03Y2QzMGFkYWEyMTg=",
        "Content-Type": "application/x-www-form-urlencoded"
    },
    "data": {
        "username": "youjin",
        "systemid": "lsxx",
        "grant_type": "password",
        "password": "670b14728ad9902aecba32e22fa4f6bd"
    }
};

$.ajax(settings).done(function (response) {
    console.log(response);
});