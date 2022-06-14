const { response } = require('express');
const db = require('../db');
const winlogger = require('../logger/logger');

const logincheck = (data) => {



    return new Promise((resolve, reject) => {

        if (data) {
            let returnValue = db.get(data, "career_signup").then((res) => {
                return res;
            }).catch(error => {
                winlogger.error('Login is invalid!', error);
            })
            return resolve(returnValue);
        }
        else {
            return reject();
        }


    })


}
const adminlogincheck = (data) => {



    return new Promise((resolve, reject) => {

        if (data) {
            let returnValue = db.get(data, "career_signup").then((res) => {
                return res;
            }).catch(error => {
                winlogger.error('Login is invalid!', error);
            })
            return resolve(returnValue);
        }
        else {
            return reject();
        }


    })


}
const testdatacheck = (data) => {



    return new Promise((resolve, reject) => {

        if (data) {
            let returnValue = db.get(data, "career_signup").then((res) => {
                return res;
            }).catch(error => {
                winlogger.error(' invalid!', error);
            })
            return resolve(returnValue);
        }
        else {
            return reject();
        }


    })


}




module.exports = { logincheck, adminlogincheck, testdatacheck };