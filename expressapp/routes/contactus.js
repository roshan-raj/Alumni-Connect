var express = require('express');
var router = express.Router();
var Post = require('../models/contact');

router.post('/contact', function (req, res, next) {
  addToDB(req, res);
});


async function addToDB(req, res) {
  var contact = new Contact({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    feedback: req.body.feedback
  });

  try {
    doc = await contact.save();
    return res.status(201).json(doc);
  }
  catch (err) {
    return res.status(501).json(err);
  }
}

router.get('/',function(req,res,next){
  Contact.find((err,docs) => {
    if(!err) {res.send(docs);}
    else {console.log('Err'+ JSON.stringify(err, undefined, 2));  }
  })
});

module.exports = router;