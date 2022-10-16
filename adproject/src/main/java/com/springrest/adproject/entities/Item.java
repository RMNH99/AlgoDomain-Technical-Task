package com.springrest.adproject.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Item {
	@Id
	private long id;
	private String product_name;
	private String product_type;
	private String product_category;
	private float product_price;
	private float gst;
	private int delivery;
	private float discount;
	private float final_price;
	
	
	public Item() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Item(long id, String product_name, String product_type, String product_category, float product_price,
			float gst, int delivery, float discount, float final_price) {
		super();
		this.id = id;
		this.product_name = product_name;
		this.product_type = product_type;
		this.product_category = product_category;
		this.product_price = product_price;
		this.gst = gst;
		this.delivery = delivery;
		this.discount = discount;
		this.final_price = final_price;
	}
	

	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getProduct_name() {
		return product_name;
	}
	public void setProduct_name(String product_name) {
		this.product_name = product_name;
	}
	public String getProduct_type() {
		return product_type;
	}
	public void setProduct_type(String product_type) {
		this.product_type = product_type;
	}
	public String getProduct_category() {
		return product_category;
	}
	public void setProduct_category(String product_category) {
		this.product_category = product_category;
	}
	public float getProduct_price() {
		return product_price;
	}
	public void setProduct_price(float product_price) {
		this.product_price = product_price;
	}
	public float getGst() {
		return gst;
	}
	public void setGst(float gst) {
		this.gst = gst;
	}
	public int getDelivery() {
		return delivery;
	}
	public void setDelivery(int delivery) {
		this.delivery = delivery;
	}
	public float getDiscount() {
		return discount;
	}
	public void setDiscount(float discount) {
		this.discount = discount;
	}
	public float getFinal_price() {
		return final_price;
	}
	public void setFinal_price(float final_price) {
		this.final_price = final_price;
	}
	@Override
	public String toString() {
		return "Item [id=" + id + ", product_name=" + product_name + ", product_type=" + product_type
				+ ", product_category=" + product_category + ", product_price=" + product_price + ", gst=" + gst
				+ ", delivery=" + delivery + ", discount=" + discount + ", final_price=" + final_price + "]";
	}
	
}
