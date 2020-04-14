const express = require('express');
const mongodb = require('mongodb');
const path = require('path');

const router = express.Router();

const app = express();

//Get Posts
router.get('/', async (req, res) => {
	const posts = await loadPorfolioCollection();
	res.send(await posts.find({}).toArray());
});

//Download
router.get('/downloadResume', (req, res) => {
	app.use(express.static(__dirname));
	res.download(path.join(__dirname, '/ResumeFullStack.pdf'));
});

//Add Posts
router.post('/', async (req, res) => {
	const posts = await loadPorfolioCollection();
	await posts.insertOne({
		text: req.body.text,
		createdAt: new Date(),
	});
	res.status(201).send();
});

//Delete Posts
router.delete('/:id', async (req, res) => {
	const posts = await loadPorfolioCollection();
	await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
	res.status(200).send();
});

async function loadPorfolioCollection() {
	const client = await mongodb.MongoClient.connect(
		'mongodb+srv://aghiljv:Qwerty@123@cluster0-gyw6y.mongodb.net/test?retryWrites=true&w=majority',
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	);
	return client.db('website').collection('portfolios');
}

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
