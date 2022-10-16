package com.springrest.adproject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.springrest.adproject.dao.ItemDao;
import org.springframework.web.bind.annotation.RestController;
import com.springrest.adproject.entities.Item;
import com.springrest.adproject.sevices.ItemService;

@RestController 
@CrossOrigin
public class Mycontroller {
	
	@Autowired
	private ItemService service;
	@Autowired
	 ItemDao itemDao;
	
	//Get the items
    @GetMapping("/items")
	public List<Item> getItems(){
	return this.service.getItems();
	}
    
    
//	Get Item By ID
    @GetMapping("/items/{itemId}")
  	public Item getItem(@PathVariable String itemId){
  	return this.service.getItem(Long.parseLong(itemId));
  	}
    
//    Add item	
    @PostMapping("/items")
    public Item addItem(@RequestBody Item item) {
 
    	itemDao.save(item);
    	return item;
     } 
    
//    update item
    @PutMapping("/items")
    public Item updateItem(@RequestBody Item item) {
    	return this.service.updateItem(item);
    }
  //Delete Items  
    @DeleteMapping("/items/{itemId}")
    public ResponseEntity<HttpStatus> deleteItem(@PathVariable String itemId){
    	try {
    		this.service.deleteItem(Long.parseLong(itemId));
    		return new ResponseEntity<>(HttpStatus.OK);
    		}catch(Exception e) {
    			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    		}
    }
}
