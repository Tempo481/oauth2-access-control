package com.example.demo.web.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SampleController {
	
	@GetMapping("/sample")
	public String returnSampleData() {
		return "secret message";
	}

}
