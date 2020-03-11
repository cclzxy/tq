package com.example.hx_test.demo.Controller;

import java.io.File;
import java.io.FileOutputStream;
import java.util.Date;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.example.hx_test.demo.Pojo.Points;
import com.example.hx_test.demo.Service.dpoints.ser_dpoints;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.criteria.CriteriaBuilder;
import javax.servlet.http.HttpServletRequest;
import java.text.SimpleDateFormat;
import java.util.List;

@Controller
public class con_dpoints {
    @Autowired
    ser_dpoints ser_dpoints;

    /**
     * 所有点评数据
     */
    @ResponseBody
    @RequestMapping("/allpoints")
    public JSONArray findallpoints() {
        List<Points> pointsList = ser_dpoints.findalldpoints();
        String jsonA = com.alibaba.fastjson.JSONArray.toJSONString(pointsList);
        return JSONArray.parseArray(jsonA);
    }

    /**
     * 根据classid查询
     */
    @ResponseBody
    @RequestMapping("/findbyclassid")
    public JSONArray findbyclassid(int classid) {
        List<Points> pointsList = ser_dpoints.findbyclassid(classid);
        String jsonA = com.alibaba.fastjson.JSONArray.toJSONString(pointsList);
        return JSONArray.parseArray(jsonA);
    }

    /**
     * 根据classid和当天日期查询
     */
    @ResponseBody
    @RequestMapping("/findbyclassid2")
    public JSONArray findbyclassid2(int classid) {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");//设置日期格式
        List<Points> pointsList = ser_dpoints.findbyclassid2(classid, df.format(new Date()));
        String jsonA = com.alibaba.fastjson.JSONArray.toJSONString(pointsList);
        return JSONArray.parseArray(jsonA);
    }

    /**
     * 今日数据
     */
    @ResponseBody
    @RequestMapping("/findnowdate")
    public JSONArray findnowdate() {
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");//设置日期格式
        List<Points> pointsList = ser_dpoints.findnowdate(df.format(new Date()));
        String jsonA = com.alibaba.fastjson.JSONArray.toJSONString(pointsList);
        return JSONArray.parseArray(jsonA);
    }

    /**
     * 今日所有班级总分
     *
     * @return
     */
    @ResponseBody
    @RequestMapping("/findnowcanvs")
    public double[] findnowcanvs() {
        double[] arr1 = new double[36];
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");//设置日期格式
        for (int i = 1; i <= 36; i++) {
            Integer count = ser_dpoints.findnowcanvas(df.format(new Date()), i);
            if (count > 0) {
                arr1[i - 1] = ser_dpoints.findnowclassscore(df.format(new Date()), i);
            } else {
                arr1[i - 1] = 0;
            }
        }
        return arr1;
    }
    /**
     * 页面加载时执行班级今日是否完成判断，返回数组，改变样式
     */
    @ResponseBody
    @RequestMapping("/ifcomp")
    public Integer[] ifcomp() {
        Integer[] ifcomp = new Integer[36];
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");//设置日期格式
        for (Integer a=0;a<=35;a++){
            if (ser_dpoints.ifcomp(a+1,df.format(new Date()))==14){//上午下午都评过
                ifcomp[a]=2;
            }else if (ser_dpoints.ifcomp(a+1,df.format(new Date()))==7){//只评半天的
                ifcomp[a]=1;
            }else {
                ifcomp[a]=0;
            }
        }
        return ifcomp;
    }
    /**
     * 每周数据统计
     */
    @ResponseBody
    @RequestMapping("/every")
    public double[] every() {
        double[] weeks = new double[756];
        Integer m,n;//m年级数,n周数
        for (int i = 1; i < 757; i++) {
            //解决第36个年级特殊算法
            if (i % 36 == 0) {
                m = 36;
            } else {
                m = i % 36;
            }
            //解决35和36除数结果加1的特殊算法
            if (i % 35 == 0 || i % 36 == 0) {
                if (i % 35 == 0) {
                    n = i / 36 + 1;
                } else {
                    n = (1 + i) / 36;
                }
            } else {
                if ((i + 1) % 36 == 0) {
                    n = (1 + i) / 36;
                } else {
                    n = 1 + (1 + i) / 36;
                }
            }
//            System.out.println("年级数:" + m + "   周数:" + n + "  i=" + i);
            if (ser_dpoints.everyweekpointscount(n, m) == 0) {
//                System.out.println(weeks[i - 1]);
                weeks[i - 1] = 0;
            } else {
                weeks[i - 1] = ser_dpoints.everyweekpoints(n, m);
//                System.out.println(weeks[i]);
            }

        }
        return weeks;
    }

    /**
     * 根据itemidid查询
     */
    @ResponseBody
    @RequestMapping("/findbyitemid")
    public JSONArray findbyitemid(int itemid) {
        List<Points> pointsList = ser_dpoints.findbyitemid(itemid);
        String jsonA = com.alibaba.fastjson.JSONArray.toJSONString(pointsList);
        return JSONArray.parseArray(jsonA);
    }

    /**
     * 今日点评
     *
     * @return
     */
    @ResponseBody
    @RequestMapping("/commentup")
    public String toupcomment(String imagesrc, String imagesrc2, String imagesrc3, String imagesrc4, String imagesrc5, String imagesrc6, String imagesrc7, int getclass, String dayif, String nowdate, double score1, double score2, double score3, double score4, double score5, double score6, double score7, String detail1, String detail2, String detail3, String detail4, String detail5, String detail6, String detail7) {
        int noon = 0;
        int aftern = 0;
        if (dayif.equals("上午")) {
            noon = 1;
            aftern = 0;
        } else if (dayif.equals("下午")) {
            aftern = 1;
            noon = 0;
        }
        int a = ser_dpoints.upcomment(imagesrc, getclass, 1, score1, nowdate, detail1, noon, aftern);
        int b = ser_dpoints.upcomment(imagesrc2, getclass, 2, score2, nowdate, detail2, noon, aftern);
        int c = ser_dpoints.upcomment(imagesrc3, getclass, 3, score3, nowdate, detail3, noon, aftern);
        int d = ser_dpoints.upcomment(imagesrc4, getclass, 4, score4, nowdate, detail4, noon, aftern);
        int e = ser_dpoints.upcomment(imagesrc5, getclass, 5, score5, nowdate, detail5, noon, aftern);
        int f = ser_dpoints.upcomment(imagesrc6, getclass, 6, score6, nowdate, detail6, noon, aftern);
        int g = ser_dpoints.upcomment(imagesrc7, getclass, 7, score7, nowdate, detail7, noon, aftern);
        return "已提交";
    }

    /**
     * 图片上传
     *
     * @param file
     * @return
     */
    @ResponseBody
    @RequestMapping("/upimage")
    public String upimage(HttpServletRequest request, @RequestParam("file") MultipartFile file) {
        String fileName = request.getParameter("imgname") + request.getParameter("lastname");
        String filePath = "C:\\images\\";
        System.out.println(filePath+fileName);
        File targetFile = new File(filePath);
        if (!targetFile.exists()) {
            targetFile.mkdirs();
        }
        FileOutputStream out = null;
        try {
            out = new FileOutputStream(filePath + fileName);

            out.write(file.getBytes());
            out.flush();
            out.close();
        } catch (Exception e) {
            e.printStackTrace();
            return "图片上传失败";
        }
        return "图片成功上传!";
    }

    /**
     * 选择班级返回信息
     *
     * @return
     */
    @ResponseBody
    @RequestMapping("/selclassid")
    public JSONObject selcalssid(Integer selclassid, String dayif, String nowdate) {
        Integer a = 0;
        double one = 0;
        double two = 0;
        double three = 0;
        double four = 0;
        double five = 0;
        double six = 0;
        double seven = 0;
        String de1 = "满分";
        String de2 = "满分";
        String de3 = "满分";
        String de4 = "满分";
        String de5 = "满分";
        String de6 = "满分";
        String de7 = "满分";
        if (dayif.equals("上午")) {
            a = 1;
        }
        Integer one1 = ser_dpoints.findaclassanddatecount(selclassid, nowdate, 1, a);
        Integer two2 = ser_dpoints.findaclassanddatecount(selclassid, nowdate, 2, a);
        Integer three3 = ser_dpoints.findaclassanddatecount(selclassid, nowdate, 3, a);
        Integer four4 = ser_dpoints.findaclassanddatecount(selclassid, nowdate, 4, a);
        Integer five5 = ser_dpoints.findaclassanddatecount(selclassid, nowdate, 5, a);
        Integer six6 = ser_dpoints.findaclassanddatecount(selclassid, nowdate, 6, a);
        Integer seven7 = ser_dpoints.findaclassanddatecount(selclassid, nowdate, 7, a);
        if (one1 > 0) {
            Points points1 = ser_dpoints.findaclassanddate(selclassid, nowdate, 1, a);
            one = points1.getItemscore();
            if (points1.getDetails().equals("")) {
                if (points1.getItemscore() == 10) {
                    de1 = "满分";
                } else {
                    de1 = "扣分未作说明";
                }
            } else {
                de1 = points1.getDetails();
            }

        }
        if (two2 > 0) {
            Points points2 = ser_dpoints.findaclassanddate(selclassid, nowdate, 2, a);
            two = points2.getItemscore();
            if (points2.getDetails().equals("")) {
                if (points2.getItemscore() == 5) {
                    de2 = "满分";
                } else {
                    de2 = "扣分未作说明";
                }
            } else {
                de2 = points2.getDetails();
            }
        }
        if (three3 > 0) {
            Points points3 = ser_dpoints.findaclassanddate(selclassid, nowdate, 3, a);
            three = points3.getItemscore();
            if (points3.getDetails().equals("")) {
                if (points3.getItemscore() == 2.5) {
                    de3 = "满分";
                } else {
                    de3 = "扣分但未作说明";
                }
            } else {
                de3 = points3.getDetails();
            }
        }
        if (four4 > 0) {
            Points points4 = ser_dpoints.findaclassanddate(selclassid, nowdate, 4, a);
            four = points4.getItemscore();
            if (points4.getDetails().equals("")) {
                if (points4.getItemscore() == 2.5) {
                    de4 = "满分";
                } else {
                    de4 = "扣分但未作说明";
                }
            } else {
                de4 = points4.getDetails();
            }
        }
        if (five5 > 0) {
            Points points5 = ser_dpoints.findaclassanddate(selclassid, nowdate, 5, a);
            five = points5.getItemscore();
            if (points5.getDetails().equals("")) {
                if (points5.getItemscore() == 2.5) {
                    de5 = "满分";
                } else {
                    de5 = "扣分但未作说明";
                }
            } else {
                de5 = points5.getDetails();
            }
        }
        if (six6 > 0) {
            Points points6 = ser_dpoints.findaclassanddate(selclassid, nowdate, 6, a);
            six = points6.getItemscore();
            if (points6.getDetails().equals("")) {
                if (points6.getItemscore() == 2.5) {
                    de6 = "满分";
                } else {
                    de6 = "扣分但未作说明";
                }
            } else {
                de6 = points6.getDetails();
            }
        }
        if (seven7 > 0) {
            Points points7 = ser_dpoints.findaclassanddate(selclassid, nowdate, 7, a);
            seven = points7.getItemscore();
            if (points7.getDetails().equals("")) {
                if (points7.getItemscore() == 2.5) {
                    de7 = "满分";
                } else {
                    de7 = "扣分但未作说明";
                }
            } else {
                de7 = points7.getDetails();
            }
        }
        String msg = "{points1:" + one + ",points2:" + two + ",points3:" + three + ",points4:" + four + ",points5:" + five + ",points6:" + six + ",points7:" + seven + ",isping:1,de1:'" + de1 + "',de2:'" + de2 + "',de3:'" + de3 + "',de4:'" + de4 + "',de5:'" + de5 + "',de6:'" + de6 + "',de7:'" + de7 + "'}";
        String msg2 = "{points1:" + 10 + ",points2:" + 5 + ",points3:" + 2.5 + ",points4:" + 2.5 + ",points5:" + 2.5 + ",points6:" + 2.5 + ",points7:" + 2.5 + ",isping:0}";
        JSONObject jsonObject = JSONObject.parseObject(msg);
        JSONObject jsonObject2 = JSONObject.parseObject(msg2);
        if (one1 == 0 && two2 == 0 && three3 == 0 && four4 == 0 && five5 == 0 && six6 == 0 && seven7 == 0) {
            return jsonObject2;
        } else {
            return jsonObject;
        }
    }

    /**
     * 今日点评判断是否已录入
     *
     * @return
     */
    @ResponseBody
    @RequestMapping("/commentif")
    public String commentif(int getclass, String nowdate, String dayif) {
        Integer noon = 1;
        if (dayif.equals("下午")) {
            noon = 0;
        }
        int a = ser_dpoints.commentif(getclass, nowdate, noon);
        if (a == 0) {
            return "未录入";
        } else {
            return "已录入";
        }
    }

    /**
     * 今日点评修改
     *
     * @return
     */
    @ResponseBody
    @RequestMapping("/updatecomment")
    public String updatecomment(int getclass, String nowdate, String dayif, double score, String detail, String imagesrc, Integer itemid) {
        Integer noon = 1;
        Integer aftern = 1;
        if (dayif.equals("下午")) {
            noon = 0;
            aftern = 1;
        } else {
            noon = 1;
            aftern = 0;
        }
        int a = ser_dpoints.updcomment(imagesrc, getclass, itemid, score, nowdate, detail, noon, aftern);
        return "a";
    }


}
