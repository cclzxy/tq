//获取周几
// var a = ["日", "一", "二", "三", "四", "五", "六"];
// var week = new Date().getDay();
// var str = "星期" + a[week];
let app2 = new Vue({
    el: "#app",
    data: {
        showif:false,
        index:0,
        allclas:'',//所有班级
        allpoints:'',//页面加载的数据
        classscore:[],//今日所有班级总分
        imghide:true,//显示隐藏图片下的大div
        imghide2:false,//显示隐藏大图片大小img
        paihang:['日排行','校园多项评比 结果公示','月排行','季度排行','学期排行'],
        charts:'',//排行的数据
        bacol:[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        bacolmax:[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        bacolmin:[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        weekday:['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21'],
        weekscore1:[],
        weekscore2:[],
        weekscore3:[],
        weekscore4:[],
        weekscore5:[],
        weekscore6:[],
        weekscore7:[],
        weekscore8:[],
        weekscore9:[],
        weekscore10:[],
        weekscore11:[],
        weekscore12:[],
        weekscore13:[],
        weekscore14:[],
        weekscore15:[],
        weekscore16:[],
        weekscore17:[],
        weekscore18:[],
        weekscore19:[],
        weekscore20:[],
        weekscore21:[],
        maxweek:[],
        minweek:[],
    },
    methods: {
        //数据统计
        showclass() {
            this.index=0;
        },
        //班级管理
        showclass1() {
           this.index=1;

        },
        //学生管理
        showclass2:function () {
            this.index=2;
        },
        //五项评比
        showclass3() {
            this.index=3;
            findall();
        },
        //Excel导出
        showclass4:function () {
            this.index=4;
        },

        showclass5() {
            this.index=5;
            findnowdate();
        },

        showclass6() {
            this.index=6;
            // document.getElementById("top").style.display="none";
            weekmonthdates();
        },
        showclass7() {
            this.index=6;
        },
        findbyclassid() {
            findbyclassid();
        },
        findbyitemid() {
            findbyitemid();
        }
    },
    filters: {
        formatDate: function (value) {
            let date = new Date(value);
            let y = date.getFullYear();
            let MM = date.getMonth() + 1;
            MM = MM < 10 ? ('0' + MM) : MM;
            let d = date.getDate();
            d = d < 10 ? ('0' + d) : d;
            let h = date.getHours();
            h = h < 10 ? ('0' + h) : h;
            let m = date.getMinutes();
            m = m < 10 ? ('0' + m) : m;
            let s = date.getSeconds();
            s = s < 10 ? ('0' + s) : s;
            return y + '-' + MM + '-' + d ;
        },
        formatNoon:function(value){
            if (value===1){
                return "上午";
            }else if (value===0){
                return "下午";
            }
        },
        formatItem:function(value){
            if (value===1){
                return "包干区";
            }else if (value===2){
                return "室内卫生";
            }else if (value===3){
                return "工具摆放";
            }else if (value===4){
                return "走廊";
            }else if (value===5){
                return "窗台";
            }else if (value===6){
                return "瓷砖门窗";
            }else if (value===7){
                return "多媒体讲台";
            }
        },
        formatdetails:function(value){
            if (value===""){
                return "";
            }else{
                return value;
            }
            }
        ,
        formatpicture:function(value){
            if (value!==""){
                return "是";
            }else {
                return "否";
            }
        },
        formatClass:function (value) {
            if (value===1){
                return "一年级(1)班";
            }else if (value===2){
                return "一年级(2)班"
            }else if (value===2){
                return "一年级(2)班"
            }else if (value===3){
                return "一年级(3)班"
            }else if (value===4){
                return "一年级(4)班"
            }else if (value===5){
                return "一年级(5)班"
            }else if (value===6){
                return "一年级(6)班"
            }else if (value===7){
                return "二年级(1)班"
            }else if (value===8){
                return "二年级(2)班"
            }else if (value===9){
                return "二年级(3)班"
            }else if (value===10){
                return "二年级(4)班"
            }else if (value===11){
                return "二年级(5)班"
            }else if (value===12){
                return "二年级(6)班"
            }else if (value===13){
                return "三年级(1)班"
            }else if (value===14){
                return "三年级(2)班"
            }else if (value===15){
                return "三年级(3)班"
            }else if (value===16){
                return "三年级(4)班"
            }else if (value===17){
                return "三年级(5)班"
            }else if (value===18){
                return "三年级(6)班"
            }else if(value===19){
                return "四年级(1)班"
            }else if(value===20){
                return "四年级(2)班"
            }else if(value===21){
                return "四年级(3)班"
            }else if(value===22){
                return "四年级(4)班"
            }else if(value===23){
                return "四年级(5)班"
            }else if(value===24){
                return "四年级(6)班"
            }else if(value===25){
                return "五年级(1)班"
            }else if(value===26){
                return "五年级(2)班"
            }else if(value===27){
                return "五年级(3)班"
            }else if(value===28){
                return "五年级(4)班"
            }else if(value===29){
                return "五年级(5)班"
            }else if(value===30){
                return "五年级(6)班"
            }else if(value===31){
                return "六年级(1)班"
            }else if(value===32){
                return "六年级(2)班"
            }else if(value===33){
                return "六年级(3)班"
            }else if(value===34){
                return "六年级(4)班"
            }else if(value===35){
                return "六年级(5)班"
            }else if(value===36){
                return "六年级(6)班"
            }
        }
    }
});