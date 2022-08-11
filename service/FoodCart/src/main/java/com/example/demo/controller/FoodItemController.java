package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.FoodItemEntity;
import com.example.demo.service.FoodItemService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class FoodItemController {
    
	@Autowired
	FoodItemService service;
	
	@RequestMapping("/")
    public String home(){
        return "Hello World!";
    }
	
	@GetMapping("/fooditems")
	public List<FoodItemEntity> getFoodItems(){
		return service.getFoodItems();
	}
}
