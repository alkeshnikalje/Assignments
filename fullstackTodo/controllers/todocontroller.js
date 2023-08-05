const express = require('express');
const Todo = require('../models/todo');


exports.postTodo = async (req,res)=>{
    try{
        const {title, description} = req.body;
        const newTodo = await Todo.create({
            title,
            description
        })
        return res.json(newTodo);
    }
    catch(err){
        res.status(500).json({msg: err.message});
    }
}

exports.getTodos = async (req,res)=>{
    try{
        const todos = await Todo.findAll();
        return res.json(todos);
    }
    catch(err){
        res.status(500).json({msg: err.message});
    }
}

exports.getSingleTodo = async (req,res)=>{
    try{
        const id = req.params.todoId;
        const todo = await Todo.findByPk(id);
        if(!todo){
            return res.status(404).json({msg: "todo not found"});
        }
        return res.json(todo);
    }
    catch(err){
        res.status(500).json({msg: err.message});
    }
}

exports.deleteTodo = async (req,res)=>{
    try{
        const id = req.params.todoId
        const TodoToBeDeleted = await Todo.findByPk(id);
        if(!TodoToBeDeleted){
            return res.status(404).json({msg: "todo not found"});
        }
        await TodoToBeDeleted.destroy();
        return res.json({msg: "todo deleted successfully"});
    }
    catch(err){
        res.status(500).json({msg: err.message});
    }
}