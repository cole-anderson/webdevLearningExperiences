package com.northernlightsdev.restwebservice.helloworld;

import javax.management.RuntimeErrorException;

import org.apache.tomcat.util.http.fileupload.ThresholdingOutputStream;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

//Controller: handling http requests

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HelloWorldController {
	
	//GET
	//URI - /hello-world
	//method returns hello world
	
	//hello-world
	@GetMapping(path = "/hello-world")
	public String helloWorld() {
		return "Hello World";
	}
	
	//hello-world-bean
	@GetMapping(path = "/hello-world-bean")
	public HelloWorldBean helloWorldBean() {
		return new HelloWorldBean("Hello World Bean");
	}
	
	//hello-world/path-variable/cole
	@GetMapping(path = "/hello-world/path-variable/{name}")
	public HelloWorldBean helloWorldPath(@PathVariable String name) {
//		throw new RuntimeException("error api");
		
		return new HelloWorldBean(String.format("Hello World, %s", name));
	}

}
