package com.example.hx_test.demo.Mapper;

import com.example.hx_test.demo.Pojo.excel_test;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface map_excel {
    @Select("select * from exceltest")
    List<excel_test> findallusers();
}
