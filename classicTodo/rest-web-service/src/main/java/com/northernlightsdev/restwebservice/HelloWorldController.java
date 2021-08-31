package com.northernlightsdev.restwebservice;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

//Controller: handling http requests

@RestController
public class HelloWorldController {
	
	//GET
	//URI - /hello-world
	//method returns hello world
	
	
	@GetMapping(path = "/hello-world")
	public String helloWorld() {
		return "Hello World";
	}

}
