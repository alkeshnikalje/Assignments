const express = require('express');
const People = require('../models/people');
const sequelize = require('../config/database');

exports.postAppointment = async (req,res)=>{
    try{
        const {name, phoneNumber, email} = req.body;
        const newPerson = await People.create({
            name : name,
            phoneNumber : phoneNumber,
            email : email
        });
        return res.json(newPerson);
    }
    catch(err){
        res.status(500).json({msg: err.message});
    }
}

exports.getAppointments = async (req,res)=>{
    try{
        const appointments = await People.findAll();
        return res.json({allAppointments : appointments});
    }
    catch(err){
        res.status(500).json({msg: err.message});
    }
}

exports.deleteAppointment = async (req,res)=>{
    try{
        const id = req.params.appointmentId;
        const appointment = await People.findByPk(id);
        if(!appointment){
            return res.status(404).json({msg: "person not found"});
        }
        await appointment.destroy();
        res.status(200).json({ msg: "Appointment deleted successfully" });
    }
    catch(err){
        res.status(500).json({msg: err.message});
    }
}

exports.editAppointment = async (req,res)=>{
    try{
        const id = req.params.appointmentId;
        const {name, phoneNumber, email} = req.body;
        const appointment = await People.findByPk(id);
        if(!appointment){
            return res.status(404).json({msg: "person not found"});
        }
        if (name) appointment.name = name;
        if (phoneNumber) appointment.phoneNumber = phoneNumber;
        if (email) appointment.email = email;

        await appointment.save();
        return res.json(appointment);
    
    }
    catch(err){
        res.status(500).json({msg: err.message});
    }
}   