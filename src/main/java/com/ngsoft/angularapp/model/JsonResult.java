package com.ngsoft.angularapp.model;

public class JsonResult {
	private long id;
	private boolean success= true;
	
	public JsonResult(){
		
	}
	
	public JsonResult(long id){
		this.id = id;
	}

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
}
