const express = require('express');
const userController = require('../controller/userController');

const AuthMiddleware = require('../middleware/AuthMiddleware');
const TodoController = require('../controller/TodoController');

const router = express.Router()


router.post('/createProfile' , userController.createProfile)

router.post('/userLogin', userController.userLogin)
router.get('/selectProfile', AuthMiddleware , userController.selectProfile)
router.post('/profileUpdate' , AuthMiddleware , userController.profileUpdate)

router.post('/createTodo' , AuthMiddleware , TodoController.createTodo)
router.get('/selectTodo' , AuthMiddleware , TodoController.selectTodo)
router.post('/updateTodo' ,AuthMiddleware , TodoController.updateTodo )
router.post('/statusUpdateTodo' ,AuthMiddleware , TodoController.statusUpdateTodo )
router.get('/deleteTodo' ,AuthMiddleware , TodoController.deleteTodo )


module.exports =router;