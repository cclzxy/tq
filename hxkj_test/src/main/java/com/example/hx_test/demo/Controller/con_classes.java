package com.example.hx_test.demo.Controller;

import com.alibaba.fastjson.JSONArray;
import com.example.hx_test.demo.Pojo.Classes;
import com.example.hx_test.demo.Service.classes.ser_classes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * author ccl
 */
@Controller
public class con_classes {
    @Autowired
    ser_classes ser_classes;
    /**
     * Ajax请求数据，返回类型为JSONArray对象数组
     * @return
     */
    @ResponseBody
    @RequestMapping("/FindAllclass")
    public JSONArray findallclass(){
        List<Classes> classes=ser_classes.findallclasses();
        String jsonA = com.alibaba.fastjson.JSONArray.toJSONString(classes);
        return JSONArray.parseArray(jsonA);
    }

    /***
     * 进入数据管理
     * @return
     */
    @RequestMapping("/alldatas")
    public String toalldatas(){
        return "alldatas";
    }
    /***
     *
     * @return
     */
    @RequestMapping("/a")
    public String tpp(){
        return "bag";
    }
    /***
     * 点评
     * @return
     */
    @RequestMapping("/todianping")
    public String todianp(){
        return "dp";
    }
}
