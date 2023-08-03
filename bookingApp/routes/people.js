const express = require('express');
const router = express.Router();
const {postAppointment,getAppointments,deleteAppointment,editAppointment} = require('../controllers/peoplecontroller');

router.post('/appointments', postAppointment);

router.get('/appointments', getAppointments);

router.delete('/appointments/:appointmentId',deleteAppointment);

router.patch('/appointments/:appointmentId',editAppointment);
module.exports = router;