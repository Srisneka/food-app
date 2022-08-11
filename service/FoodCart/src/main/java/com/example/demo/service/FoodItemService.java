package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.FoodItemEntity;
import com.example.demo.repo.FoodItemRepo;


@Service
public class FoodItemService {
	
@Autowired
FoodItemRepo fooditemrepo;

public List<FoodItemEntity> getFoodItems(){
	return fooditemrepo.findAll();}

}
