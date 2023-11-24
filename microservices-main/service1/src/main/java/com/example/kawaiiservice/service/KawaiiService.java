// kawaii-service/src/main/java/com/example/kawaiiservice/service/KawaiiService.java
package com.example.kawaiiservice.service;

import com.example.kawaiiservice.model.Kawaii;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class KawaiiService {

    private static final String BASE_URL = "https://api.waifu.pics";

    public Kawaii getKawaii(String type, String category) {
        String apiUrl = String.format("%s/%s/%s", BASE_URL, type, category);

        RestTemplate restTemplate = new RestTemplate();
        Kawaii kawaii = restTemplate.getForObject(apiUrl, Kawaii.class);

        return kawaii;
    }
}
