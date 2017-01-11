package com.ngsoft.angularapp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ngsoft.angularapp.dao.StudentDao;
import com.ngsoft.angularapp.model.JsonResult;
import com.ngsoft.angularapp.model.Student;

@RestController
@RequestMapping("api/stud")
public class StudentRestController {

	@Autowired
	private StudentDao studentDao;

	@RequestMapping(value="getAll", method = RequestMethod.GET)
	public ResponseEntity<List<Student>> getAll() {
		return new ResponseEntity<List<Student>>(studentDao.getAll(), HttpStatus.OK);
	}
	
	@RequestMapping(value="{id}/get", method = RequestMethod.GET)
	public ResponseEntity<Student> get(@PathVariable("id") Long id) {
		return new ResponseEntity<Student>(studentDao.get(id), HttpStatus.OK);
	}
	
	@RequestMapping(value="save", method = RequestMethod.POST)
	public ResponseEntity<Student> saveToDb(@RequestBody Student student) {
		studentDao.insertUpdate(student);
		return new ResponseEntity<Student>(student, HttpStatus.OK);
	}
	
	@RequestMapping(value="{id}/delete", method = RequestMethod.DELETE)
	public ResponseEntity<JsonResult> delete(@PathVariable("id") Long id) {
		studentDao.delete(id);
		return new ResponseEntity<JsonResult>(new JsonResult(id), HttpStatus.OK);
	}

}
