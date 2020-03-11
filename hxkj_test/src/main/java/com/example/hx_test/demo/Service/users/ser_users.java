package com.example.hx_test.demo.Service.users;

import org.apache.ibatis.annotations.Select;

public interface ser_users {
    Integer finduser(String dp_name);
    String finduserpwd(String dp_name);
}
