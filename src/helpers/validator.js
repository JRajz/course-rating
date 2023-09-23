class Validator {
    static validateCourseInfo(courseInfo) {
        if (courseInfo.hasOwnProperty("courseName") &&
        courseInfo.hasOwnProperty("courseId") &&
        courseInfo.hasOwnProperty("cohort") &&
        courseInfo.hasOwnProperty("college") &&
        courseInfo.hasOwnProperty("semester") &&
        courseInfo.hasOwnProperty("instructor") &&
        courseInfo.hasOwnProperty("averageRating") &&
        courseInfo.hasOwnProperty("studentVoted")) {
            return {
                "status": true,
                "message": "Course has been added"
            }
        }
        else {
            return {
                "status": true,
                "message": "Course info is malformed. Please provide all the paramerters"
            }
        }
    }
}

module.exports = Validator;