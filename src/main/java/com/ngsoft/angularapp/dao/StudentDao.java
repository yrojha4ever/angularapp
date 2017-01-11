package com.ngsoft.angularapp.dao;

import java.util.List;

import com.ngsoft.angularapp.model.Student;

public interface StudentDao {
	public Long insert(Student student);
	public Student insertUpdate(Student student);
	public List<Student> getAll();
	public Student get(Long id);
	public void delete(Long id);
}
