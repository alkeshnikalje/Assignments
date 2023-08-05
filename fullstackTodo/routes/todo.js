const express = require('express');
const router = express.Router();
const {postTodo, getTodos, deleteTodo, getSingleTodo} = require('../controllers/todocontroller');

router.post('/todos',postTodo);

router.get('/todos',getTodos);

router.delete('/todos/:todoId',deleteTodo);

router.get('/todos/:todoId',getSingleTodo);











module.exports = router;