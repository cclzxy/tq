package com.example.hx_test.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.util.ResourceUtils;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;

@SpringBootApplication
public class HxkjTestApplication {

    public static void main(String[] args) {
        SpringApplication.run(HxkjTestApplication.class, args);
    }
    //这里配置静态资源文件的路径导包都是默认的直接导入就可以
}
