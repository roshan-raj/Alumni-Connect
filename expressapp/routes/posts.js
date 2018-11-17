var express = require('express');
var router = express.Router();
var Post = require('../models/post');

router.post('/post', function (req, res, next) {
  addToDB(req, res);
});


async function addToDB(req, res) {
  var post = new Post({
    uname: req.body.uname,
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

router.get('/',function(req,res,next){
  // return res.status(200).json(req.post);
  Post.find((err,docs) => {
    if(!err) {res.send(docs);}
    else {console.log('Err'+ JSON.stringify(err, undefined, 2));  }
  })
});

module.exports = router;