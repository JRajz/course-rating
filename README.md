
# Course Rating

Adding courses and feedback into a JSON file

This project implements a JSON file handling system to add courses and their feedback into a JSON file. This can be used to analyze course data and create reports.



## API Reference

This API provides access to information about courses and its rating. It is intended for use by developers who want to build applications that interact with our data.

#### Get all courses

```http
  GET /courses
```

#### Get a course

```http
  GET /courses/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of course to fetch |


#### Add a course

```http
  POST /courses
```

Body 
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `courseId`      | `interger` | **Required**. Id of course |
| `courseName`      | `string` | **Required**. name of course |
| `cohort`      | `interger` | **Required**. cohort number |
| `college`      | `string` | **Required**. college name |
| `semester`      | `interger` | **Required**. semester number |
| `instructor`      | `string` | **Required**. course instructor |
| `averageRating`      | `float` | **Required**. Course Rating |
| `studentVoted`      | `interger` | **Required**. No. of students voted |
