const express = require('express');
const router = express.Router();
const userController = require('../controllers/courseControllers');

router.post('/checkCourse', (req, res) => {
	userController.checkCourseExists(req.body)
	.then(resultFromController => res.send(resultFromController));
});

router.post('/createClass', (req, res) => {
	userController.createClass(req.body)
	.then(resultFromController => res.send(resultFromController));
});

router.post('/findCourse', (req, res) => {
	userController.findCourse(req.body)
	.then(resultFromController => res.send(resultFromController));
});

module.exports = router;