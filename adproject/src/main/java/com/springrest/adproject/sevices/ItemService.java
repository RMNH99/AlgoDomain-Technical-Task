package com.springrest.adproject.sevices;

import java.util.List;

import com.springrest.adproject.entities.Item;

public interface ItemService {

	public List<Item> getItems();
	
	public Item getItem(long itemId);
	
	public Item additem(Item item);
	
	public Item updateItem(Item item);
	
	public void deleteItem(long pasrseLong);
}
