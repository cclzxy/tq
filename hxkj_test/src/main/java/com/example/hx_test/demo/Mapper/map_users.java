package com.example.hx_test.demo.Mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface map_users {
    //查询是否存在该用户
    @Select("select count(1) from dpusers where dp_name=#{dp_name}")
    Integer finduser(String dp_name);
    //判断用户密码是否正确
    @Select("select dp_password from dpusers where dp_name=#{dp_name}")
    String finduserpwd(String dp_name);
}
