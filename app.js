const express = require('express');
const body_parse = require('body-parser');
const userRouter = require('./routers/user.router')

const app =express();

app.use(body_parse.json())

app.use('/',userRouter)

module.exports = app;
