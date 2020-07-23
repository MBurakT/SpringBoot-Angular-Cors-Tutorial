package com.example.taslak.controller;

import com.example.taslak.model.City;
import com.example.taslak.repository.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MyController {

    @Autowired
    private CityRepository cityRepository;

    @GetMapping(value="/cities")
    public List<City> cities(){
        return cityRepository.findAll();
    }

}
