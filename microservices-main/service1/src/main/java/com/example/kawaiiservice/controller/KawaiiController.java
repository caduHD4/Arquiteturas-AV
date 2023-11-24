package com.example.kawaiiservice.controller;

import com.example.kawaiiservice.model.Kawaii;
import com.example.kawaiiservice.service.KawaiiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class KawaiiController {

    @Autowired
    private KawaiiService kawaiiService;

    @GetMapping("/kawaii")
    public Kawaii getKawaii(@RequestParam String type, @RequestParam String category) {
        return kawaiiService.getKawaii(type, category);
    }
}
