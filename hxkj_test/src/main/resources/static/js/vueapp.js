const app = new Vue({
        el: "#app",
        data: {
            //判断今日班级是否完成
            ifcomp: [],
            //项目名称
            itemnames:[],
            //修改内容:输入文字和上传图片
            isshow1: false,
            isshow2: false,
            isshow3: false,
            isshow4: false,
            isshow5: false,
            isshow6: false,
            isshow7: false,
            //已评完的内容展示
            det1: "",
            det2: "",
            det3: "",
            det4: "",
            det5: "",
            det6: "",
            det7: "",
            //控制已评完内容显示隐藏
            detail11: false,
            detail22: false,
            detail33: false,
            detail44: false,
            detail55: false,
            detail66: false,
            detail77: false,
            //控制‘其他说明’显示隐藏
            ifping: true,
            //控制加减号显示隐藏
            ifping11: true,
            ifping12: true,
            ifping21: true,
            ifping22: true,
            ifping31: true,
            ifping32: true,
            ifping41: true,
            ifping42: true,
            ifping51: true,
            ifping52: true,
            ifping61: true,
            ifping62: true,
            ifping71: true,
            ifping72: true,
            //提交按钮显示隐藏
            issubmit1: true,
            //控制单项分值颜色
            abc1: false,
            abc2: false,
            abc3: false,
            abc4: false,
            abc5: false,
            abc6: false,
            abc7: false,
            abc8: false,
            //控制扣分项显示隐藏
            detail1: true,
            detail2: true,
            detail3: true,
            detail4: true,
            detail5: true,
            detail6: true,
            detail7: true,
            detail8: true,
            //控制选项是否选中颜色控制
            baif11: false,
            baif12: false,
            baif13: false,
            baif21: false,
            baif22: false,
            baif23: false,
            baif31: false,
            baif32: false,
            baif33: false,
            baif41: false,
            baif42: false,
            baif43: false,
            baif51: false,
            baif52: false,
            baif53: false,
            baif61: false,
            baif62: false,
            baif63: false,
            baif71: false,
            baif72: false,
            baif73: false,
            baif81: false,
            baif82: false,
            baif83: false,
            //星期几
            noweek: str,
            //上午下午
            mora: '下午',
            //各项分值
            score1: 10,
            score2: 5.0,
            score3: 2.5,
            score4: 2.5,
            score5: 2.5,
            score6: 2.5,
            score7: 2.5,
            //当前评分的年级
            nowclass: '年级',
            //扣分原因
            details:
                [{
                    //包干区
                    one: '包干区有灰尘',
                    two: '包干区杂物',
                    three: '包干区没拖地',
                    others: '补充及上传照片'
                }, {
                    //室内
                    one: '室内脏乱',
                    two: '室内没消毒',
                    three: '室内地没拖',
                    others: '补充及上传照片'
                }, {
                    //工具摆放
                    one: '工具未摆放',
                    two: '工具摆放不整齐',
                    three: '工具摆放不规范',
                    others: '补充及上传照片'
                }, {
                    //走廊
                    one: '走廊灰尘多',
                    two: '走廊有杂物',
                    three: '走廊没拖地',
                    others: '补充及上传照片'
                }, {
                    //窗台
                    one: '窗台有斑点',
                    two: '窗台灰尘多',
                    three: '窗户没关',
                    others: '补充及上传照片'
                }, {
                    //瓷砖门窗
                    one: '瓷砖污渍多',
                    two: '门窗灰尘多',
                    three: '瓷砖有异物',
                    others: '补充及上传照片'
                }, {
                    //课桌凳摆放
                    one: '桌凳摆放不规范',
                    two: '桌凳未摆放',
                    three: '桌上书不整齐',
                    others: '补充及上传照片'
                }, {
                    //自行车摆放
                    one: '车未摆放',
                    two: '车摆不整齐',
                    three: '车存在安全隐患',
                    others: '补充及上传照片'
                }],
            //所有年级
            allclasses:
                ['一年级(1)班', '一年级(2)班', '一年级(3)班', '一年级(4)班', '一年级(5)班', '一年级(6)班'
                    , '二年级(1)班', '二年级(2)班', '二年级(3)班', '二年级(4)班', '二年级(5)班', '二年级(6)班'
                    , '三年级(1)班', '三年级(2)班', '三年级(3)班', '三年级(4)班', '三年级(5)班', '三年级(6)班'
                    , '四年级(1)班', '四年级(2)班', '四年级(3)班', '四年级(4)班', '四年级(5)班', '四年级(6)班'
                    , '五年级(1)班', '五年级(2)班', '五年级(3)班', '五年级(4)班', '五年级(5)班', '五年级(6)班'
                    , '六年级(1)班', '六年级(2)班', '六年级(3)班', '六年级(4)班', '六年级(5)班', '六年级(6)班'],
        },
        methods: {
            changede1() {
                this.isshow1 = true;
                this.detail11 = false;
                this.ifping11 = true;
                this.ifping12 = true;
            },
            changede2() {
                this.isshow2 = true;
                this.detail22 = false;
                this.ifping21 = true;
                this.ifping22 = true;
            }, changede3() {
                this.isshow3 = true;
                this.detail33 = false;
                this.ifping31 = true;
                this.ifping32 = true;
            }, changede4() {
                this.isshow4 = true;
                this.detail44 = false;
                this.ifping41 = true;
                this.ifping42 = true;
            }, changede5() {
                this.isshow5 = true;
                this.detail55 = false;
                this.ifping51 = true;
                this.ifping52 = true;
            }, changede6() {
                this.isshow6 = true;
                this.detail66 = false;
                this.ifping61 = true;
                this.ifping62 = true;
            }, changede7() {
                this.isshow7 = true;
                this.detail77 = false;
                this.ifping71 = true;
                this.ifping72 = true;
            },
            chonglu() {
                if (this.ischonglu === false) {
                    this.ischonglu = true;
                    this.issubmit1 = false;
                    this.issubmit2 = true;
                } else {
                    this.ischonglu = false;
                    this.issubmit1 = true;
                    this.issubmit2 = false;
                }
            },
            addscore1() {
                if (this.score1 <= 9.5) {
                    this.score1 = this.score1 + 0.5;
                    if (this.score1 !== 10) {
                        this.abc1 = true;
                    } else {
                        this.abc1 = false;
                    }
                }
            }
            ,
            addscore2() {
                if (this.score2 <= 4.5) {
                    this.score2 = this.score2 + 0.5;
                    if (this.score2 !== 5) {
                        this.abc2 = true;
                    } else {
                        this.abc2 = false;
                    }
                }
            }
            ,
            addscore3() {
                if (this.score3 <= 2) {
                    this.score3 = this.score3 + 0.5;
                    if (this.score3 !== 2.5) {
                        this.abc3 = true;
                    } else {
                        this.abc3 = false;
                    }
                }
            }
            ,
            addscore4() {
                if (this.score4 <= 2) {
                    this.score4 = this.score4 + 0.5;
                    if (this.score4 !== 2.5) {
                        this.abc4 = true;
                    } else {
                        this.abc4 = false;
                    }
                }
            }
            ,
            addscore5() {
                if (this.score5 <= 2) {
                    this.score5 = this.score5 + 0.5;
                    if (this.score5 !== 2.5) {
                        this.abc5 = true;
                    } else {
                        this.abc5 = false;
                    }
                }
            }
            ,
            addscore6() {
                if (this.score6 <= 2) {
                    this.score6 = this.score6 + 0.5;
                    if (this.score6 !== 2.5) {
                        this.abc6 = true;
                    } else {
                        this.abc6 = false;
                    }
                }
            }
            ,
            addscore7() {
                if (this.score7 <= 2) {
                    this.score7 = this.score7 + 0.5;
                    if (this.score7 !== 2.5) {
                        this.abc7 = true;
                    } else {
                        this.abc7 = false;
                    }
                }
            }
            ,
            addscore8() {
                if (this.score8 <= 4.5) {
                    this.score8 = this.score8 + 0.5;
                    if (this.score8 !== 5) {
                        this.abc8 = true;
                    } else {
                        this.abc8 = false;
                    }
                }
            }
            ,
            minusscore1() {
                if (this.score1 >= 0.5) {
                    this.score1 = this.score1 - 0.5;
                    if (this.score1 !== 5) {
                        this.abc1 = true;
                    } else {
                        this.abc1 = false;
                    }
                }
            }
            ,
            minusscore2() {
                if (this.score2 >= 0.5) {
                    this.score2 = this.score2 - 0.5;
                    if (this.score2 !== 2.5) {
                        this.abc2 = true;
                    } else {
                        this.abc2 = false;
                    }
                }
            }
            ,
            minusscore3() {
                if (this.score3 >= 0.5) {
                    this.score3 = this.score3 - 0.5;
                    if (this.score3 !== 2.5) {
                        this.abc3 = true;
                    } else {
                        this.abc3 = false;
                    }
                }
            }
            ,
            minusscore4() {
                if (this.score4 >= 0.5) {
                    this.score4 = this.score4 - 0.5;
                    if (this.score4 !== 2.5) {
                        this.abc4 = true;
                    } else {
                        this.abc4 = false;
                    }
                }
            }
            ,
            minusscore5() {
                if (this.score5 >= 0.5) {
                    this.score5 = this.score5 - 0.5;
                    if (this.score5 !== 2.5) {
                        this.abc5 = true;
                    } else {
                        this.abc5 = false;
                    }
                }
            }
            ,
            minusscore6() {
                if (this.score6 >= 0.5) {
                    this.score6 = this.score6 - 0.5;
                    if (this.score6 !== 2.5) {
                        this.abc6 = true;
                    } else {
                        this.abc6 = false;
                    }
                }
            }
            ,
            minusscore7() {
                if (this.score7 >= 0.5) {
                    this.score7 = this.score7 - 0.5;
                    if (this.score7 !== 2.5) {
                        this.abc7 = true;
                    } else {
                        this.abc7 = false;
                    }
                }
            }
            ,
            minusscore8() {
                if (this.score8 >= 0.5) {
                    this.score8 = this.score8 - 0.5;
                    if (this.score8 !== 5) {
                        this.abc8 = true;
                    } else {
                        this.abc8 = false;
                    }
                }
            }
            ,
            changeitem: function () {
                this.showif = false;
                this.baif1 = false;
                this.baif2 = false;
                this.baif3 = false;
                this.bbab1 = false;
                this.bbab2 = false;
                this.bbab3 = false;
                var selectitem = document.getElementById("itemselect").value;
                this.itemselect = selectitem;
                if (selectitem == 1) {
                    this.score = 5;
                    this.lastscore = this.score;
                } else if (selectitem == 8) {
                    this.score = 5;
                    this.lastscore = this.score;
                } else if (selectitem > 1) {
                    this.score = 2.5;
                    this.lastscore = this.score;
                }
            }
            ,
            checkedif: function () {
                if (event.target.checked === true) {
                    this.mora = '上午';
                } else {
                    this.mora = '下午';
                }
            }
            ,
            bacolor11() {
                this.baif11 = !this.baif11;
                if (this.baif11===true){
                    if (this.score1>=0.5){
                        this.score1=this.score1-0.5;
                        this.baif11=true;
                        this.abc1=true;
                    }
                }else {
                    if (this.score1<=9.5){
                        this.score1=this.score1+0.5;
                        if (this.score1===10){
                            this.baif11=false;
                            this.abc1=false;
                        }
                    }
                }
            }
            ,
            bacolor12() {
                this.baif12 = !this.baif12;
                if (this.baif12===true){
                    if (this.score1>=0.5){
                        this.score1=this.score1-0.5;
                        this.baif12=true;
                        this.abc1=true;
                    }
                }else {
                    if (this.score1<=9.5){
                        this.score1=this.score1+0.5;
                        if (this.score1===10){
                            this.baif12=false;
                            this.abc1=false;
                        }
                    }
                }
            }
            ,
            bacolor13: function () {
                this.baif13 = !this.baif13;
                if (this.baif13===true){
                    if (this.score1>=0.5){
                        this.score1=this.score1-0.5;
                        this.baif13=true;
                        this.abc1=true;
                    }
                }else {
                    if (this.score1<=9.5){
                        this.score1=this.score1+0.5;
                        if (this.score1===10){
                            this.baif13=false;
                            this.abc1=false;
                        }
                    }
                }
            }
            ,
            bacolor21() {
                this.baif21 = !this.baif21;
                if (this.baif21===true){
                    if (this.score2>=0.5){
                        this.score2=this.score2-0.5;
                        this.baif21=true;
                        this.abc2=true;
                    }
                }else {
                    if (this.score2<=4.5){
                        this.score2=this.score2+0.5;
                        if (this.score2===5){
                            this.baif21=false;
                            this.abc2=false;
                        }
                    }
                }
            }
            ,
            bacolor22() {
                this.baif22 = !this.baif22;
                if (this.baif22===true){
                    if (this.score2>=0.5){
                        this.score2=this.score2-0.5;
                        this.baif22=true;
                        this.abc2=true;
                    }
                }else {
                    if (this.score2<=4.5){
                        this.score2=this.score2+0.5;
                        if (this.score2===5){
                            this.baif22=false;
                            this.abc2=false;
                        }
                    }
                }
            }
            ,
            bacolor23() {
                this.baif23 = !this.baif23;
                if (this.baif23===true){
                    if (this.score2>=0.5){
                        this.score2=this.score2-0.5;
                        this.baif23=true;
                        this.abc2=true;
                    }
                }else {
                    if (this.score2<=4.5){
                        this.score2=this.score2+0.5;
                        if (this.score2===5){
                            this.baif23=false;
                            this.abc2=false;
                        }
                    }
                }
            }
            ,
            bacolor31() {
                this.baif31 = !this.baif31;
                if (this.baif31===true){
                    if (this.score3>=0.5){
                        this.score3=this.score3-0.5;
                        this.baif31=true;
                        this.abc3=true;
                    }
                }else {
                    if (this.score3<=2){
                        this.score3=this.score3+0.5;
                        if (this.score3===2.5){
                            this.baif31=false;
                            this.abc3=false;
                        }
                    }
                }
            }
            ,
            bacolor32() {
                this.baif32 = !this.baif32;
                if (this.baif32===true){
                    if (this.score3>=0.5){
                        this.score3=this.score3-0.5;
                        this.baif32=true;
                        this.abc3=true;
                    }
                }else {
                    if (this.score3<=2){
                        this.score3=this.score3+0.5;
                        if (this.score3===2.5){
                            this.baif32=false;
                            this.abc3=false;
                        }
                    }
                }
            }
            ,
            bacolor33() {
                this.baif33 = !this.baif33;
                if (this.baif33===true){
                    if (this.score3>=0.5){
                        this.score3=this.score3-0.5;
                        this.baif33=true;
                        this.abc3=true;
                    }
                }else {
                    if (this.score3<=2){
                        this.score3=this.score3+0.5;
                        if (this.score3===2.5){
                            this.baif33=false;
                            this.abc3=false;
                        }
                    }
                }
            }
            ,
            bacolor41() {
                this.baif41 = !this.baif41;
                if (this.baif41===true){
                    if (this.score4>=0.5){
                        this.score4=this.score4-0.5;
                        this.baif41=true;
                        this.abc4=true;
                    }
                }else {
                    if (this.score4<=2){
                        this.score4=this.score4+0.5;
                        if (this.score4===2.5){
                            this.baif41=false;
                            this.abc4=false;
                        }
                    }
                }
            }
            ,
            bacolor42() {
                this.baif42 = !this.baif42;
                if (this.baif42===true){
                    if (this.score4>=0.5){
                        this.score4=this.score4-0.5;
                        this.baif42=true;
                        this.abc4=true;
                    }
                }else {
                    if (this.score4<=2){
                        this.score4=this.score4+0.5;
                        if (this.score4===2.5){
                            this.baif42=false;
                            this.abc4=false;
                        }
                    }
                }
            }
            ,
            bacolor43() {
                this.baif43 = !this.baif43;
                if (this.baif43===true){
                    if (this.score4>=0.5){
                        this.score4=this.score4-0.5;
                        this.baif43=true;
                        this.abc4=true;
                    }
                }else {
                    if (this.score4<=2){
                        this.score4=this.score4+0.5;
                        if (this.score4===2.5){
                            this.baif43=false;
                            this.abc4=false;
                        }
                    }
                }
            }
            ,
            bacolor51() {
                this.baif51 = !this.baif51;
                if (this.baif51===true){
                    if (this.score5>=0.5){
                        this.score5=this.score5-0.5;
                        this.baif51=true;
                        this.abc5=true;
                    }
                }else {
                    if (this.score5<=2){
                        this.score5=this.score5+0.5;
                        if (this.score5===2.5){
                            this.baif51=false;
                            this.abc5=false;
                        }
                    }
                }
            }
            ,
            bacolor52() {
                this.baif52 = !this.baif52;
                if (this.baif52===true){
                    if (this.score5>=0.5){
                        this.score5=this.score5-0.5;
                        this.baif52=true;
                        this.abc5=true;
                    }
                }else {
                    if (this.score5<=2){
                        this.score5=this.score5+0.5;
                        if (this.score5===2.5){
                            this.baif52=false;
                            this.abc5=false;
                        }
                    }
                }
            }
            ,
            bacolor53() {
                this.baif53 = !this.baif53;
                if (this.baif53===true){
                    if (this.score5>=0.5){
                        this.score5=this.score5-0.5;
                        this.baif53=true;
                        this.abc5=true;
                    }
                }else {
                    if (this.score5<=2){
                        this.score5=this.score5+0.5;
                        if (this.score5===2.5){
                            this.baif53=false;
                            this.abc5=false;
                        }
                    }
                }
            }
            ,
            bacolor61() {
                this.baif61 = !this.baif61;
                if (this.baif61===true){
                    if (this.score6>=0.5){
                        this.score6=this.score6-0.5;
                        this.baif61=true;
                        this.abc6=true;
                    }
                }else {
                    if (this.score6<=2){
                        this.score6=this.score6+0.5;
                        if (this.score6===2.5){
                            this.baif61=false;
                            this.abc6=false;
                        }
                    }
                }
            }
            ,
            bacolor62() {
                this.baif62 = !this.baif62;
                if (this.baif62===true){
                    if (this.score6>=0.5){
                        this.score6=this.score6-0.5;
                        this.baif62=true;
                        this.abc6=true;
                    }
                }else {
                    if (this.score6<=2){
                        this.score6=this.score6+0.5;
                        if (this.score6===2.5){
                            this.baif62=false;
                            this.abc6=false;
                        }
                    }
                }
            }
            ,
            bacolor63() {
                this.baif63 = !this.baif63;
                if (this.baif63===true){
                    if (this.score6>=0.5){
                        this.score6=this.score6-0.5;
                        this.baif63=true;
                        this.abc6=true;
                    }
                }else {
                    if (this.score6<=2){
                        this.score6=this.score6+0.5;
                        if (this.score6===2.5){
                            this.baif63=false;
                            this.abc6=false;
                        }
                    }
                }
            }
            ,
            bacolor71() {
                this.baif71 = !this.baif71;
                if (this.baif71===true){
                    if (this.score7>=0.5){
                        this.score7=this.score7-0.5;
                        this.baif71=true;
                        this.abc7=true;
                    }
                }else {
                    if (this.score7<=2){
                        this.score7=this.score7+0.5;
                        if (this.score7===2.5){
                            this.baif71=false;
                            this.abc7=false;
                        }
                    }
                }
            }
            ,
            bacolor72() {
                this.baif72 = !this.baif72;
                if (this.baif72===true){
                    if (this.score7>=0.5){
                        this.score7=this.score7-0.5;
                        this.baif72=true;
                        this.abc7=true;
                    }
                }else {
                    if (this.score7<=2){
                        this.score7=this.score7+0.5;
                        if (this.score7===2.5){
                            this.baif72=false;
                            this.abc7=false;
                        }
                    }
                }
            }
            ,
            bacolor73() {
                this.baif73 = !this.baif73;
                if (this.baif73===true){
                    if (this.score7>=0.5){
                        this.score7=this.score7-0.5;
                        this.baif73=true;
                        this.abc7=true;
                    }
                }else {
                    if (this.score7<=2){
                        this.score7=this.score7+0.5;
                        if (this.score7===2.5){
                            this.baif73=false;
                            this.abc7=false;
                        }
                    }
                }
            }
            ,
            bacolor81() {
                this.baif81 = !this.baif81;
            }
            ,
            bacolor82() {
                this.baif82 = !this.baif82;
            }
            ,
            bacolor83() {
                this.baif83 = !this.baif83;
            },
            showdetail1() {
                if (this.detail1 === true) {
                    this.detail1 = false;
                    document.getElementById("addcoment1").style.display = "block";
                    app.details[0].others = "返回";
                } else {
                    this.detail1 = true;
                    document.getElementById("addcoment1").style.display = "none";
                    app.details[0].others = "补充及上传照片";
                }
            },
            showdetail2() {
                if (this.detail2 === true) {
                    this.detail2 = false;
                    document.getElementById("addcoment2").style.display = "block";
                    app.details[1].others = "返回";
                } else {
                    this.detail2 = true;
                    document.getElementById("addcoment2").style.display = "none";
                    app.details[1].others = "补充及上传照片";
                }
            },
            showdetail3() {
                if (this.detail3 === true) {
                    this.detail3 = false;
                    document.getElementById("addcoment3").style.display = "block";
                    app.details[2].others = "返回";
                } else {
                    this.detail3 = true;
                    document.getElementById("addcoment3").style.display = "none";
                    app.details[2].others = "补充及上传照片";
                }
            },
            showdetail4() {
                if (this.detail4 === true) {
                    this.detail4 = false;
                    document.getElementById("addcoment4").style.display = "block";
                    app.details[3].others = "返回";
                } else {
                    this.detail4 = true;
                    document.getElementById("addcoment4").style.display = "none";
                    app.details[3].others = "补充及上传照片";
                }
            },
            showdetail5() {
                if (this.detail5 === true) {
                    this.detail5 = false;
                    document.getElementById("addcoment5").style.display = "block";
                    app.details[4].others = "返回";
                } else {
                    this.detail5 = true;
                    document.getElementById("addcoment5").style.display = "none";
                    app.details[4].others = "补充及上传照片";
                }
            },
            showdetail6() {
                if (this.detail6 === true) {
                    this.detail6 = false;
                    document.getElementById("addcoment6").style.display = "block";
                    app.details[5].others = "返回";
                } else {
                    this.detail6 = true;
                    document.getElementById("addcoment6").style.display = "none";
                    app.details[5].others = "补充及上传照片";
                }
            },
            showdetail7() {
                if (this.detail7 === true) {
                    this.detail7 = false;
                    document.getElementById("addcoment7").style.display = "block";
                    app.details[6].others = "返回";
                } else {
                    this.detail7 = true;
                    document.getElementById("addcoment7").style.display = "none";
                    app.details[6].others = "补充及上传照片";
                }
            },
        },
    })
;
if (hour < 12) {
    app.mora = '上午';
    document.getElementById("t").checked = true;
} else {
    app.mora = '下午';
    document.getElementById("t").checked = false;
}

function picture() {
    let reads = new FileReader();
    file = document.getElementById('imagesrc').files[0];
    reads.readAsDataURL(file);
}

function picture2() {
    let reads = new FileReader();
    file = document.getElementById('imagesrc2').files[0];
    reads.readAsDataURL(file);
}

function picture3() {
    let reads = new FileReader();
    file = document.getElementById('imagesrc3').files[0];
    reads.readAsDataURL(file);
}

function picture4() {
    let reads = new FileReader();
    file = document.getElementById('imagesrc4').files[0];
    reads.readAsDataURL(file);
}

function picture5() {
    let reads = new FileReader();
    file = document.getElementById('imagesrc5').files[0];
    reads.readAsDataURL(file);
}

function picture6() {
    let reads = new FileReader();
    file = document.getElementById('imagesrc6').files[0];
    reads.readAsDataURL(file);
}

function picture7() {
    let reads = new FileReader();
    file = document.getElementById('imagesrc7').files[0];
    reads.readAsDataURL(file);
}

function picture11() {
    let reads = new FileReader();
    file = document.getElementById('imagesrc11').files[0];
    reads.readAsDataURL(file);
}

function picture22() {
    let reads = new FileReader();
    file = document.getElementById('imagesrc22').files[0];
    reads.readAsDataURL(file);
}

function picture33() {
    let reads = new FileReader();
    file = document.getElementById('imagesrc33').files[0];
    reads.readAsDataURL(file);
}

function picture44() {
    let reads = new FileReader();
    file = document.getElementById('imagesrc44').files[0];
    reads.readAsDataURL(file);
}

function picture55() {
    let reads = new FileReader();
    file = document.getElementById('imagesrc55').files[0];
    reads.readAsDataURL(file);
}

function picture66() {
    let reads = new FileReader();
    file = document.getElementById('imagesrc66').files[0];
    reads.readAsDataURL(file);
}

function picture77() {
    let reads = new FileReader();
    file = document.getElementById('imagesrc77').files[0];
    reads.readAsDataURL(file);
}


//判断今日完成的班级并改变样式
function ifcomp() {
    $.ajax({
        url: "ifcomp",
        type: "post",
        success: function (d) {
            app.ifcomp=d;
            selclassid();
        }
    })
}

ifcomp();