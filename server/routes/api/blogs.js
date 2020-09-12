const express = require("express");
const mongodb = require("mongodb");
const path = require("path");

const router = express.Router();

const app = express();

//Get blogs
router.get("/", async (req, res) => {
  const blogs = await loadBlogCollection();
  res.send(await blogs.find({}).toArray());
});

router.get("/:name", async (req, res) => {
  const blogs = await loadBlogCollection();
  const comments = await blogs
    .find({ name: { $regex: `.*${req.params.name}.*` } })
    .project({ "comments.name": 1, "comments.comment": 1, "comments.date": 1 })
    .toArray();
  console.log(comments);
  res.send(comments);
});

router.post("/:id", async (req, res) => {
  const blogs = await loadBlogCollection();
  await blogs.updateOne(
    { _id: new mongodb.ObjectID(req.params.id) },
    {
      $addToSet: {
        comments: {
          email: req.body.email,
          name: req.body.name,
          comment: req.body.comment,
          date: req.body.date,
        },
      },
    }
  );
  res.status(201).send();
});

async function loadBlogCollection() {
  const client = await mongodb.MongoClient.connect(
    "mongodb+srv://aghiljv:Qwerty@123@cluster0-gyw6y.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  return client.db("website").collection("blogposts");
}

module.exports = router;
