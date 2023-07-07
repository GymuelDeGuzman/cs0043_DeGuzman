const Course = require('../models/course');


module.exports.createClass = (reqBody) => {
	let newClass = new Course ({
		courseCode : reqBody.courseCode,
		courseName : reqBody.courseName,
		prereq : reqBody.prereq,
		status : reqBody.status,
	});

	return newClass.save().then((user, error) => {
		if(error){
			return false;
		} else {
			return true;
		};
	});
};


module.exports.checkCourseExists = (reqBody) => {
	return Course.find({courseCode : reqBody.courseCode})
		.then(result => {
			if (result.length >= 6) {
				return true;
			} else {
				return false;
			};
		});
};


module.exports.findCourse = (data) => {
	return Course.findOne({courseCode: data.courseCode}).then(result => {
		if(result == null || result == ""){
			return "No Matching Course Found.";
		} else {
			return result;
		};

	});
};