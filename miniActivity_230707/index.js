// load express for backend
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();

mongoose.connect('mongodb+srv://admin:Gdg49683534@sandbox.6yvvlof.mongodb.net/an22_sample_database?retryWrites=true&w=majority', {
		useNewUrlParser: true,
		useUnifiedTopology: true
	});

mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas.'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', userRoutes);

app.listen(process.env.PORT || 4000, () => {
	console.log(`API is online on port ${process.env.PORT || 4000}`)
});


