const express = require('express');
const router = express.Router();
const {postTodo, getTodos, deleteTodo, getSingleTodo,updateTodo} = require('../controllers/todocontroller');

router.post('/todos',postTodo);

router.get('/todos',getTodos);

router.delete('/todos/:todoId',deleteTodo);

router.get('/todos/:todoId',getSingleTodo);

router.put('/todos/:todoId', updateTodo);










module.exports = router;