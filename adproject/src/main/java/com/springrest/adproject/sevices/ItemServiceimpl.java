package com.springrest.adproject.sevices;

import java.util.ArrayList;

import java.util.List;
//import java.util.stream.Collectors;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.adproject.dao.ItemDao;
import com.springrest.adproject.entities.Item;

@Service
public class ItemServiceimpl implements ItemService {
	
 @Autowired
	 ItemDao itemDao;
	
	List<Item> list;
	
	public ItemServiceimpl() {
		
		list= new ArrayList<>();
		list.add(new Item(1001,"Lenovo Yoga","Laptop ","Electronics",45000f,458f,74,784f,475f));
//		list.add(new Item(1002,"Lenovo","Desktop","Electronics",45000f));
		
	} 
	                  
	@Override
	public List<Item> getItems() {
		return itemDao.findAll() ;
	}

	@Override
	public Item getItem(long itemId) {
		
	 Item i=null;
	 for(Item item : list) {
		 if(item.getId()==itemId) {
			 i=item;
			 break;
		 }
	 }
		return i;
//		return itemDao.getOne(itemId);
	}
	@Override
	public Item additem(Item item) {
		itemDao.save(item);
		return item;
	}

	@Override
	public Item updateItem(Item item) {
		itemDao.save(item);
		return item;
	}

	@Override
	public void deleteItem(long pasrseLong) {
//		list=this.list.stream().filter(e->e.getId()!=pasrseLong).collect(Collectors.toList());
//		@SuppressWarnings("deprecation")
		Item entity = itemDao.getOne(pasrseLong);
		itemDao.delete(entity);
	}

}
