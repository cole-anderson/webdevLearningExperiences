package com.northernlightsdev.restwebservice.todo;

import java.util.ArrayList;
import java.util.List;
import java.util.Date;

public class TodoHardCodesService {
	
	private static List<Todo> todos = new ArrayList<Todo>();
	
	private static int idCounter = 0;
	
	//Act as database
	static {
		todos.add(new Todo(++idCounter, "Cole", "Learn react", new Date(), false));
		todos.add(new Todo(++idCounter, "Erick", "Learn after effects", new Date(), false));
		todos.add(new Todo(++idCounter, "Jen", "Learn c++", new Date(), false));
	}
	
	public List<Todo> findAll(){
		return todos;
	}
}
