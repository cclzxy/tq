package com.example.hx_test.demo.Service.excel;

import com.example.hx_test.demo.Mapper.map_excel;
import com.example.hx_test.demo.Pojo.excel_test;
import com.example.hx_test.demo.Service.excel.ser_excel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class excel_impl implements ser_excel {
    @Autowired
    map_excel mapExcel;
    @Override
    public List<excel_test> findallusers() {
        return mapExcel.findallusers();
    }
}
