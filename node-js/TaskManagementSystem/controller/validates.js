const express =require('express')
const Joi = require('joi')

const validator = Joi.object({
    email : Joi.string().email().required(),
    user_password : Joi.string().min(5).required()
})


module.exports = validator