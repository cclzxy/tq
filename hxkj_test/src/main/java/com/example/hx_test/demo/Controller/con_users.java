package com.example.hx_test.demo.Controller;
import com.example.hx_test.demo.Service.users.ser_users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller
public class con_users {
    @Autowired
    ser_users ser_users;

    /**
     * 验证用户名密码
     * author ccl
     * @return
     */
    @RequestMapping("/finduser")
    @ResponseBody
    public String find_user(String pwd, HttpServletRequest request) {
        if (ser_users.finduserpwd("admin").equals(pwd)) {//密码正确
        HttpSession session=request.getSession();//获取session并将userName存入session对象
        session.setAttribute("userName", ser_users.finduserpwd("admin"));
        }
        return "dp";
    }
}

