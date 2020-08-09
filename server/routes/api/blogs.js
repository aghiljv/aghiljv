const express = require('express');
const mongodb = require('mongodb');
const path = require('path');

const router = express.Router();

const app = express();

//Get Posts
router.get('/', async (req, res) => {
	const posts = await loadBlogCollection();
	res.send(await posts.find({}).toArray());
});

router.get('/:name', async (req, res) => {
	const posts = await loadBlogCollection();
	res.send(await posts.find({ name: { $regex: `.*${req.params.name}.*` } }).toArray());
});

async function loadBlogCollection() {
	const client = await mongodb.MongoClient.connect(
		'mongodb+srv://aghiljv:Qwerty@123@cluster0-gyw6y.mongodb.net/test?retryWrites=true&w=majority',
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	);
	return client.db('website').collection('blogposts');
}

module.exports = router;
