package com.example.hx_test.demo.Controller;

import com.example.hx_test.demo.Pojo.Points;
import com.example.hx_test.demo.Pojo.excel_test;
import com.example.hx_test.demo.Service.dpoints.ser_dpoints;
import com.example.hx_test.demo.Service.excel.ser_excel;
import org.apache.poi.hssf.usermodel.*;
import org.apache.poi.ss.usermodel.BorderStyle;
import org.apache.poi.ss.usermodel.HorizontalAlignment;
import org.apache.poi.ss.usermodel.VerticalAlignment;
import org.apache.poi.ss.util.CellRangeAddress;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@Controller
public class con_excl {
    @Autowired
    ser_excel serExcel;
    @Autowired
    ser_dpoints ser_dpoints;

    /**
     * Excel表格导出
     * row为行，col为列
     *
     * @param
     * @return
     * @throws IOException
     */
    @ResponseBody
    @RequestMapping(value = "/UserExcelDownloads", method = RequestMethod.GET)
    public Object downloadAllClassmate(HttpServletResponse response, String seldata, Integer selclass) throws IOException {
        String cla="";
        Integer classid=0;
        if (selclass==1){
            cla="一";
            classid=1;
        }else if (selclass==2){
            cla="二";
            classid=7;
        }else if (selclass==2){
            cla="三";
            classid=13;
        }else if (selclass==2){
            cla="四";
            classid=19;
        }else if (selclass==2){
            cla="五";
            classid=25;
        }else if (selclass==2){
            cla="六";
            classid=31;
        }

        HSSFWorkbook workbook = new HSSFWorkbook();
        HSSFSheet sheet = workbook.createSheet("信息表");
        sheet.addMergedRegion(new CellRangeAddress(0, 0, 1, 19));
        sheet.addMergedRegion(new CellRangeAddress(2, 2, 1, 19));
        sheet.addMergedRegion(new CellRangeAddress(3, 4, 1, 1));
        sheet.addMergedRegion(new CellRangeAddress(3, 3, 2, 3));
        sheet.addMergedRegion(new CellRangeAddress(3, 3, 4, 5));
        sheet.addMergedRegion(new CellRangeAddress(3, 3, 6, 7));
        sheet.addMergedRegion(new CellRangeAddress(3, 3, 8, 9));
        sheet.addMergedRegion(new CellRangeAddress(3, 3, 10, 11));
        sheet.addMergedRegion(new CellRangeAddress(3, 3, 12, 13));
        sheet.addMergedRegion(new CellRangeAddress(3, 3, 14, 15));
        sheet.addMergedRegion(new CellRangeAddress(3, 3, 16, 17));
        sheet.addMergedRegion(new CellRangeAddress(3, 3, 18, 19));
        sheet.setColumnWidth(0, 315);        //第一列宽度
        sheet.setColumnWidth(1, 3487);        //第二列宽度
        sheet.setColumnWidth(2, 1162);        //第三列宽度
        sheet.setColumnWidth(3, 1162);        //第四列宽度
        sheet.setColumnWidth(4, 1472);
        sheet.setColumnWidth(5, 1472);
        sheet.setColumnWidth(6, 1472);
        sheet.setColumnWidth(7, 1472);
        sheet.setColumnWidth(8, 1472);
        sheet.setColumnWidth(9, 1472);
        sheet.setColumnWidth(10, 1472);        //L
        sheet.setColumnWidth(11, 1472);
        sheet.setColumnWidth(12, 1472);
        sheet.setColumnWidth(13, 1472);
        sheet.setColumnWidth(14, 1200);
        sheet.setColumnWidth(15, 1200);
        sheet.setColumnWidth(16, 1200);         //R
        sheet.setColumnWidth(17, 1200);
        sheet.setColumnWidth(18, 3022);
        sheet.setColumnWidth(19, 3022);

        String fileName = "Tq_Comment" + ".xls";                       //设置要导出的文件的名字

        HSSFRow row0 = sheet.createRow(0);                 //创建第一行
        row0.setHeight((short) 810);                               //设置第一行高度
        HSSFCell cell0_1 = row0.createCell(1);
        cell0_1.setCellValue("土桥中学包干区卫生检查得分表");

        HSSFRow row1 = sheet.createRow(1);                 //创建第二行
        row1.setHeight((short) 300);                               //设置第二行高度

        HSSFRow row2 = sheet.createRow(2);                 //创建第三行
        row2.setHeight((short) 645);                                //设置第三行高度
        HSSFCell cell2_1 = row2.createCell(1);
        if (selclass==1){
            cell2_1.setCellValue("检查员：  年级: 一年级           姓名_____________                          检查日期:  "+seldata);
        }else if (selclass==2){
            cell2_1.setCellValue("检查员：  年级: 二年级           姓名_____________                          检查日期:  "+seldata);
        }else if (selclass==3){
            cell2_1.setCellValue("检查员：  年级: 三年级           姓名_____________                          检查日期:  "+seldata);
        }else if (selclass==4){
            cell2_1.setCellValue("检查员：  年级: 四年级           姓名_____________                          检查日期:  "+seldata);
        }else if (selclass==5){
            cell2_1.setCellValue("检查员：  年级: 五年级           姓名_____________                          检查日期:  "+seldata);
        }else if (selclass==6){
            cell2_1.setCellValue("检查员：  年级: 六年级           姓名_____________                          检查日期:  "+seldata);
        }


        HSSFRow row3 = sheet.createRow(3);                 //创建第四行
        row3.setHeight((short) 820);                               //设置第四行高度820

        HSSFCell cell3_1 = row3.createCell(1);               //B4
        HSSFCell cell3_2 = row3.createCell(2);               //CD4
        cell3_2.setCellValue("包干区20'");
        HSSFCell cell3_3 = row3.createCell(4);               //EF4
        cell3_3.setCellValue("室内卫生10'");
        HSSFCell cell3_4 = row3.createCell(6);               //GH4
        cell3_4.setCellValue("工具摆放5'");
        HSSFCell cell3_5 = row3.createCell(8);               //IJ4
        cell3_5.setCellValue("走廊5'");
        HSSFCell cell3_6 = row3.createCell(10);              //KL4
        cell3_6.setCellValue("窗台5'");
        HSSFCell cell3_7 = row3.createCell(12);              //MN4
        cell3_7.setCellValue("瓷砖门窗5'");
        HSSFCell cell3_8 = row3.createCell(14);              //OP4
        cell3_8.setCellValue("多媒体讲台5'");
        HSSFCell cell3_9 = row3.createCell(16);              //QR4
        cell3_9.setCellValue("自行车摆放10'");
        HSSFCell cell3_10 = row3.createCell(18);             //ST4
        cell3_10.setCellValue("扣分说明");
        HSSFCell cell3_11 = row3.createCell(3);              //
        HSSFCell cell3_12 = row3.createCell(5);              //
        HSSFCell cell3_13 = row3.createCell(7);              //
        HSSFCell cell3_14 = row3.createCell(9);              //
        HSSFCell cell3_15 = row3.createCell(11);              //
        HSSFCell cell3_16 = row3.createCell(13);              //
        HSSFCell cell3_17 = row3.createCell(15);              //
        HSSFCell cell3_18 = row3.createCell(17);              //
        HSSFCell cell3_19 = row3.createCell(19);              //

        HSSFRow row4 = sheet.createRow(4);                 //创建第五行
        row4.setHeight((short) 810);                               //设置第五行高度
        HSSFCell cell4_1 = row4.createCell(1);

        HSSFCell cell4_2 = row4.createCell(2);
        cell4_2.setCellValue("上午5'");
        HSSFCell cell4_3 = row4.createCell(4);
        cell4_3.setCellValue("上午2.5'");
        HSSFCell cell4_4 = row4.createCell(6);
        cell4_4.setCellValue("上午2.5'");
        HSSFCell cell4_5 = row4.createCell(8);
        cell4_5.setCellValue("上午2.5'");
        HSSFCell cell4_6 = row4.createCell(10);
        cell4_6.setCellValue("上午2.5'");
        HSSFCell cell4_7 = row4.createCell(12);
        cell4_7.setCellValue("上午2.5'");
        HSSFCell cell4_8 = row4.createCell(14);
        cell4_8.setCellValue("上午2.5'");
        HSSFCell cell4_9 = row4.createCell(16);
        cell4_9.setCellValue("上午5'");
        HSSFCell cell4_10 = row4.createCell(18);
        cell4_10.setCellValue("上     午");
        HSSFCell cell4_11 = row4.createCell(3);
        HSSFCell cell4_12 = row4.createCell(5);
        HSSFCell cell4_13 = row4.createCell(7);
        HSSFCell cell4_14 = row4.createCell(9);
        HSSFCell cell4_15 = row4.createCell(11);
        HSSFCell cell4_16 = row4.createCell(13);
        HSSFCell cell4_17 = row4.createCell(15);
        HSSFCell cell4_18 = row4.createCell(17);
        HSSFCell cell4_19 = row4.createCell(19);
        cell4_11.setCellValue("下午5'");
        cell4_12.setCellValue("下午2.5'");
        cell4_13.setCellValue("下午2.5'");
        cell4_14.setCellValue("下午2.5'");
        cell4_15.setCellValue("下午2.5'");
        cell4_16.setCellValue("下午2.5'");
        cell4_17.setCellValue("下午2.5'");
        cell4_18.setCellValue("下午5'");
        cell4_19.setCellValue("下     午");


        HSSFRow row5 = sheet.createRow(5);                 //创建第六行
        row5.setHeight((short) 810);                               //设置第六行高度
        HSSFCell cell5_1 = row5.createCell(1);
        cell5_1.setCellValue("初 "+cla+"(1)班");


        HSSFRow row6 = sheet.createRow(6);                 //创建第七行
        row6.setHeight((short) 810);                               //设置第七行高度
        HSSFCell cell6_1 = row6.createCell(1);
        cell6_1.setCellValue("初 "+cla+"(2)班");


        HSSFRow row7 = sheet.createRow(7);                 //创建第八行
        row7.setHeight((short) 810);                               //设置第八行高度
        HSSFCell cell7_1 = row7.createCell(1);
        cell7_1.setCellValue("初 "+cla+"(3)班");

        HSSFRow row8 = sheet.createRow(8);                 //创建第九行
        row8.setHeight((short) 810);                               //设置第九行高度
        HSSFCell cell8_1 = row8.createCell(1);
        cell8_1.setCellValue("初 "+cla+"(4)班");

        HSSFRow row9 = sheet.createRow(9);                 //创建第十行
        row9.setHeight((short) 810);                               //设置第十行高度
        HSSFCell cell9_1 = row9.createCell(1);
        cell9_1.setCellValue("初 "+cla+"(5)班");

        HSSFFont hssfFont0 = workbook.createFont();
        HSSFFont hssfFont2 = workbook.createFont();
        HSSFFont hssfFont = workbook.createFont();
        //字体粗体显示
        hssfFont0.setBold(true);
        hssfFont0.setFontName("宋体");
        hssfFont0.setFontHeightInPoints((short) 18);// 字体大小
        hssfFont2.setFontName("宋体");
        hssfFont2.setFontHeightInPoints((short) 12);// 字体大小
        hssfFont.setFontName("宋体");
        hssfFont.setFontHeightInPoints((short) 12);// 字体大小
        //设置样式
        HSSFCellStyle cellStylehead1 = workbook.createCellStyle();
        HSSFCellStyle cellStylehead2 = workbook.createCellStyle();
        HSSFCellStyle cellStylehead = workbook.createCellStyle();
        cellStylehead.setBorderBottom(BorderStyle.THIN); //下边框
        cellStylehead.setBorderLeft(BorderStyle.THIN);//左边框
        cellStylehead.setBorderTop(BorderStyle.THIN);//上边框
        cellStylehead.setBorderRight(BorderStyle.THIN);//右边框
        cellStylehead.setWrapText(true);//自动换行
        cellStylehead1.setFont(hssfFont0);
        cellStylehead2.setFont(hssfFont2);
        cellStylehead.setFont(hssfFont);
        //设置居中
        cellStylehead1.setAlignment(HorizontalAlignment.CENTER);//水平居中
        cellStylehead1.setVerticalAlignment(VerticalAlignment.CENTER);//垂直居中
        cellStylehead2.setVerticalAlignment(VerticalAlignment.CENTER);//垂直居中
        cellStylehead.setAlignment(HorizontalAlignment.CENTER);//水平居中
        cellStylehead.setVerticalAlignment(VerticalAlignment.CENTER);//垂直居中
        cell0_1.setCellStyle(cellStylehead1);
        cell2_1.setCellStyle(cellStylehead2);
        cell3_2.setCellStyle(cellStylehead);
        cell3_3.setCellStyle(cellStylehead);
        cell3_4.setCellStyle(cellStylehead);
        cell3_5.setCellStyle(cellStylehead);
        cell3_6.setCellStyle(cellStylehead);
        cell3_7.setCellStyle(cellStylehead);
        cell3_8.setCellStyle(cellStylehead);
        cell3_9.setCellStyle(cellStylehead);
        cell3_10.setCellStyle(cellStylehead);
        cell3_11.setCellStyle(cellStylehead);
        cell3_12.setCellStyle(cellStylehead);
        cell3_13.setCellStyle(cellStylehead);
        cell3_14.setCellStyle(cellStylehead);
        cell3_15.setCellStyle(cellStylehead);
        cell3_16.setCellStyle(cellStylehead);
        cell3_17.setCellStyle(cellStylehead);
        cell3_18.setCellStyle(cellStylehead);
        cell3_19.setCellStyle(cellStylehead);
        cell4_2.setCellStyle(cellStylehead);
        cell4_3.setCellStyle(cellStylehead);
        cell4_4.setCellStyle(cellStylehead);
        cell4_5.setCellStyle(cellStylehead);
        cell4_6.setCellStyle(cellStylehead);
        cell4_7.setCellStyle(cellStylehead);
        cell4_8.setCellStyle(cellStylehead);
        cell4_9.setCellStyle(cellStylehead);
        cell4_10.setCellStyle(cellStylehead);
        cell4_11.setCellStyle(cellStylehead);
        cell4_12.setCellStyle(cellStylehead);
        cell4_13.setCellStyle(cellStylehead);
        cell4_14.setCellStyle(cellStylehead);
        cell4_15.setCellStyle(cellStylehead);
        cell4_16.setCellStyle(cellStylehead);
        cell4_17.setCellStyle(cellStylehead);
        cell4_18.setCellStyle(cellStylehead);
        cell4_19.setCellStyle(cellStylehead);
        cell5_1.setCellStyle(cellStylehead);
        cell6_1.setCellStyle(cellStylehead);
        cell7_1.setCellStyle(cellStylehead);
        cell8_1.setCellStyle(cellStylehead);
        cell9_1.setCellStyle(cellStylehead);
        cell3_1.setCellStyle(cellStylehead);
        cell4_1.setCellStyle(cellStylehead);


        String details="";
        //一班
        HSSFCell cell5_2 = row5.createCell(2);
        cell5_2.setCellStyle(cellStylehead);
        Integer count5_2 = ser_dpoints.findcdacount(classid, seldata, 1, 1);
        if (count5_2 == 0) {
            cell5_2.setCellValue("-");
        } else if (count5_2 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid, seldata, 1, 1);
            cell5_2.setCellValue(points.getItemscore());
            details=points.getDetails()+details;
        } else {
            cell5_2.setCellValue(" ");
        }
       System.out.println(details);

        HSSFCell cell5_3 = row5.createCell(3);
        cell5_3.setCellStyle(cellStylehead);
        Integer count5_3 = ser_dpoints.findcdacount(classid, seldata, 1, 0);
        if (count5_3 == 0) {
            cell5_3.setCellValue("-");
        } else if (count5_3 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid, seldata, 1, 0);
            cell5_3.setCellValue(points.getItemscore());
        } else {
            cell5_3.setCellValue(" ");
        }

        HSSFCell cell5_4 = row5.createCell(4);
        cell5_4.setCellStyle(cellStylehead);
        Integer count5_4 = ser_dpoints.findcdacount(classid, seldata, 2, 1);
        if (count5_4 == 0) {
            cell5_4.setCellValue("-");
        } else if (count5_4 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid, seldata, 2, 1);
            cell5_4.setCellValue(points.getItemscore());
        } else {
            cell5_4.setCellValue(" ");
        }

        HSSFCell cell5_5 = row5.createCell(5);
        cell5_5.setCellStyle(cellStylehead);
        Integer count5_5 = ser_dpoints.findcdacount(classid, seldata, 2, 0);
        if (count5_5 == 0) {
            cell5_5.setCellValue("-");
        } else if (count5_5 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid, seldata, 2, 0);
            cell5_5.setCellValue(points.getItemscore());
        } else {
            cell5_5.setCellValue(" ");
        }

        HSSFCell cell5_6 = row5.createCell(6);
        cell5_6.setCellStyle(cellStylehead);
        Integer count5_6 = ser_dpoints.findcdacount(classid, seldata, 3, 1);
        if (count5_6 == 0) {
            cell5_6.setCellValue("-");
        } else if (count5_6 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid, seldata, 3, 1);
            cell5_6.setCellValue(points.getItemscore());
        } else {
            cell5_6.setCellValue(" ");
        }

        HSSFCell cell5_7 = row5.createCell(7);
        cell5_7.setCellStyle(cellStylehead);
        Integer count5_7 = ser_dpoints.findcdacount(classid, seldata, 3, 0);
        if (count5_7 == 0) {
            cell5_7.setCellValue("-");
        } else if (count5_7 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid, seldata, 3, 0);
            cell5_7.setCellValue(points.getItemscore());
        } else {
            cell5_7.setCellValue(" ");
        }

        HSSFCell cell5_8 = row5.createCell(8);
        cell5_8.setCellStyle(cellStylehead);
        Integer count5_8 = ser_dpoints.findcdacount(classid, seldata, 4, 1);
        if (count5_8 == 0) {
            cell5_8.setCellValue("-");
        } else if (count5_8 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid, seldata, 4, 1);
            cell5_8.setCellValue(points.getItemscore());
        } else {
            cell5_8.setCellValue(" ");
        }

        HSSFCell cell5_9 = row5.createCell(9);
        cell5_9.setCellStyle(cellStylehead);
        Integer count5_9 = ser_dpoints.findcdacount(classid, seldata, 4, 0);
        if (count5_9 == 0) {
            cell5_9.setCellValue("-");
        } else if (count5_9 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid, seldata, 4, 0);
            cell5_9.setCellValue(points.getItemscore());
        } else {
            cell5_9.setCellValue(" ");
        }

        HSSFCell cell5_10 = row5.createCell(10);
        cell5_10.setCellStyle(cellStylehead);
        Integer count5_10 = ser_dpoints.findcdacount(classid, seldata, 5, 1);
        if (count5_10 == 0) {
            cell5_10.setCellValue("-");
        } else if (count5_10 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid, seldata, 5, 1);
            cell5_10.setCellValue(points.getItemscore());
        } else {
            cell5_10.setCellValue(" ");
        }

        HSSFCell cell5_11 = row5.createCell(11);
        cell5_11.setCellStyle(cellStylehead);
        Integer count5_11 = ser_dpoints.findcdacount(classid, seldata, 5, 0);
        if (count5_11 == 0) {
            cell5_11.setCellValue("-");
        } else if (count5_11 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid, seldata, 5, 0);
            cell5_11.setCellValue(points.getItemscore());
        } else {
            cell5_11.setCellValue(" ");
        }

        HSSFCell cell5_12 = row5.createCell(12);
        cell5_12.setCellStyle(cellStylehead);
        Integer count5_12 = ser_dpoints.findcdacount(classid, seldata, 6, 1);
        if (count5_12 == 0) {
            cell5_12.setCellValue("-");
        } else if (count5_12 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid, seldata, 6, 1);
            cell5_12.setCellValue(points.getItemscore());
        } else {
            cell5_12.setCellValue(" ");
        }

        HSSFCell cell5_13 = row5.createCell(13);
        cell5_13.setCellStyle(cellStylehead);
        Integer count5_13 = ser_dpoints.findcdacount(classid, seldata, 6, 0);
        if (count5_13 == 0) {
            cell5_13.setCellValue("-");
        } else if (count5_13 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid, seldata, 6, 0);
            cell5_13.setCellValue(points.getItemscore());
        } else {
            cell5_13.setCellValue(" ");
        }

        HSSFCell cell5_14 = row5.createCell(14);
        cell5_14.setCellStyle(cellStylehead);
        Integer count5_14 = ser_dpoints.findcdacount(classid, seldata, 7, 1);
        if (count5_14 == 0) {
            cell5_14.setCellValue("-");
        } else if (count5_14 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid, seldata, 7, 1);
            cell5_14.setCellValue(points.getItemscore());
        } else {
            cell5_14.setCellValue(" ");
        }

        HSSFCell cell5_15 = row5.createCell(15);
        cell5_15.setCellStyle(cellStylehead);
        Integer count5_15 = ser_dpoints.findcdacount(classid, seldata, 7, 0);
        if (count5_15 == 0) {
            cell5_15.setCellValue("-");
        } else if (count5_15 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid, seldata, 7, 0);
            cell5_15.setCellValue(points.getItemscore());
        } else {
            cell5_15.setCellValue(" ");
        }

        HSSFCell cell5_16 = row5.createCell(16);
        cell5_16.setCellStyle(cellStylehead);
        Integer count5_16 = ser_dpoints.findcdacount(classid, seldata, 8, 1);
        if (count5_16 == 0) {
            cell5_16.setCellValue("-");
        } else if (count5_16 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid, seldata, 8, 1);
            cell5_16.setCellValue(points.getItemscore());
        } else {
            cell5_16.setCellValue(" ");
        }

        HSSFCell cell5_17 = row5.createCell(17);
        cell5_17.setCellStyle(cellStylehead);
        Integer count5_17 = ser_dpoints.findcdacount(classid, seldata, 8, 0);
        if (count5_17 == 0) {
            cell5_17.setCellValue("-");
        } else if (count5_17 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid, seldata, 8, 0);
            cell5_17.setCellValue(points.getItemscore());
        } else {
            cell5_17.setCellValue(" ");
        }

        HSSFCell cell5_18 = row5.createCell(18);
        cell5_18.setCellStyle(cellStylehead);
        cell5_18.setCellValue("");

        HSSFCell cell5_19 = row5.createCell(19);
        cell5_19.setCellStyle(cellStylehead);
        cell5_19.setCellValue("");


        //二班
        HSSFCell cell6_2 = row6.createCell(2);
        cell6_2.setCellStyle(cellStylehead);
        Integer count6_2 = ser_dpoints.findcdacount(classid+1, seldata, 1, 1);
        if (count6_2 == 0) {
            cell6_2.setCellValue("-");
        } else if (count6_2 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+1, seldata, 1, 1);
            cell6_2.setCellValue(points.getItemscore());
        } else {
            cell6_2.setCellValue(" ");
        }

        HSSFCell cell6_3 = row6.createCell(3);
        cell6_3.setCellStyle(cellStylehead);
        Integer count6_3 = ser_dpoints.findcdacount(classid+1, seldata, 1, 0);
        if (count6_3 == 0) {
            cell6_3.setCellValue("-");
        } else if (count6_3 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+1, seldata, 1, 0);
            cell6_3.setCellValue(points.getItemscore());
        } else {
            cell6_3.setCellValue(" ");
        }

        HSSFCell cell6_4 = row6.createCell(4);
        cell6_4.setCellStyle(cellStylehead);
        Integer count6_4 = ser_dpoints.findcdacount(classid+1, seldata, 2, 1);
        if (count6_4 == 0) {
            cell6_4.setCellValue("-");
        } else if (count6_4 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+1, seldata, 2, 1);
            cell6_4.setCellValue(points.getItemscore());
        } else {
            cell6_4.setCellValue(" ");
        }

        HSSFCell cell6_5 = row6.createCell(5);
        cell6_5.setCellStyle(cellStylehead);
        Integer count6_5 = ser_dpoints.findcdacount(classid+1, seldata, 2, 0);
        if (count6_5 == 0) {
            cell6_5.setCellValue("-");
        } else if (count6_5 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+1, seldata, 2, 0);
            cell6_5.setCellValue(points.getItemscore());
        } else {
            cell6_5.setCellValue(" ");
        }

        HSSFCell cell6_6 = row6.createCell(6);
        cell6_6.setCellStyle(cellStylehead);
        Integer count6_6 = ser_dpoints.findcdacount(classid+1, seldata, 3, 1);
        if (count6_6 == 0) {
            cell6_6.setCellValue("-");
        } else if (count6_6 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+1, seldata, 3, 1);
            cell6_6.setCellValue(points.getItemscore());
        } else {
            cell6_6.setCellValue(" ");
        }

        HSSFCell cell6_7 = row6.createCell(7);
        cell6_7.setCellStyle(cellStylehead);
        Integer count6_7 = ser_dpoints.findcdacount(classid+1, seldata, 3, 0);
        if (count6_7 == 0) {
            cell6_7.setCellValue("-");
        } else if (count6_7 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+1, seldata, 3, 0);
            cell6_7.setCellValue(points.getItemscore());
        } else {
            cell6_7.setCellValue(" ");
        }

        HSSFCell cell6_8 = row6.createCell(8);
        cell6_8.setCellStyle(cellStylehead);
        Integer count6_8 = ser_dpoints.findcdacount(classid+1, seldata, 4, 1);
        if (count6_8 == 0) {
            cell6_8.setCellValue("-");
        } else if (count6_8 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+1, seldata, 4, 1);
            cell6_8.setCellValue(points.getItemscore());
        } else {
            cell6_8.setCellValue(" ");
        }

        HSSFCell cell6_9 = row6.createCell(9);
        cell6_9.setCellStyle(cellStylehead);
        Integer count6_9 = ser_dpoints.findcdacount(classid+1, seldata, 4, 0);
        if (count6_9 == 0) {
            cell6_9.setCellValue("-");
        } else if (count6_9 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+1, seldata, 4, 0);
            cell6_9.setCellValue(points.getItemscore());
        } else {
            cell6_9.setCellValue(" ");
        }

        HSSFCell cell6_10 = row6.createCell(10);
        cell6_10.setCellStyle(cellStylehead);
        Integer count6_10 = ser_dpoints.findcdacount(classid+1, seldata, 5, 1);
        if (count6_10 == 0) {
            cell6_10.setCellValue("-");
        } else if (count6_10 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+1, seldata, 5, 1);
            cell6_10.setCellValue(points.getItemscore());
        } else {
            cell6_10.setCellValue(" ");
        }

        HSSFCell cell6_11 = row6.createCell(11);
        cell6_11.setCellStyle(cellStylehead);
        Integer count6_11 = ser_dpoints.findcdacount(classid+1, seldata, 5, 0);
        if (count6_11 == 0) {
            cell6_11.setCellValue("-");
        } else if (count6_11 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+1, seldata, 5, 0);
            cell6_11.setCellValue(points.getItemscore());
        } else {
            cell6_11.setCellValue(" ");
        }

        HSSFCell cell6_12 = row6.createCell(12);
        cell6_12.setCellStyle(cellStylehead);
        Integer count6_12 = ser_dpoints.findcdacount(classid+1, seldata, 6, 1);
        if (count6_12 == 0) {
            cell6_12.setCellValue("-");
        } else if (count6_12 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+1, seldata, 6, 1);
            cell6_12.setCellValue(points.getItemscore());
        } else {
            cell6_12.setCellValue(" ");
        }

        HSSFCell cell6_13 = row6.createCell(13);
        cell6_13.setCellStyle(cellStylehead);
        Integer count6_13 = ser_dpoints.findcdacount(classid+1, seldata, 6, 0);
        if (count6_13 == 0) {
            cell6_13.setCellValue("-");
        } else if (count6_13 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+1, seldata, 6, 0);
            cell6_13.setCellValue(points.getItemscore());
        } else {
            cell6_13.setCellValue(" ");
        }

        HSSFCell cell6_14 = row6.createCell(14);
        cell6_14.setCellStyle(cellStylehead);
        Integer count6_14 = ser_dpoints.findcdacount(classid+1, seldata, 7, 1);
        if (count6_14 == 0) {
            cell6_14.setCellValue("-");
        } else if (count6_14 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+1, seldata, 7, 1);
            cell6_14.setCellValue(points.getItemscore());
        } else {
            cell6_14.setCellValue(" ");
        }

        HSSFCell cell6_15 = row6.createCell(15);
        cell6_15.setCellStyle(cellStylehead);
        Integer count6_15 = ser_dpoints.findcdacount(classid+1, seldata, 7, 0);
        if (count6_15 == 0) {
            cell6_15.setCellValue("-");
        } else if (count6_15 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+1, seldata, 7, 0);
            cell6_15.setCellValue(points.getItemscore());
        } else {
            cell6_15.setCellValue(" ");
        }

        HSSFCell cell6_16 = row6.createCell(16);
        cell6_16.setCellStyle(cellStylehead);
        Integer count6_16 = ser_dpoints.findcdacount(classid+1, seldata, 8, 1);
        if (count6_16 == 0) {
            cell6_16.setCellValue("-");
        } else if (count6_16 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+1, seldata, 8, 1);
            cell6_16.setCellValue(points.getItemscore());
        } else {
            cell6_16.setCellValue(" ");
        }

        HSSFCell cell6_17 = row6.createCell(17);
        cell6_17.setCellStyle(cellStylehead);
        Integer count6_17 = ser_dpoints.findcdacount(classid+1, seldata, 8, 0);
        if (count6_17 == 0) {
            cell6_17.setCellValue("-");
        } else if (count6_17 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+1, seldata, 8, 0);
            cell6_17.setCellValue(points.getItemscore());
        } else {
            cell6_17.setCellValue(" ");
        }

        HSSFCell cell6_18 = row6.createCell(18);
        cell6_18.setCellStyle(cellStylehead);
        cell6_18.setCellValue("");

        HSSFCell cell6_19 = row6.createCell(19);
        cell6_19.setCellStyle(cellStylehead);
        cell6_19.setCellValue("");


        //三班
        HSSFCell cell7_2 = row7.createCell(2);
        cell7_2.setCellStyle(cellStylehead);
        Integer count7_2 = ser_dpoints.findcdacount(classid+2, seldata, 1, 1);
        if (count7_2 == 0) {
            cell7_2.setCellValue("-");
        } else if (count7_2 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+2, seldata, 1, 1);
            cell7_2.setCellValue(points.getItemscore());
        } else {
            cell7_2.setCellValue(" ");
        }

        HSSFCell cell7_3 = row7.createCell(3);
        cell7_3.setCellStyle(cellStylehead);
        Integer count7_3 = ser_dpoints.findcdacount(classid+2, seldata, 1, 0);
        if (count7_3 == 0) {
            cell7_3.setCellValue("-");
        } else if (count7_3 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+2, seldata, 1, 0);
            cell7_3.setCellValue(points.getItemscore());
        } else {
            cell7_3.setCellValue(" ");
        }

        HSSFCell cell7_4 = row7.createCell(4);
        cell7_4.setCellStyle(cellStylehead);
        Integer count7_4 = ser_dpoints.findcdacount(classid+2, seldata, 2, 1);
        if (count7_4 == 0) {
            cell7_4.setCellValue("-");
        } else if (count7_4 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+2, seldata, 2, 1);
            cell7_4.setCellValue(points.getItemscore());
        } else {
            cell7_4.setCellValue(" ");
        }

        HSSFCell cell7_5 = row7.createCell(5);
        cell7_5.setCellStyle(cellStylehead);
        Integer count7_5 = ser_dpoints.findcdacount(classid+2, seldata, 2, 0);
        if (count7_5 == 0) {
            cell7_5.setCellValue("-");
        } else if (count7_5 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+2, seldata, 2, 0);
            cell7_5.setCellValue(points.getItemscore());
        } else {
            cell7_5.setCellValue(" ");
        }

        HSSFCell cell7_6 = row7.createCell(6);
        cell7_6.setCellStyle(cellStylehead);
        Integer count7_6 = ser_dpoints.findcdacount(classid+2, seldata, 3, 1);
        if (count7_6 == 0) {
            cell7_6.setCellValue("-");
        } else if (count7_6 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+2, seldata, 3, 1);
            cell7_6.setCellValue(points.getItemscore());
        } else {
            cell7_6.setCellValue(" ");
        }

        HSSFCell cell7_7 = row7.createCell(7);
        cell7_7.setCellStyle(cellStylehead);
        Integer count7_7 = ser_dpoints.findcdacount(classid+2, seldata, 3, 0);
        if (count7_7 == 0) {
            cell7_7.setCellValue("-");
        } else if (count7_7 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+2, seldata, 3, 0);
            cell7_7.setCellValue(points.getItemscore());
        } else {
            cell7_7.setCellValue(" ");
        }

        HSSFCell cell7_8 = row7.createCell(8);
        cell7_8.setCellStyle(cellStylehead);
        Integer count7_8 = ser_dpoints.findcdacount(classid+2, seldata, 4, 1);
        if (count7_8 == 0) {
            cell7_8.setCellValue("-");
        } else if (count7_8 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+2, seldata, 4, 1);
            cell7_8.setCellValue(points.getItemscore());
        } else {
            cell7_8.setCellValue(" ");
        }

        HSSFCell cell7_9 = row7.createCell(9);
        cell7_9.setCellStyle(cellStylehead);
        Integer count7_9 = ser_dpoints.findcdacount(classid+2, seldata, 4, 0);
        if (count7_9 == 0) {
            cell7_9.setCellValue("-");
        } else if (count7_9 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+2, seldata, 4, 0);
            cell7_9.setCellValue(points.getItemscore());
        } else {
            cell7_9.setCellValue(" ");
        }

        HSSFCell cell7_10 = row7.createCell(10);
        cell7_10.setCellStyle(cellStylehead);
        Integer count7_10 = ser_dpoints.findcdacount(classid+2, seldata, 5, 1);
        if (count7_10 == 0) {
            cell7_10.setCellValue("-");
        } else if (count7_10 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+2, seldata, 5, 1);
            cell7_10.setCellValue(points.getItemscore());
        } else {
            cell7_10.setCellValue(" ");
        }

        HSSFCell cell7_11 = row7.createCell(11);
        cell7_11.setCellStyle(cellStylehead);
        Integer count7_11 = ser_dpoints.findcdacount(classid+2, seldata, 5, 0);
        if (count7_11 == 0) {
            cell7_11.setCellValue("-");
        } else if (count7_11 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+2, seldata, 5, 0);
            cell7_11.setCellValue(points.getItemscore());
        } else {
            cell7_11.setCellValue(" ");
        }

        HSSFCell cell7_12 = row7.createCell(12);
        cell7_12.setCellStyle(cellStylehead);
        Integer count7_12 = ser_dpoints.findcdacount(classid+2, seldata, 6, 1);
        if (count7_12 == 0) {
            cell7_12.setCellValue("-");
        } else if (count7_12 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+2, seldata, 6, 1);
            cell7_12.setCellValue(points.getItemscore());
        } else {
            cell7_12.setCellValue(" ");
        }

        HSSFCell cell7_13 = row7.createCell(13);
        cell7_13.setCellStyle(cellStylehead);
        Integer count7_13 = ser_dpoints.findcdacount(classid+2, seldata, 6, 0);
        if (count7_13 == 0) {
            cell7_13.setCellValue("-");
        } else if (count7_13 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+2, seldata, 6, 0);
            cell7_13.setCellValue(points.getItemscore());
        } else {
            cell7_13.setCellValue(" ");
        }

        HSSFCell cell7_14 = row7.createCell(14);
        cell7_14.setCellStyle(cellStylehead);
        Integer count7_14 = ser_dpoints.findcdacount(classid+2, seldata, 7, 1);
        if (count7_14 == 0) {
            cell7_14.setCellValue("-");
        } else if (count7_14 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+2, seldata, 7, 1);
            cell7_14.setCellValue(points.getItemscore());
        } else {
            cell7_14.setCellValue(" ");
        }

        HSSFCell cell7_15 = row7.createCell(15);
        cell7_15.setCellStyle(cellStylehead);
        Integer count7_15 = ser_dpoints.findcdacount(classid+2, seldata, 7, 0);
        if (count7_15 == 0) {
            cell7_15.setCellValue("-");
        } else if (count7_15 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+2, seldata, 7, 0);
            cell7_15.setCellValue(points.getItemscore());
        } else {
            cell7_15.setCellValue(" ");
        }

        HSSFCell cell7_16 = row7.createCell(16);
        cell7_16.setCellStyle(cellStylehead);
        Integer count7_16 = ser_dpoints.findcdacount(classid+2, seldata, 8, 1);
        if (count7_16 == 0) {
            cell7_16.setCellValue("-");
        } else if (count7_16 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+2, seldata, 8, 1);
            cell7_16.setCellValue(points.getItemscore());
        } else {
            cell7_16.setCellValue(" ");
        }

        HSSFCell cell7_17 = row7.createCell(17);
        cell7_17.setCellStyle(cellStylehead);
        Integer count7_17 = ser_dpoints.findcdacount(classid+2, seldata, 8, 0);
        if (count7_17 == 0) {
            cell7_17.setCellValue("-");
        } else if (count7_17 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+2, seldata, 8, 0);
            cell7_17.setCellValue(points.getItemscore());
        } else {
            cell7_17.setCellValue(" ");
        }

        HSSFCell cell7_18 = row7.createCell(18);
        cell7_18.setCellStyle(cellStylehead);
        cell7_18.setCellValue("");

        HSSFCell cell7_19 = row7.createCell(19);
        cell7_19.setCellStyle(cellStylehead);
        cell7_19.setCellValue("");


        //四班
        HSSFCell cell8_2 = row8.createCell(2);
        cell8_2.setCellStyle(cellStylehead);
        Integer count8_2 = ser_dpoints.findcdacount(classid+3, seldata, 1, 1);
        if (count8_2 == 0) {
            cell8_2.setCellValue("-");
        } else if (count8_2 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+3, seldata, 1, 1);
            cell8_2.setCellValue(points.getItemscore());
        } else {
            cell8_2.setCellValue(" ");
        }

        HSSFCell cell8_3 = row8.createCell(3);
        cell8_3.setCellStyle(cellStylehead);
        Integer count8_3 = ser_dpoints.findcdacount(classid+3, seldata, 1, 0);
        if (count8_3 == 0) {
            cell8_3.setCellValue("-");
        } else if (count8_3 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+3, seldata, 1, 0);
            cell8_3.setCellValue(points.getItemscore());
        } else {
            cell8_3.setCellValue(" ");
        }

        HSSFCell cell8_4 = row8.createCell(4);
        cell8_4.setCellStyle(cellStylehead);
        Integer count8_4 = ser_dpoints.findcdacount(classid+3, seldata, 2, 1);
        if (count8_4 == 0) {
            cell8_4.setCellValue("-");
        } else if (count8_4 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+3, seldata, 2, 1);
            cell8_4.setCellValue(points.getItemscore());
        } else {
            cell8_4.setCellValue(" ");
        }

        HSSFCell cell8_5 = row8.createCell(5);
        cell8_5.setCellStyle(cellStylehead);
        Integer count8_5 = ser_dpoints.findcdacount(classid+3, seldata, 2, 0);
        if (count8_5 == 0) {
            cell8_5.setCellValue("-");
        } else if (count8_5 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+3, seldata, 2, 0);
            cell8_5.setCellValue(points.getItemscore());
        } else {
            cell8_5.setCellValue(" ");
        }

        HSSFCell cell8_6 = row8.createCell(6);
        cell8_6.setCellStyle(cellStylehead);
        Integer count8_6 = ser_dpoints.findcdacount(classid+3, seldata, 3, 1);
        if (count8_6 == 0) {
            cell8_6.setCellValue("-");
        } else if (count8_6 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+3, seldata, 3, 1);
            cell8_6.setCellValue(points.getItemscore());
        } else {
            cell8_6.setCellValue(" ");
        }

        HSSFCell cell8_7 = row8.createCell(7);
        cell8_7.setCellStyle(cellStylehead);
        Integer count8_7 = ser_dpoints.findcdacount(classid+3, seldata, 3, 0);
        if (count8_7 == 0) {
            cell8_7.setCellValue("-");
        } else if (count8_7== 1) {
            Points points = ser_dpoints.findaclassanddate(classid+3, seldata, 3, 0);
            cell8_7.setCellValue(points.getItemscore());
        } else {
            cell8_7.setCellValue(" ");
        }

        HSSFCell cell8_8 = row8.createCell(8);
        cell8_8.setCellStyle(cellStylehead);
        Integer count8_8 = ser_dpoints.findcdacount(classid+3, seldata, 4, 1);
        if (count8_8 == 0) {
            cell8_8.setCellValue("-");
        } else if (count8_8 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+3, seldata, 4, 1);
            cell8_8.setCellValue(points.getItemscore());
        } else {
            cell8_8.setCellValue(" ");
        }

        HSSFCell cell8_9 = row8.createCell(9);
        cell8_9.setCellStyle(cellStylehead);
        Integer count8_9 = ser_dpoints.findcdacount(classid+3, seldata, 4, 0);
        if (count8_9 == 0) {
            cell8_9.setCellValue("-");
        } else if (count8_9 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+3, seldata, 4, 0);
            cell8_9.setCellValue(points.getItemscore());
        } else {
            cell8_9.setCellValue(" ");
        }

        HSSFCell cell8_10 = row8.createCell(10);
        cell8_10.setCellStyle(cellStylehead);
        Integer count8_10 = ser_dpoints.findcdacount(classid+3, seldata, 5, 1);
        if (count8_10 == 0) {
            cell8_10.setCellValue("-");
        } else if (count8_10 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+3, seldata, 5, 1);
            cell8_10.setCellValue(points.getItemscore());
        } else {
            cell8_10.setCellValue(" ");
        }

        HSSFCell cell8_11 = row8.createCell(11);
        cell8_11.setCellStyle(cellStylehead);
        Integer count8_11 = ser_dpoints.findcdacount(classid+3, seldata, 5, 0);
        if (count8_11 == 0) {
            cell8_11.setCellValue("-");
        } else if (count8_11 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+3, seldata, 5, 0);
            cell8_11.setCellValue(points.getItemscore());
        } else {
            cell8_11.setCellValue(" ");
        }

        HSSFCell cell8_12 = row8.createCell(12);
        cell8_12.setCellStyle(cellStylehead);
        Integer count8_12 = ser_dpoints.findcdacount(classid+3, seldata, 6, 1);
        if (count8_12 == 0) {
            cell8_12.setCellValue("-");
        } else if (count8_12 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+3, seldata, 6, 1);
            cell8_12.setCellValue(points.getItemscore());
        } else {
            cell8_12.setCellValue(" ");
        }

        HSSFCell cell8_13 = row8.createCell(13);
        cell8_13.setCellStyle(cellStylehead);
        Integer count8_13 = ser_dpoints.findcdacount(classid+3, seldata, 6, 0);
        if (count8_13 == 0) {
            cell8_13.setCellValue("-");
        } else if (count8_13 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+3, seldata, 6, 0);
            cell8_13.setCellValue(points.getItemscore());
        } else {
            cell8_13.setCellValue(" ");
        }

        HSSFCell cell8_14 = row8.createCell(14);
        cell8_14.setCellStyle(cellStylehead);
        Integer count8_14 = ser_dpoints.findcdacount(classid+3, seldata, 7, 1);
        if (count8_14 == 0) {
            cell8_14.setCellValue("-");
        } else if (count8_14 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+3, seldata, 7, 1);
            cell8_14.setCellValue(points.getItemscore());
        } else {
            cell8_14.setCellValue(" ");
        }

        HSSFCell cell8_15 = row8.createCell(15);
        cell8_15.setCellStyle(cellStylehead);
        Integer count8_15 = ser_dpoints.findcdacount(classid+3, seldata, 7, 0);
        if (count8_15 == 0) {
            cell8_15.setCellValue("-");
        } else if (count8_15 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+3, seldata, 7, 0);
            cell8_15.setCellValue(points.getItemscore());
        } else {
            cell8_15.setCellValue(" ");
        }

        HSSFCell cell8_16 = row8.createCell(16);
        cell8_16.setCellStyle(cellStylehead);
        Integer count8_16 = ser_dpoints.findcdacount(classid+3, seldata, 8, 1);
        if (count8_16 == 0) {
            cell8_16.setCellValue("-");
        } else if (count8_16 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+3, seldata, 8, 1);
            cell8_16.setCellValue(points.getItemscore());
        } else {
            cell8_16.setCellValue(" ");
        }

        HSSFCell cell8_17 = row8.createCell(17);
        cell8_17.setCellStyle(cellStylehead);
        Integer count8_17 = ser_dpoints.findcdacount(classid+3, seldata, 8, 0);
        if (count8_17 == 0) {
            cell8_17.setCellValue("-");
        } else if (count8_17 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+3, seldata, 8, 0);
            cell8_17.setCellValue(points.getItemscore());
        } else {
            cell8_17.setCellValue(" ");
        }

        HSSFCell cell8_18 = row8.createCell(18);
        cell8_18.setCellStyle(cellStylehead);
        cell8_18.setCellValue("");

        HSSFCell cell8_19 = row8.createCell(19);
        cell8_19.setCellStyle(cellStylehead);
        cell8_19.setCellValue("");


        //五班
        HSSFCell cell9_2 = row9.createCell(2);
        cell9_2.setCellStyle(cellStylehead);
        Integer count9_2 = ser_dpoints.findcdacount(classid+4, seldata, 1, 1);
        if (count9_2 == 0) {
            cell9_2.setCellValue("-");
        } else if (count9_2 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+4, seldata, 1, 1);
            cell9_2.setCellValue(points.getItemscore());
        } else {
            cell9_2.setCellValue(" ");
        }

        HSSFCell cell9_3 = row9.createCell(3);
        cell9_3.setCellStyle(cellStylehead);
        Integer count9_3 = ser_dpoints.findcdacount(classid+4, seldata, 1, 0);
        if (count9_3 == 0) {
            cell9_3.setCellValue("-");
        } else if (count9_3 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+4, seldata, 1, 0);
            cell9_3.setCellValue(points.getItemscore());
        } else {
            cell9_3.setCellValue(" ");
        }

        HSSFCell cell9_4 = row9.createCell(4);
        cell9_4.setCellStyle(cellStylehead);
        Integer count9_4 = ser_dpoints.findcdacount(classid+4, seldata, 2, 1);
        if (count9_4 == 0) {
            cell9_4.setCellValue("-");
        } else if (count9_4 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+4, seldata, 2, 1);
            cell9_4.setCellValue(points.getItemscore());
        } else {
            cell9_4.setCellValue(" ");
        }

        HSSFCell cell9_5 = row9.createCell(5);
        cell9_5.setCellStyle(cellStylehead);
        Integer count9_5 = ser_dpoints.findcdacount(classid+4, seldata, 2, 0);
        if (count9_5 == 0) {
            cell9_5.setCellValue("-");
        } else if (count9_5 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+4, seldata, 2, 0);
            cell9_5.setCellValue(points.getItemscore());
        } else {
            cell9_5.setCellValue(" ");
        }

        HSSFCell cell9_6 = row9.createCell(6);
        cell9_6.setCellStyle(cellStylehead);
        Integer count9_6 = ser_dpoints.findcdacount(classid+4, seldata, 3, 1);
        if (count9_6 == 0) {
            cell9_6.setCellValue("-");
        } else if (count9_6 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+4, seldata, 3, 1);
            cell9_6.setCellValue(points.getItemscore());
        } else {
            cell9_6.setCellValue(" ");
        }

        HSSFCell cell9_7 = row9.createCell(7);
        cell9_7.setCellStyle(cellStylehead);
        Integer count9_7 = ser_dpoints.findcdacount(classid+4, seldata, 3, 0);
        if (count9_7 == 0) {
            cell9_7.setCellValue("-");
        } else if (count9_7 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+4, seldata, 3, 0);
            cell9_7.setCellValue(points.getItemscore());
        } else {
            cell9_7.setCellValue(" ");
        }

        HSSFCell cell9_8 = row9.createCell(8);
        cell9_8.setCellStyle(cellStylehead);
        Integer count9_8 = ser_dpoints.findcdacount(classid+4, seldata, 4, 1);
        if (count9_8 == 0) {
            cell9_8.setCellValue("-");
        } else if (count9_8 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+4, seldata, 4, 1);
            cell9_8.setCellValue(points.getItemscore());
        } else {
            cell9_8.setCellValue(" ");
        }

        HSSFCell cell9_9 = row9.createCell(9);
        cell9_9.setCellStyle(cellStylehead);
        Integer count9_9 = ser_dpoints.findcdacount(classid+4, seldata, 4, 0);
        if (count9_9 == 0) {
            cell9_9.setCellValue("-");
        } else if (count9_9 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+4, seldata, 4, 0);
            cell9_9.setCellValue(points.getItemscore());
        } else {
            cell9_9.setCellValue(" ");
        }

        HSSFCell cell9_10 = row9.createCell(10);
        cell9_10.setCellStyle(cellStylehead);
        Integer count9_10 = ser_dpoints.findcdacount(classid+4, seldata, 5, 1);
        if (count9_10 == 0) {
            cell9_10.setCellValue("-");
        } else if (count9_10 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+4, seldata, 5, 1);
            cell9_10.setCellValue(points.getItemscore());
        } else {
            cell9_10.setCellValue(" ");
        }

        HSSFCell cell9_11 = row9.createCell(11);
        cell9_11.setCellStyle(cellStylehead);
        Integer count9_11 = ser_dpoints.findcdacount(classid+4, seldata, 5, 0);
        if (count9_11 == 0) {
            cell9_11.setCellValue("-");
        } else if (count9_11 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+4, seldata, 5, 0);
            cell9_11.setCellValue(points.getItemscore());
        } else {
            cell9_11.setCellValue(" ");
        }

        HSSFCell cell9_12 = row9.createCell(12);
        cell9_12.setCellStyle(cellStylehead);
        Integer count9_12 = ser_dpoints.findcdacount(classid+4, seldata, 6, 1);
        if (count9_12 == 0) {
            cell9_12.setCellValue("-");
        } else if (count9_12 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+4, seldata, 6, 1);
            cell9_12.setCellValue(points.getItemscore());
        } else {
            cell9_12.setCellValue(" ");
        }

        HSSFCell cell9_13 = row9.createCell(13);
        cell9_13.setCellStyle(cellStylehead);
        Integer count9_13 = ser_dpoints.findcdacount(classid+4, seldata, 6, 0);
        if (count9_13 == 0) {
            cell9_13.setCellValue("-");
        } else if (count9_13 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+4, seldata, 6, 0);
            cell9_13.setCellValue(points.getItemscore());
        } else {
            cell9_13.setCellValue(" ");
        }

        HSSFCell cell9_14 = row9.createCell(14);
        cell9_14.setCellStyle(cellStylehead);
        Integer count9_14 = ser_dpoints.findcdacount(classid+4, seldata, 7, 1);
        if (count9_14 == 0) {
            cell9_14.setCellValue("-");
        } else if (count9_14 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+4, seldata, 7, 1);
            cell9_14.setCellValue(points.getItemscore());
        } else {
            cell9_14.setCellValue(" ");
        }

        HSSFCell cell9_15 = row9.createCell(15);
        cell9_15.setCellStyle(cellStylehead);
        Integer count9_15 = ser_dpoints.findcdacount(classid+4, seldata, 7, 0);
        if (count9_15 == 0) {
            cell9_15.setCellValue("-");
        } else if (count9_15 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+4, seldata, 7, 0);
            cell9_15.setCellValue(points.getItemscore());
        } else {
            cell9_15.setCellValue(" ");
        }

        HSSFCell cell9_16 = row9.createCell(16);
        cell9_16.setCellStyle(cellStylehead);
        Integer count9_16 = ser_dpoints.findcdacount(classid+4, seldata, 8, 1);
        if (count9_16 == 0) {
            cell9_16.setCellValue("-");
        } else if (count9_16 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+4, seldata, 8, 1);
            cell9_16.setCellValue(points.getItemscore());
        } else {
            cell9_16.setCellValue(" ");
        }

        HSSFCell cell9_17 = row9.createCell(17);
        cell9_17.setCellStyle(cellStylehead);
        Integer count9_17 = ser_dpoints.findcdacount(classid+4, seldata, 8, 0);
        if (count9_17 == 0) {
            cell9_17.setCellValue("-");
        } else if (count9_17 == 1) {
            Points points = ser_dpoints.findaclassanddate(classid+4, seldata, 8, 0);
            cell9_17.setCellValue(points.getItemscore());
        } else {
            cell9_17.setCellValue(" ");
        }

        HSSFCell cell9_18 = row9.createCell(18);
        cell9_18.setCellStyle(cellStylehead);
        cell9_18.setCellValue("");

        HSSFCell cell9_19 = row9.createCell(19);
        cell9_19.setCellStyle(cellStylehead);
        cell9_19.setCellValue("");


        response.setContentType("application/x-xls");
        response.setHeader("Content-disposition", "attachment;filename=" + fileName);
        response.flushBuffer();
        workbook.write(response.getOutputStream());
        response.getOutputStream().close();
        return null;
    }

}
