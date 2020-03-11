package com.example.hx_test.demo.Service.items;

import com.example.hx_test.demo.Mapper.map_items;
import com.example.hx_test.demo.Pojo.Items;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class item_impl implements ser_items{
    @Autowired
    map_items map_items;
    @Override
    public List<Items> findallitems() {
        return map_items.findallitems();
    }
}
