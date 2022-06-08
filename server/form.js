// const express = require("express");
// const connection = require("express");
// const bodyparser = require("body-parser");
// const app = connection();
// const port = 8000;
// var login = {};
// const cors = require("cors");
// const dbconnection = require("./db");
// const { request } = require("express");
// const { response } = require("express");

// const fs = require("fs");
// const loggger = require('./logger/logger');
// const express = require("express");
// const res = require("express/lib/response");
// app.use(express.static("public"));

// const { response } = require("express");
// app.use(connection.static("public"));
// app.use(bodyparser.json());
// app.use(
//     cors({
//         origin: "http://localhost:4200",
//     })
// );

// app.post("/signup", (request, response) => {
//     console.log(request);
//     var object = {
//         fname: request.body.fname,
//         lname: request.body.lname,
//         uname: request.body.uname,
//         email: request.body.email,
//         password: request.body.password //formcontrolname
// confirm_password: request.body.cpsw,
// mobileno: request.body.mobileno,

// };

// dbconnection.insert(object);
// console.log("Data added");
// alert('data added');
// });
// app.post("/contact", (request, response) => {
//     console.log(request);
//     var object = {
//         email: request.body.email,
// mobileno: request.body.mobileno,

// password: request.body.password,//formcontrolname
// confirm_password: request.body.cpsw,
//     };

//     dbconnection.insert(object);
//     console.log("Data added");
// });
// app.get("/getUser", (request, response) => {
//     console.log(request);

//     console.log("Fetching Begins");

//     dbconnection.get("career_signup").then((res) => {
//         if (res) {
//             response.send(res);
//         } else {
//             response.send("error");
//         }
//     });
// });

// app.get("/getadmin", (request, response) => {
//     console.log(request);
//     var data = {
//         selector: {
//             type: "admin",
//         },
//     };
//     dbconnection.get(data, "career_signup").then((res) => {
//         if (res) {
//             response.send(res);
//         } else {
//             response.send("error");
//         }
//     });
//     response.render('db.js')
// });
// app.get("/getadminId/:id", (request, response) => {
//     dbconnection.getId(request.params.id, "career_signup").then((res) => {
//         if (res) {
//             response.send(res);
//         } else {
//             response.send("error");
//         }
//     });
// });

// app.get('/getadmindata/:id', (req, res) => {
//     var adminobject = {
//         selector: {
//             username: req.params.id,
//             type: 'admin',
//         },
//     };
//     console.log(adminobject);
//     dbconnection.career_signup
//         .find(adminobject)
//         .then((data) => {
//             console.log('data fetch from db', data);
//             res.send(data);
//         })
//         .catch((err) => {
//             console.log('error', err);
//         });
// });

// app.get("/getUser", (request, response) => {
//     console.log(request);
//     var data = {
//         selector: {
//             type: "user",
//         },
//     };
//     dbconnection.get(data, "career_signup").then((res) => {
//         if (res) {
//             response.send(res);
//         } else {
//             response.send("error");
//         }
//     });
// });
// app.get("/getUserId/:id", (request, response) => {
//     dbconnection.getId(request.params.id, "career_signup").then((res) => {
//         if (res) {
//             response.send(res);
//         } else {
//             response.send("error");
//         }
//     });
// });



// app.get("/getUserId/:id", (request, response) => {
//     dbconnection.getId(request.params.id, "career_signup").then((res) => {
//         if (res) {
//             response.send(res);
//         } else {
//             response.send("error");
//         }
//     });
// });
// app.delete("/delete/:id/:id1", (request, response) => {
//     dbconnection
//         .del_id(request.params.id, request.params.id1, "career_signup")
//         .then((res) => {
//             if (res) {
//                 response.send(res);
//             } else {
//                 response.send("error");
//             }
//         });
// });


// app.listen(port, (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(`htpp://localhost:8000`);
// })
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
const { request } = require("http");
const { response } = require("express");
const { nextTick } = require("process");
const cors = require("cors");
const dbconnection = require("./db");
const { Router } = require("express");
const res = require("express/lib/response");
const req = require("express/lib/request");
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
    var object = {
        username: request.body.username,
        phone: request.body.phone,
        email: request.body.email,
        blockname: request.body.blockname,
        password: request.body.password,
        confirmpassword: request.body.confirmpassword,
        type: "user",
    };

    dbconnection.insert(object);
});
app.post("/postquery", body('uname').custom(value => {
    return User.find({
        uname: value
    }).then(user => {
        if (user.length > 0) {
            return Promise.reject('Username must  greater than 0 letters')
        }
    });

}), (request, response) => {

    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }


    // dbconnection.insert(object);
});

app.post("/testquery", (request, response, next) => {
    console.log(request);
    var object = {
        uname: request.body.uname,
        javascript: request.body.javascript,
        html: request.body.html,
        css: request.body.css,
        c: request.body.c,
        matlab: request.body.matlab,
        python: request.body.python,
        // android: request.body.android,
        swift: request.body.swift,
        objc: request.body.objc,
        java: request.body.java,
        type: "testdata",
    };

    dbconnection.insert(object);
});

app.post("/tenthquery", (request, response, next) => {
    console.log(request);
    var object = {
        uname: request.body.uname,
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

});
app.post("/twelthquery", (request, response, next) => {
    console.log(request);
    var object = {
        uname: request.body.uname,
        sci: request.body.sci,
        phy: request.body.phy,
        che: request.body.che,
        bio: request.body.bio,
        mat: request.body.mat,
        art: request.body.art,
        hmt: request.body.hmt,
        bus: request.body.bus,
        acc: request.body.acc,
        os: request.body.os,
        type: "twelthdata",
    }
    dbconnection.insert(object);
});

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
    dbconnection.get(data, "career_signup").then((res) => {
        if (res) {
            response.send(res);
        } else {
            response.send("error");
        }
    });
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
var auth = function (req, res, next) {
    if (req.session && req.session.user === "amy" && req.session.admin)
        return next();
    else
        return res.sendStatus(401);
};
app.get('/login', function (req, res) {
    if (!req.query.username || !req.query.password) {
        res.send('login failed');
    } else if (req.query.username === "amy" || req.query.password === "amyspassword") {
        req.session.user = "amy";
        req.session.admin = true;
        res.send("login success!");
    }
});
app.get('/logout', function (req, res) {
    req.session.destroy();
    res.send("logout success!");
});

// Get content endpoint
app.get('/content', auth, function (req, res) {
    res.send("You can only see this after you've logged in.");
});
app.listen(port, (err) => {
    if (err) {
        return console.log("something bad happened", err);

    }

    winlogger.info("SUCCESS", "Server is running!!!");

    console.log(`server is listening on http://localhost:${port}`);
});