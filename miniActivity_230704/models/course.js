const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
	courseCode : {
		type: String,
		required : [true, "Course Code must be defined."]
	},

	courseName : {
		type: String,
		required : [true, "Course Name must be defined."]
	},

	prereq : {
		type: String,
		required : false
	},

	status : {
		type: String,
		default : "Inactive"
	},

	enrollments : [{
		studentId : {
			type : String,
			required : false,
		},

		section : {
			type : String,
			required : false,
		}
	}]
});

module.exports = mongoose.model("Course", courseSchema);