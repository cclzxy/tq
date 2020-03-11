package com.example.hx_test.demo.Service.dpoints;
import com.example.hx_test.demo.Pojo.Points;
import java.util.List;

public interface ser_dpoints {
     List<Points> findalldpoints();
     int upcomment(String imagesrc,int classid,int itemid,double itemscore,String dates,String details,int noon,int aftern);
     List<Points> findbyclassid(int classid);
     List<Points> findbyitemid(int itemid);
     List<Points> findnowdate(String dates);
     Points findaclassanddate(Integer classid, String dates,Integer itemid,Integer noon);
     Integer findcdacount(Integer classid, String dates,Integer itemid,Integer noon);
     int updcomment(String imagesrc,int classid,int itemid,double itemscore,String dates,String details,int noon,int aftern);
     Integer commentif(Integer classid, String dates,Integer noon);
     Integer findaclassanddatecount(Integer classid, String dates,Integer itemid,Integer noon);
     Integer findnowcanvas(String dates,Integer classid);
     double findnowclassscore(String dates,Integer classid);
     List<Points> findbyclassid2(int classid,String dates);
     double everyweekpoints(Integer week,Integer classid);
     Integer everyweekpointscount(Integer week,Integer classid);
     Integer ifcomp(Integer classid, String dates);
}
