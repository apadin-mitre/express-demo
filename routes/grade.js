var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET grades/:studentId - returns all grades for a given student by student id */
router.get('/:studentId', function(req, res, next) {
	let studentGrades = "Student not found.";
	const students = JSON.parse(fs.readFileSync("students.json"))
	students.forEach(student => {
		if(student["ID"] == req.params.studentId) {
			studentGrades = student["grades"];
		}
	});
	res.send(studentGrades);
});

/* POST grade - records a new grade, returns success status in JSON response 
(meaning you do not need to actually store the grade in a database. 
You do need to validate that the user supplied at least a grade, and a studentId) */
router.post('/', function(req, res, next) {
	const studentId = req.body.id;
	const newGrade = req.body.grade;

	if(!studentId || !newGrade) {
		let response = {
			status: 400,
			msg: "Invalid Request."
		}
		res.send(response);
	}

	let response = {
		status: 404,
		msg: "Student not found."
	}

	const students = JSON.parse(fs.readFileSync("students.json"))
	students.forEach(student => {
		if(student["ID"] == studentId) {
			student["grades"].push(newGrade);
			response.status = 200;
			response.msg = "New Grade Added: " + student["grades"];
		}
	});

	res.send(response);
});

module.exports = router;
