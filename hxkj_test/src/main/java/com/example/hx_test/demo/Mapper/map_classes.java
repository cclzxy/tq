package com.example.hx_test.demo.Mapper;

import com.example.hx_test.demo.Pojo.Classes;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.util.List;

@Mapper
@Repository
public interface map_classes {
    @Select("select * from classes")
    List<Classes> findallclasses();

}
