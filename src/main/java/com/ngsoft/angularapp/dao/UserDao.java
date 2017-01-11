package com.ngsoft.angularapp.dao;

import com.ngsoft.angularapp.model.User;

public interface UserDao {

	// Using Hibernate.
	public User getUser(Long id);

	// Using JDBC Template
	public boolean validateUser(User user);
}
