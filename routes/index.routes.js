const router = require('express').Router();

// подключаем один конкретный роут
const RegistrationRouter = require('./registration.routes');
const HomeRouter = require('./home.routes');
const ThemeRouter = require('./theme.router');
const QuestionRouter = require('./question.routes');

// миделварка для одного конкретного роута
router.use('/', RegistrationRouter);
router.use('/home', HomeRouter);
router.use('/theme', ThemeRouter);
router.use(`/theme`, QuestionRouter);

module.exports = router;
