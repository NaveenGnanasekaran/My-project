const express = require("express");
const connection = require("express");
const bodyparser = require("body-parser");
const app = connection();
// session = require('express-session');
app.use(express.static("public"));
const port = 8000;
const winlogger = require("./logger/logger");
const { body, validationResult } = require('express-validator')
var login = {};
const file = require("fs");

const cors = require("cors");
const dbconnection = require("./db");
const { Router } = require("express");
const res = require("express/lib/response");
const req = require("express/lib/request");
const validation = require("./validator/validation");
const controller = require('./controller/careercontroller')
// const session = require("express-session");
// const mailservice = require("./mail");
app.use(express.static("public"));
app.use(connection.static("public"));
app.use(bodyparser.json());
app.use(
    cors({
        origin: "http://localhost:4200",
    })
);
// var session = require('express-session');
// app.use(session({
//     secret: '2C44-4D44-WppQ38S',
//     resave: true,
//     saveUninitialized: true
// }));
app.post("/postquery", (request, response, next) => {
    console.log(request);
    let errorValidation = validation.signupForm.validate(request.body);
    console.log(errorValidation, 'hello');
    if (!errorValidation.error) {
        var object = {
            username: request.body.username,
            phone: request.body.phone,
            email: request.body.email,
            password: request.body.password,
            type: "user",
        };

        dbconnection.insert(object);

    }
    else {
        winlogger.info('error from post');
    }

});
// app.post("/postquery", body('uname').custom(value => {
//     return User.find({
//         uname: value
//     }).then(user => {
//         if (user.length > 0) {
//             return Promise.reject('Username must  greater than 0 letters')
//         }
//     });

// }), (request, response) => {

//     const errors = validationResult(request);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({
//             errors: errors.array()
//         });
//     }


//     // dbconnection.insert(object);
// });

app.post("/testquery", (request, response, next) => {
    console.log(request);
    let errorValidation = validation.testForm.validate(request.body);
    console.log(errorValidation, 'hi');
    if (!errorValidation.error) {
        var object = {
            username: request.body.username,
            javascript: request.body.javascript,
            html: request.body.html,
            css: request.body.css,
            c: request.body.c,
            matlab: request.body.matlab,
            python: request.body.python,
            swift: request.body.swift,
            objectivec: request.body.objectivec,
            java: request.body.java,
            type: "testdata",
        };

        dbconnection.insert(object);

    }
    else {
        winlogger.info('error from testdata post')
    }

});

app.post("/tenthquery", (request, response, next) => {
    console.log(request);
    let errorValidation = validation.tenthForm.validate(request.body);
    console.log(errorValidation, 'salam');
    if (!errorValidation.error) {
        var object = {
            username: request.body.username,
            higher: request.body.higher,
            science: request.body.science,
            arts: request.body.arts,
            commerce: request.body.commerce,
            iti: request.body.iti,
            tech: request.body.tech,
            diploma: request.body.diploma,
            polytechnic: request.body.polytechnic,
            vocation: request.body.vocation,
            type: "tenthdata",
        }
        dbconnection.insert(object);
    }
    else {
        winlogger.info('error', errorValidation);
    }


});
app.post("/twelthquery", (request, response, next) => {
    console.log(request);
    let errorValidation = validation.twelthForm.validate(request.body);
    console.log(errorValidation, 'namaskaram');
    if (!errorValidation.error) {
        var object = {
            username: request.body.username,
            science: request.body.science,
            physics: request.body.physics,
            chemistry: request.body.chemistry,
            biology: request.body.biology,
            maths: request.body.maths,
            arts: request.body.arts,
            humanity: request.body.humanity,
            business: request.body.business,
            accountancy: request.body.accountancy,
            openstreams: request.body.openstreams,
            type: "twelthdata",
        }
        dbconnection.insert(object);
    }
    else {
        winlogger.info('error', errorValidation);
    }
});
app.post("/counselling", (request, response, next) => {
    console.log(request);
    let errorValidation = validation.counsellingForm.validate(request.body);
    console.log(errorValidation, 'namaskaram');
    if (!errorValidation.error) {
        var object = {
            username: request.body.username,
            phone: request.body.phone,
            email: request.body.email,
            qualification: request.body.qualification,
            time: request.body.time,
            type: "counselling",
        }
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'visionacademy813@gmail.com',
                pass: 'fdmatwytijnwtzdh'
            }
        });

        var mailOptions = {
            from: 'visionacademy813@gmail.com',
            to: object.email,
            subject: 'Counselling',
            text: 'Booking successful! Here your meeting-link: meet.google.com/ffd-awrj-ydw',
            // attachments: [
            //     {
            //         path: '\My-project\career-planning\src\images'
            //     }
            // ]
        };
        dbconnection.insert(object);
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }
    else {
        winlogger.info('error', errorValidation);
    }
});
var nodemailer = require('nodemailer');
const { object } = require("joi");





// app.post("/post_query", (request, response, next) => {
//     console.log(request);
//     var object = {
//         block: request.body.block,
//         maintainance: request.body.maintainance,
//         housetax: request.body.housetax,
//         watertax: request.body.watertax,
//         parking: request.body.parking,
//         charity: request.body.charity,
//         type: "bill",
//     };

//     dbconnection.insert1(object);
// });

// app.post("/post__query", (request, response, next) => {
//     console.log(request);
//     var object = {
//         name: request.body.name,
//         email: request.body.email,
//         blockname: request.body.blockname,
//         category: request.body.category,
//         msg: request.body.msg,
//         type: "feedback",
//     };

//     dbconnection.insert2(object);
// });

app.get("/getUser", (request, response) => {
    console.log(request);
    var data = {
        selector: {
            type: "user",
        },
    };
    controller.logincheck(data).then((respond) => {
        if (respond) {
            console.log("Data fetched", respond);
            response.json(respond)

        }
        else {
            response.status(404).send({ fail: "Login authentication failed" });
        }
    })
    // dbconnection.get(data, "career_signup").then((res) => {
    //     if (res) {
    //         response.send(res);
    //     } else {
    //         response.send("error");
    //     }
    // });

});
app.get("/getUserId/:id", (request, response) => {
    dbconnection.getId(request.params.id, "career_signup").then((res) => {
        if (res) {
            response.send(res);
        } else {
            response.send("error");
        }
    });
});





app.delete("/delete/:id/:id1", (request, response) => {
    dbconnection
        .del_id(request.params.id, request.params.id1, "career_signup")
        .then((res) => {
            if (res) {
                response.send(res);
            } else {
                response.send("error");
            }
        });
});

app.get("/getadmin", (request, response) => {
    console.log(request);
    var data = {
        selector: {
            type: "adminid",
        },
    };
    dbconnection.get(data, "career_signup").then((res) => {
        if (res) {
            response.send(res);
        } else {
            response.send("error");
        }
    });
});
app.get("/getadminId/:id", (request, response) => {
    dbconnection.getId(request.params.id, "career_signup").then((res) => {
        if (res) {
            response.send(res);
        } else {
            response.send("error");
        }
    });
});

// app.listen(port, (err) => {
//     if (err) {
//         return console.log("something bad happened", err);
//     }

//     winlogger.info("SUCCESS", "Server is running!!!");

//     console.log(`server is listening on http://localhost:${port}`);
// });

// app.get("/getUser", (request, response) => {
//     console.log(request);

//     console.log("Fetching....");

//     dbconnection.get("career_signup").then((res) => {
//         if (res) {
//             response.send(res);
//         } else {
//             response.send("error");
//         }
//     });
// });


app.listen(port, (err) => {
    if (err) {
        return console.log("something bad happened", err);

    }

    winlogger.info("SUCCESS", "Server is running!!!");

    console.log(`server is listening on http://localhost:${port}`);
});