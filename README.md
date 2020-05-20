# express-demo

Create a new repository for this project. Create a Restful API in Express which meets the below processing requirements. The applicaton does not need persistence. It should be in memory.

## Service endpoints:
- GET student - returns a list of all students
- GET students/:studentId - returns details of a specific student by student id
- GET student?search= - returns a list of students filtered on name matching the given query
- GET grades/:studentId - returns all grades for a given student by student id
- POST grade - records a new grade, returns success status in JSON response (meaning you do not need to actually store the grade in a database. You do need to validate that the user supplied at least a grade, and a studentId)
- POST register - creates a new user, returns success status in JSON response (meaning you do not need to actually store the user info in a database. You do need to validate that the user supplied username and email)

Project skeleton generated with `npx express-generator` 

## To run
- `npm start`

- `curl --request GET localhost:3000/student`
- `curl --request GET localhost:3000/student/1`
- `curl --request GET localhost:3000/student&search=Senpai`
- `curl --request GET localhost:3000/grade/1`
- `curl --request POST -d "id=1&grade=93" localhost:3000/grade`
- `curl --request POST -d "username=alex&email=alex@email.com" localhost:3000/register`