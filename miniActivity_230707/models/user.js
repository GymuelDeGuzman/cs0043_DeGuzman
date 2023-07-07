const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
	firstName : {
		type : String,
		required : [true, "Firstname is Required!"]
	},
	
	lastName : {
		type : String,
		required : [true, "Lastname is Required!"]
	},
	
	mobileNo : {
		type : String,
		required : [true, "Mobile Number is Required!"]
	},

	email : {
		type : String,
		required : [true, "E-mail is Required!"]
	},

	password : {
		type : String,
		required : [true, "Password is Required!"]
	},

	isAdmin : {
		type : Boolean,
		default : false,
	},

	enrollments : [{
		courseId : {
			type : String,
			required : [true, "Course ID is required"]
		},

		enrolledOn : {
			type : Date,
			default : new Date()
		},

		status : {
			type : String,
			default : "Enrolled"
		}
	}]
});

module.exports = mongoose.model("User", userSchema);

