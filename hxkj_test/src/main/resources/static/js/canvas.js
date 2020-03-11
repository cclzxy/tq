// 图表数据
var arrVisitors = [];

let canvas;
let context;
// 图表属性
let cWidth, cHeight, cMargin, cSpace;
let cMarginSpace, cMarginHeight;
// 条形图属性
let bWidth, bMargin, totalBars, maxDataValue;
let bWidthMargin;
// 条形动画
let ctr, numctr, speed;
// 轴属性
let totLabelsOnYAxis;

// 条形图构造函数
function barChart() {
    arrVisitors[0] = "一(1), " + app2.classscore[0];
    arrVisitors[1] = "一(2), " + app2.classscore[1];
    arrVisitors[2] = "一(3), " + app2.classscore[2];
    arrVisitors[3] = "一(4), " + app2.classscore[3];
    arrVisitors[4] = "一(5), " + app2.classscore[4];
    arrVisitors[5] = "一(6), " + app2.classscore[5];
    arrVisitors[6] = "二(1), " + app2.classscore[6];
    arrVisitors[7] = "二(2), " + app2.classscore[7];
    arrVisitors[8] = "二(3), " + app2.classscore[8];
    arrVisitors[9] = "二(4), " + app2.classscore[9];
    arrVisitors[10] = "二(5), " + app2.classscore[10];
    arrVisitors[11] = "二(6), " + app2.classscore[11];
    arrVisitors[12] = "三(1), " + app2.classscore[12];
    arrVisitors[13] = "三(2), " + app2.classscore[13];
    arrVisitors[14] = "三(3), " + app2.classscore[14];
    arrVisitors[15] = "三(4), " + app2.classscore[15];
    arrVisitors[16] = "三(5), " + app2.classscore[16];
    arrVisitors[17] = "三(6), " + app2.classscore[17];
    arrVisitors[18] = "四(1), " + app2.classscore[18];
    arrVisitors[19] = "四(2), " + app2.classscore[19];
    arrVisitors[20] = "四(3), " + app2.classscore[20];
    arrVisitors[21] = "四(4), " + app2.classscore[21];
    arrVisitors[22] = "四(5), " + app2.classscore[22];
    arrVisitors[23] = "四(6), " + app2.classscore[23];
    arrVisitors[24] = "五(1), " + app2.classscore[24];
    arrVisitors[25] = "五(2), " + app2.classscore[25];
    arrVisitors[26] = "五(3), " + app2.classscore[26];
    arrVisitors[27] = "五(4), " + app2.classscore[27];
    arrVisitors[28] = "五(5), " + app2.classscore[28];
    arrVisitors[29] = "五(6), " + app2.classscore[29];
    arrVisitors[30] = "六(1), " + app2.classscore[30];
    arrVisitors[31] = "六(2), " + app2.classscore[31];
    arrVisitors[32] = "六(3), " + app2.classscore[32];
    arrVisitors[33] = "六(4), " + app2.classscore[33];
    arrVisitors[34] = "六(5), " + app2.classscore[34];
    arrVisitors[35] = "六(6), " + app2.classscore[35];
    canvas = document.getElementById('bchart');
    if (canvas && canvas.getContext) {
        context = canvas.getContext('2d');
    }
    chartSettings();
    drawAxisLabelMarkers();
    drawChartWithAnimation();
}

// 初始化图表和条形图值
function chartSettings() {
    // 图表属性
    cMargin = 25;
    cSpace = 60;
    cHeight = canvas.height - 2 * cMargin - cSpace;
    cWidth = canvas.width - 2 * cMargin - cSpace;
    cMarginSpace = cMargin + cSpace;
    cMarginHeight = cMargin + cHeight;
    // 条形图属性
    bMargin = 15;
    totalBars = arrVisitors.length;
    bWidth = (cWidth / totalBars) - bMargin;
    //找到要在图表上绘制的最大值
    maxDataValue = 60;
    // for (let i = 0; i < totalBars; i++) {
    //     let arrVal = arrVisitors[i].split(",");
    //     let barVal = parseInt(arrVal[1]);
    //     if (parseInt(barVal) > parseInt(maxDataValue))
    //         maxDataValue = barVal;
    // }
    // alert(maxDataValue);
    totLabelsOnYAxis = 10;
    context.font = "13pt Garamond";

    // 初始化动画变量
    ctr = 0;
    numctr = 100;
    speed = 10;
}

// 绘制图表轴、标签和标记
function drawAxisLabelMarkers() {
    context.lineWidth = "2";//Y轴粗细
    // 绘制y轴
    drawAxis(cMarginSpace, cMarginHeight, cMarginSpace, cMargin);
    //绘制x轴
    drawAxis(cMarginSpace, cMarginHeight, cMarginSpace + cWidth, cMarginHeight);
    context.lineWidth = "1";//X轴粗细
    drawMarkers();
}

//绘制X和Y轴
function drawAxis(x, y, X, Y) {
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(X, Y);
    context.closePath();
    context.stroke();
}

//在X和Y轴上绘制图表标记
function drawMarkers() {
    let numMarkers = parseInt(maxDataValue / totLabelsOnYAxis);
    context.textAlign = "right";
    context.fillStyle = "#000";
    //y轴
    for (let i = 0; i <= totLabelsOnYAxis; i++) {
        markerVal = i * numMarkers;
        markerValHt = i * numMarkers * cHeight;
        let xMarkers = cMarginSpace - 5;
        let yMarkers = cMarginHeight - (markerValHt / maxDataValue);
        context.fillText(markerVal, xMarkers, yMarkers, cSpace);
    }
    //X轴
    context.textAlign = 'center';
    for (let i = 0; i < totalBars; i++) {
        arrval = arrVisitors[i].split(",");
        mname = arrval[0];
        mscore = arrval[1] ;
        markerXPos = cMarginSpace + bMargin
            + (i * (bWidth + bMargin)) + (bWidth / 2);
        markerYPos = cMarginHeight + 30; //X轴文字位置
        context.fillText(mname, markerXPos, markerYPos, bWidth);
        context.fillText(mscore, markerXPos, 50, bWidth);
    }
    context.save();
    //添加Y轴标题
    context.translate(cMargin + 10, cHeight / 2);
    context.rotate(Math.PI * -90 / 180);
    context.fillText('今日得分', 0, 0);
    context.restore();
    //添加X轴标题
    context.fillText('今日得分一览', cMarginSpace +
        (cWidth / 2), cMarginHeight + 80);
}

function drawChartWithAnimation() {
    //循环遍历总条并绘制
    for (let i = 0; i < totalBars; i++) {
        let arrVal = arrVisitors[i].split(",");
        bVal = parseFloat(arrVal[1]);//获取分数
        bHt = (bVal * cHeight / maxDataValue) / numctr * ctr;
        bX = cMarginSpace + (i * (bWidth + bMargin)) + bMargin;
        bY = cMarginHeight - bHt - 2;
        drawRectangle(bX, bY, bWidth, bHt, true);
    }
    // 超时运行并检查是否已达到条
    // 所需高度；如果不是，则继续增长
    if (ctr < numctr) {
        ctr = ctr + 1;
        setTimeout(arguments.callee, speed);
    }
}

function drawRectangle(x, y, w, h, fill) {
    context.beginPath();
    context.rect(x, y, w, h);
    context.closePath();
    context.stroke();

    if (fill) {
        let gradient = context.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, 'green');
        gradient.addColorStop(1, '#5cbf2a');
        context.fillStyle = gradient;
        context.strokeStyle = gradient;
        context.fill();
    }
}



