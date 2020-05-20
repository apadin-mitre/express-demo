var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET student - returns a list of all students */
/* - GET student?search= - returns a list of students filtered on name matching the given query */
router.get('/', function(req, res, next) {
	let search = req.query.search;
	if(search) {
		let studentResp = "Student not found.";
		const students = JSON.parse(fs.readFileSync("students.json"))
		students.forEach(student => {
			if(student["Name"] == search) {
				studentResp = student;
			}
		});
		res.send(studentResp);
	} else {
		const students = JSON.parse(fs.readFileSync("students.json"))
		let studentList = Array.from(students, x => x["Name"])
		res.send(studentList);
	}
});

/* - GET students/:studentId - returns details of a specific student by student id */
router.get('/:studentId', function(req, res, next) {
	const students = JSON.parse(fs.readFileSync("students.json"))
	let studentResp = "Student not found.";
	students.forEach(student => {
		if(student["ID"] == req.params.studentId) {
			studentResp = student;
		}
	});
	res.send(studentResp);
});

module.exports = router;
