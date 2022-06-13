const joi = require("joi");
const signupForm = joi.object({
    username: joi.string().min(5).required(),
    phone: joi.number().required(),
    email: joi.string().email().regex(/^([\w]*[\w\.]*(?!\.)@gmail.com)/).required(),
    password: joi.string().regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/).required()
})
const testForm = joi.object({
    username: joi.string().min(3).required(),
    javascript: joi.required(),
    html: joi.required(),
    css: joi.required(),
    c: joi.required(),
    matlab: joi.required(),
    python: joi.required(),
    swift: joi.required(),
    objectivec: joi.required(),
    java: joi.required(),

})
const tenthForm = joi.object({
    username: joi.string().min(3).required(),
    higher: joi.required(),
    science: joi.required(),
    arts: joi.required(),
    commerce: joi.required(),
    iti: joi.required(),
    tech: joi.required(),
    diploma: joi.required(),
    polytechnic: joi.required(),
    vocation: joi.required(),

})
const twelthForm = joi.object({
    username: joi.string().min(3).required(),
    science: joi.required(),
    physics: joi.required(),
    chemistry: joi.required(),
    biology: joi.required(),
    maths: joi.required(),
    arts: joi.required(),
    humanity: joi.required(),
    business: joi.required(),
    accountancy: joi.required(),
    openstreams: joi.required(),

})

const counsellingForm = joi.object({
    username: joi.string().min(3).required(),
    phone: joi.number().required(),
    email: joi.string().email().regex(/^([\w]*[\w\.]*(?!\.)@gmail.com)/).required(),
    qualification: joi.string().required(),
    time: joi.required()




})

module.exports = { signupForm, testForm, tenthForm, twelthForm, counsellingForm }