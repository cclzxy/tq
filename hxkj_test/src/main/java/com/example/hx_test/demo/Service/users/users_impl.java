package com.example.hx_test.demo.Service.users;

import com.example.hx_test.demo.Mapper.map_users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class users_impl implements ser_users{
    @Autowired
    map_users map_users;
    @Override
    public Integer finduser(String dp_name) {
        return map_users.finduser(dp_name);
    }

    @Override
    public String finduserpwd(String dp_name) {
        return map_users.finduserpwd(dp_name);
    }
}
