const express = require("express");
var cors = require('cors')
var bodyParser = require("body-parser");
var app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = 4201;

const nodemailer = require("nodemailer");

app.post("/email", (req, res) => {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: req.body.email.usuario,
            pass: req.body.email.pass
        }
    });
    var mailOptions = {
        from: 'llius619@gmail.com', 
        to: 'llius619@gmail.com', 
        subject: 'Nueva incidencia',
        text: req.body.email.cuerpo
        // html: '<b>Hello world ✔</b>' 
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.status(500);
            res.json({ status: 500, msg: 'Error enviando email' });
        } else {
            console.log('Message sent: ' + info.response);
            res.status(200);
            res.json({ status: 200, msg: info.response });
        };
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));