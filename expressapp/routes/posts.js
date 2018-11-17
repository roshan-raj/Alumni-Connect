var express = require('express');
var router = express.Router();
var Post = require('../models/post');

router.post('/post', function (req, res, next) {
  addToDB(req, res);
});


async function addToDB(req, res) {
  var post = new Post({
    name: "--not added--",
    title: req.body.title,
    content: req.body.content,
    creation_dt: Date.now()
  });

  try {
    doc = await post.save();
    return res.status(201).json(doc);
  }
  catch (err) {
    return res.status(501).json(err);
  }
}

module.exports = router;