package com.whitestratus.randstad;


public class User {
	
	private String firstName;
	private String lastName;
	private String email;
	//private String phoneNumber;
	//private String department;
	
	
	
	
	
	//constructor
	public User(String firstName, String lasttName, String email/*, String phoneNumber*//*,String department*/) {
		
		this.firstName = firstName;
		this.lastName = lasttName;
		this.email = email;
	//	this.phoneNumber = phoneNumber;
	//	this.department = department;
		
	}

	// all getters
	public String getFirstName() {
		return firstName;
	}

	public String getLasttName() {
		return lastName;
	}

	public String getEmail() {
		return email;
	}
/*
	public String getDepartment() {
		return department;
	}
*/
/*	public String getPhoneNumber() {
		return phoneNumber;
	}
*/
	public void displayUserInfo(){
		//use this when phone and department is added.
		//     System.out.println("User"+" [name= " + firstName + " , last="  
		//	      + lastName + " , email=" + email + " , PhoneNumber="  
		//	      + phoneNumber /*+ " , Department=" + department + "]"*/); 
		
		
		System.out.println("|"+firstName+" |"+lastName+"|"+email+"|"); 
	}
	public String GetdisplayUserInfo(){
		//use this when phone and department is added.
		//     System.out.println("User"+" [name= " + firstName + " , last="  
		//	      + lastName + " , email=" + email + " , PhoneNumber="  
		//	      + phoneNumber /*+ " , Department=" + department + "]"*/); 
		
		
		return "|"+firstName+" |"+lastName+"|"+email+"|"; 
	}
	
	public boolean compareUserTo(User temp){
		
		if( (temp.getFirstName()).equals(this.firstName) && (temp.getLasttName()).equals(this.lastName)
				&& (temp.getEmail()).equals(this.email)/* && (temp.getPhoneNumber()).equals(this.phoneNumber)*/
				/*&& (temp.getDepartment()).equals(this.department) */){
		return true;
		}
		else{
		return false;
		}
	}

	
	
	
}