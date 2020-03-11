package com.example.hx_test.demo.Service.classes;

import com.example.hx_test.demo.Mapper.map_classes;
import com.example.hx_test.demo.Pojo.Classes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class classes_impl implements ser_classes{
    @Autowired
    map_classes map_classes;
    @Override
    public List<Classes> findallclasses() {
        return map_classes.findallclasses();
    }
}
