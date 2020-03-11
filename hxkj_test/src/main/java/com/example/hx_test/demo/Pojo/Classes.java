package com.example.hx_test.demo.Pojo;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "classes")
public class Classes {
  @Id
  private long classid;
  private String classname;


  public long getClassid() {
    return classid;
  }

  public void setClassid(long classid) {
    this.classid = classid;
  }


  public String getClassname() {
    return classname;
  }

  public void setClassname(String classname) {
    this.classname = classname;
  }

}
