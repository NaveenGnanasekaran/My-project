const Cloudant = require("@cloudant/cloudant");
// const { type } = require("express/lib/response");
const { data } = require("./logger/logger");
var url =
    "https://75b0afe3-3fa7-477b-8352-bdcfcd522a16-bluemix.cloudantnosqldb.appdomain.cloud/";
var username = "apikey-v2-2djdlrrbf736ap4aa6rlre2x1j1wf65v1ti1e8x2bihn";
var password = "3bc2893c0a2a1ec42d9b17840b18447b";
var _tmp = "name";
var cloudant = Cloudant({ url: url, username: username, password: password });
// data = {
//     selector: {
//         id: 'user',
//         password: 'naveen'
//     }
// }

insert = function (paramsvalue) {
    console.log(paramsvalue);
    cloudant
        .use("career_signup")//database name
        .insert(paramsvalue)
        .then((data) => {
            console.log("Login Data Inserted into CDB" + data);
            // alert("data added");
        })
        .catch((err) => {
            console.log(err);
        });
};
insert1 = function (paramsvalue) {
    console.log(paramsvalue);
    cloudant
        .use("housing-software")
        .insert(paramsvalue)
        .then((data) => {
            console.log("Data Inserted into Cloud database" + data);
        })
        .catch((err) => {
            console.log(err);
        });
};

insert2 = function (paramsvalue) {
    console.log(paramsvalue);
    cloudant
        .use("housing-software")
        .insert(paramsvalue)
        .then((data) => {
            console.log("Feedback posted to cloud database" + data);
        })
        .catch((err) => {
            console.log(err);
        });
};
find = function (blockdata, dbname) {
    return cloudant.use(dbname).find(blockdata);
};

get = function (admindata, dbname) {
    return cloudant.use(dbname).find(admindata);
};
getbill = function (dbname) {
    return cloudant.use(dbname).list();
};
getId = function (id, dbname) {
    return cloudant.use(dbname).get(id);
};
del_id = function (id, id1, dbname) {
    return cloudant.use(dbname).destroy(id, id1);
};
// get = function (dbname) {
//     return cloudant.use(dbname).list();
// };
module.exports = {
    get,
    getId,
    insert,
    getbill,
    insert1,
    insert2,
    find,
    del_id,
};
// get = function (admindata, dbname) {
//     return cloudant.use(dbname).find(admindata);
// };
// create = function (id, dbname,) {
//     return cloudant.use(dbname).insert(id);
// }

// getId = function (id, dbname) {
//     return cloudant.use(dbname).get(id);
// };
// del_id = function (id, id1, dbname) {
//     return cloudant.use(dbname).destroy(id, id1);
// };
// // module.exports = { insert };
// module.exports = { get, getId, insert, del_id, create };
