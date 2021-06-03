const express = require('express')
const router = express.Router()
const employeeController = require('../controllers/employees')

// Index Page
router.get('/', employeeController.homeView)

// Create Page
router.get('/employee/create', employeeController.createView)

router.get('/employee/list', employeeController.listEmployee)

router.post('/employee/create', employeeController.createEmployee)

router.get('/employee/edit/:id', employeeController.editPage)

router.post('/employee/edit/:id', employeeController.updateEmployee)

router.get('/employee/delete/:id', employeeController.deleteEmployee)

module.exports = router