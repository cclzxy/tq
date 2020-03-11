package com.example.hx_test.demo.Pojo;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "items")
public class Items {
  @Id
  private long itemid;
  private String itemname;
  private double itemscore;


  public long getItemid() {
    return itemid;
  }

  public void setItemid(long itemid) {
    this.itemid = itemid;
  }


  public String getItemname() {
    return itemname;
  }

  public void setItemname(String itemname) {
    this.itemname = itemname;
  }


  public double getItemscore() {
    return itemscore;
  }

  public void setItemscore(double itemscore) {
    this.itemscore = itemscore;
  }

}
