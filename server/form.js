const express = require("express");
const connection = require("express");
const bodyparser = require("body-parser");
const app = connection();
let session = require('express-session');
app.use(express.static("public"));
const port = 8000;
const winlogger = require("./logger/logger");
const { body, validationResult } = require('express-validator')
const file = require("fs");
const nodemailer = require('nodemailer');
const { object1 } = require("joi");
const cors = require("cors");
const dbconnection = require("./db");
const { Router } = require("express");
const req = require("express/lib/request");
const validation = require("./validator/validation");
const controller = require('./controller/careercontroller')

app.use(express.static("public"));
app.use(connection.static("public"));
app.use(bodyparser.json());
app.use(
    cors({
        origin: "http://localhost:4200",
    })
);
app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));
app.post("/postquery", (request, _response, _next) => {
    console.log(request);
    let errorValidation = validation.signupForm.validate(request.body);
    if (!errorValidation.error) {
        let object = {
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

app.post("/testquery", (request, _response, _next) => {
    console.log(request);
    let errorValidation = validation.testForm.validate(request.body);
    if (!errorValidation.error) {
        let object = {
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

app.post("/tenthquery", (request, _response, _next) => {
    console.log(request);
    let errorValidation = validation.tenthForm.validate(request.body);
    if (!errorValidation.error) {
        let object = {
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
app.post("/twelthquery", (request, _response, _next) => {
    console.log(request);
    let errorValidation = validation.twelthForm.validate(request.body);
    if (!errorValidation.error) {
        let object = {
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
app.post("/counselling", (request, _response, _next) => {
    console.log(request);
    let errorValidation = validation.counsellingForm.validate(request.body);
    if (!errorValidation.error) {
        let object = {
            username: request.body.username,
            phone: request.body.phone,
            email: request.body.email,
            qualification: request.body.qualification,
            counsellor: request.body.counsellor,
            time: request.body.time,
            type: "counselling",
        }
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'visionacademy813@gmail.com',
                pass: 'fdmatwytijnwtzdh'
            }
        });

        let mailOptions = {
            from: 'visionacademy813@gmail.com',
            to: object.email,
            subject: 'Counselling',
            text: `Booking successful! Here your meeting-link: meet.google.com/ffd-awrj-ydw   and timing  is ${object.time} and your counsellor is ${object.counsellor}`

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
app.post("/contact", (request, _response, _next) => {
    console.log(request);
    let errorValidation = validation.contactForm.validate(request.body);
    if (!errorValidation.error) {
        let object = {
            name: request.body.name,
            email: request.body.email,
            phone: request.body.phone,
            txt: request.body.txt,
            type: "feedback",
        }
        dbconnection.insert(object);
    }
    else {
        winlogger.info('error', errorValidation);
    }
});

app.get("/getUser", (request, response) => {
    console.log(request);
    let data = {
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


});
app.get("/getUser1", (request, response) => {
    console.log(request);
    let data = {
        selector: {
            type: "testdata",
        },
    };
    controller.testdatacheck(data).then((respond) => {
        if (respond) {
            console.log("Data fetched", respond);
            response.json(respond)

        }
        else {
            response.status(404).send({ fail: "Fetching is failed" });
        }
    })


});
app.get("/getUser2", (request1, response1) => {
    console.log(request1);
    let data = {
        selector: {
            type: "tenthdata",
        },
    };
    controller.testdatacheck(data).then((respond1) => {
        if (respond1) {
            console.log("Data fetched", respond1);
            response1.json(respond1)

        }
        else {
            response1.status(404).send({ fail: "Fetching is failed" });
        }
    })

});
app.get("/getUser3", (request2, response2) => {
    console.log(request2);
    let data = {
        selector: {
            type: "counselling",
        },
    };
    controller.testdatacheck(data).then((respond2) => {
        if (respond2) {
            console.log("Data fetched", respond2);
            response2.json(respond2)

        }
        else {
            response2.status(404).send({ fail: "Fetching is failed" });
        }
    })

});
app.get("/getUser4", (request3, response3) => {
    console.log(request3);
    let data = {
        selector: {
            type: "twelthdata",
        },
    };
    controller.testdatacheck(data).then((respond) => {
        if (respond) {
            console.log("Data fetched", respond);
            response3.json(respond)

        }
        else {
            response3.status(404).send({ fail: "Fetching is failed" });
        }
    })

});
app.get("/getUser5", (request4, response4) => {
    console.log(request4);
    let data = {
        selector: {
            type: "feedback",
        },
    };
    controller.testdatacheck(data).then((respond) => {
        if (respond) {
            console.log("Data fetched", respond);
            response4.json(respond)

        }
        else {
            response4.status(404).send({ fail: "Fetching is failed" });
        }
    })

});
app.get("/getUserId/:id", (request, response) => {
    dbconnection.getId(request.params.id, "career_signup").then((_res) => {
        if (_res) {
            response.send(_res);
        } else {
            response.send("error");
        }
    });
});







app.get("/getadmin", (request, response) => {
    console.log(request);
    let data = {
        selector: {
            type: "admin",
        },
    };
    controller.adminlogincheck(data).then((respond) => {
        if (respond) {
            console.log("Data fetched", respond);
            response.json(respond)
        }
        else {
            response.status(404).send({ fail: "Admin login authentication failed" });
        }
    })
});
app.delete("/delete/:id/:id1", (request, response) => {
    dbconnection
        .del_id(request.params.id, request.params.id1, "career_signup")
        .then((res_5) => {
            if (res_5) {
                response.send(res_5);
            } else {
                response.send("error");
            }
        })
        .catch((err) => {
            console.log("UserNot exist!!!", err);
        });
});

app.listen(port, (err) => {
    if (err) {
        return console.log("something bad happened", err);

    }

    winlogger.info("SUCCESS", "Server is running!!!");

    console.log(`server is listening on http://localhost:${port}`);
});