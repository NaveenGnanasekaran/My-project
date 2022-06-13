const Cloudant = require("@cloudant/cloudant");
const { data } = require("./logger/logger");
let url =
    "https://75b0afe3-3fa7-477b-8352-bdcfcd522a16-bluemix.cloudantnosqldb.appdomain.cloud/";
let username = "apikey-v2-2djdlrrbf736ap4aa6rlre2x1j1wf65v1ti1e8x2bihn";
let password = "3bc2893c0a2a1ec42d9b17840b18447b";
let _tmp = "name";
let cloudant = Cloudant({ url: url, username: username, password: password });

let insert = function (paramsvalue) {
    console.log(paramsvalue);
    cloudant
        .use("career_signup")
        .insert(paramsvalue)
        .then((data) => {
            console.log("Login Data Inserted into CDB" + data);
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
