var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'contact' });
});

router.post('/send', function(req, res){
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'mr.akashbijwe@gmail.com',
      pass: 'pass'
    }
  });

  var mailOptions = {
    from: 'Akash Bijwe <mr.akashbijwe@gmail.com>',
    to: 'mr.akashbijwe@gmail.com',
    subject: 'Website Submission',
    text: 'Ypu have a new submisssion with following details. Name: '+req.body.name+' Email: '+req.body.email+' Message: '+req.body.message+' ',
    html: '<p>You got a  new submission with the following details</p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.message+'</li></ul>'
  };

  transporter.sendMail(mailOptions, function(err, info){
    if(err){
      console.log("error sending email", err);
      res.redirect('/');
    }else{
      console.log("Email send successfully", info.response);
      res.redirect('/');
    }
  });
});

module.exports = router;
