package com.example.hx_test.demo.Mapper;
import com.example.hx_test.demo.Pojo.Points;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface Map_dpoints {
    @Select("select * from points")
    List<Points> findalldpoints();
    @Select("select * from points where classid=#{classid}")
    List<Points> findbyclassid(int classid);
    @Select("select * from points where classid=#{classid} and dates=#{dates}")
    List<Points> findbyclassid2(int classid,String dates);
    @Select("select * from points where itemid=#{itemid}")
    List<Points> findbyitemid(int itemid);
    @Select("select * from points where dates=#{dates}")
    List<Points> findnowdate(String dates);
    @Select("select sum(itemscore) from points where dates=#{dates} and classid=#{classid}")
    double findnowclassscore(String dates,Integer classid);
    @Insert("insert into points(pid,classid,itemid,itemscore,dates,details,noon,aftern) values(#{imagesrc},#{classid},#{itemid},#{itemscore},#{dates},#{details},#{noon},#{aftern})")
    int upcomment(String imagesrc,int classid,int itemid,double itemscore,String dates,String details,int noon,int aftern);
    @Select("select * from points where classid=#{classid} and dates=#{dates} and itemid=#{itemid} and noon=#{noon}")
    Points findaclassanddate(Integer classid, String dates,Integer itemid,Integer noon);
    @Select("select count(1) from points where classid=#{classid} and dates=#{dates} and itemid=#{itemid} and noon=#{noon}")
    Integer findaclassanddatecount(Integer classid, String dates,Integer itemid,Integer noon);
    @Select("select count(1) from points where classid=#{classid} and dates=#{dates} and itemid=#{itemid} and noon=#{noon}")
    Integer findcdacount(Integer classid, String dates,Integer itemid,Integer noon);
    @Update("update  points set pid=#{imagesrc},details=#{details},itemscore=#{itemscore} where classid=#{classid} and dates=#{dates} and itemid=#{itemid} and noon=#{noon} and aftern=#{aftern}")
    int updcomment(String imagesrc,int classid,int itemid,double itemscore,String dates,String details,int noon,int aftern);
    @Select("select count(1) from points where classid=#{classid} and dates=#{dates} and noon=#{noon}")
    Integer commentif(Integer classid, String dates,Integer noon);
    @Select("select count(1) from points where classid=#{classid} and dates=#{dates}")
    Integer ifcomp(Integer classid, String dates);
    @Select("select count(1) from points where dates=#{dates} and classid=#{classid}")
    Integer findnowcanvas(String dates,Integer classid);
    @Select("select sum(points.itemscore) from points where yearweek(points.dates)=202000+#{week} and classid=#{classid}")
    double everyweekpoints(Integer week,Integer classid);
    @Select("select count(1) from points where yearweek(points.dates)=202000+#{week} and classid=#{classid}")
    Integer everyweekpointscount(Integer week,Integer classid);

}
