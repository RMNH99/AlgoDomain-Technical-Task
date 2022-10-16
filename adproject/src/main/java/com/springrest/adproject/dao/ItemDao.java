package com.springrest.adproject.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springrest.adproject.entities.Item;

public interface ItemDao extends JpaRepository<Item, Long> {

}
