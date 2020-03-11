package com.example.hx_test.demo.Service.dpoints;

import com.example.hx_test.demo.Mapper.Map_dpoints;
import com.example.hx_test.demo.Pojo.Classes;
import com.example.hx_test.demo.Pojo.Points;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.List;
@Service
public class dpoints_impl implements ser_dpoints{
    @Autowired
    Map_dpoints map_dpoints;

    /**
     * 所有条目
     * @return
     */
    @Override
    public List<Points> findalldpoints() {
        return map_dpoints.findalldpoints();
    }

    /**
     * 每日评分
     * @return
     */
    @Override
    public int upcomment(String imagesrc,int classid, int itemid, double itemscore, String dates, String details, int noon, int aftern) {
        return map_dpoints.upcomment(imagesrc,classid,itemid,itemscore,dates,details,noon,aftern);
    }

    @Override
    public List<Points> findbyclassid(int classid) {
        return map_dpoints.findbyclassid(classid);
    }

    @Override
    public List<Points> findbyitemid(int itemid) {
        return map_dpoints.findbyitemid(itemid);
    }

    @Override
    public List<Points> findnowdate(String dates) {
        return map_dpoints.findnowdate(dates);
    }

    @Override
    public Points findaclassanddate(Integer classid, String dates, Integer itemid,Integer noon) {
        return map_dpoints.findaclassanddate(classid,dates,itemid,noon);
    }

    @Override
    public Integer findcdacount(Integer classid, String dates, Integer itemid, Integer noon) {
        return map_dpoints.findcdacount(classid,dates,itemid,noon);
    }

    @Override
    public int updcomment(String imagesrc,int classid, int itemid, double itemscore, String dates, String details, int noon, int aftern) {
        return map_dpoints.updcomment(imagesrc,classid,itemid,itemscore,dates,details,noon,aftern);
    }

    @Override
    public Integer commentif(Integer classid, String dates,Integer noon) {
        return map_dpoints.commentif(classid,dates,noon);
    }

    @Override
    public Integer findaclassanddatecount(Integer classid, String dates, Integer itemid, Integer noon) {
        return map_dpoints.findaclassanddatecount(classid,dates,itemid,noon);
    }

    @Override
    public Integer findnowcanvas(String dates,Integer classid) {
        return map_dpoints.findnowcanvas(dates,classid);
    }

    @Override
    public double findnowclassscore(String dates, Integer classid) {
        return map_dpoints.findnowclassscore(dates,classid);
    }

    @Override
    public List<Points> findbyclassid2(int classid, String dates) {
        return map_dpoints.findbyclassid2(classid,dates);
    }

    @Override
    public double everyweekpoints(Integer week,Integer classid) {
        return map_dpoints.everyweekpoints(week,classid);
    }

    @Override
    public Integer everyweekpointscount(Integer week, Integer classid) {
        return map_dpoints.everyweekpointscount(week,classid);
    }

    @Override
    public Integer ifcomp(Integer classid, String dates) {
        return map_dpoints.ifcomp(classid,dates);
    }
}
