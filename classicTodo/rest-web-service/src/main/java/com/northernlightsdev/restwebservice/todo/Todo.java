package com.northernlightsdev.restwebservice.todo;

import java.util.Date;

public class Todo {

	private String username;
	private String description;
	private Date targetDate;
	private Boolean isDone;
	private long id;

	public Todo(int idNum, String name, String desc, Date date, boolean b) {
		super();
		this.username = name;
		this.description = desc ;
		this.targetDate = date;
		this.isDone = b;
		this.id = idNum;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getTargetData() {
		return targetDate;
	}

	public void setTargetData(Date targetData) {
		this.targetDate = targetData;
	}

	public Boolean getIsDone() {
		return isDone;
	}

	public void setIsDone(Boolean isDone) {
		this.isDone = isDone;
	}
}
