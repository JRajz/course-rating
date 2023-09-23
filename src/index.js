const express = require('express');
const courseData = require('./courses.json');
const validator = require('./helpers/validator');
const path = require('path');
const fs = require('fs');
const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    return res.status(200).send('hello world');
});

app.get('/courses', (req, res) => {
    return res.status(200).json(courseData);
});

app.get('/courses/:courseId', (req, res) => {
    let airTribeCourses = JSON.parse(JSON.stringify(courseData)).airtribe;
    const courseId = req.params.courseId;
    let filterCourse = airTribeCourses.filter(c => c.courseId == courseId);
    if (filterCourse.length == 0) {
        return res.status(404).send('No appropriate course found with appropriate id');
    }

    return res.status(200).json(filterCourse);
});

app.post('/courses', (req, res) => {
    const userProvidedDetails = req.body;

    let writePath = path.join(__dirname, 'courses.json');
    const isValidate = validator.validateCourseInfo(userProvidedDetails);
    if (isValidate.status == true) {
        let courseDataModified = JSON.parse(JSON.stringify(courseData));
        courseDataModified.airtribe.push(userProvidedDetails);
        fs.writeFile(writePath, JSON.stringify(courseDataModified), {encoding: 'utf8', flag: 'w'}, (err, data) => {
            if (err) {
                res.status(500).send("Something went wrong while creating the course");
            }
            else {
                return res.status(200).send(isValidate.message);
            }
        });
    }
    else {
        return res.status(400).send(isValidate);
    }
});

app.listen(PORT, (error) => {
    if (error) {
        console.log('Something wrong !!!!!');
    }
    else {
        console.log('Server is running.......');
    }
});