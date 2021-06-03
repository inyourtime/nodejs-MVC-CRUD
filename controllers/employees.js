const Employee = require('../models/employees')

exports.homeView = (req, res) => {
    res.render('index')
}

exports.createView = (req, res) => {
    res.render('create', { message_create: false })
}

exports.createEmployee = async (req, res) => {
    try {
        const new_employee = new Employee(req.body)
        await new_employee.save()
        res.render('create', {
            message_create: 'Successfully'
        })
    } catch (error) {
        res.send({
            message: error
        })
    }
}

exports.listEmployee = async (req, res) => {
    try {
        const employees = await Employee.find({})
        res.render('list', {
            employees: employees,
            message_update: false,
            message_delete: false
        })
    } catch (error) {
        res.send({
            message: error
        })
    }
}

exports.editPage = async (req, res) => {
    try {
        const id = req.params.id
        const employee = await Employee.findById(id)
        res.render('edit', {
            employee: employee
        })
    } catch (error) {
        res.send({
            message: error
        })
    }
}

exports.updateEmployee = async (req, res) => {
    try {
        const id = req.params.id
        await Employee.findByIdAndUpdate(id, {
            $set: req.body,
        })
        const employees = await Employee.find({})
        res.render('list', {
            employees: employees,
            message_update: 'Successfully',
            message_delete: false
        })
    } catch (error) {
        res.send({
            message: error
        })
    }
}

exports.deleteEmployee = async (req, res) => {
    try {
        const id = req.params.id
        await Employee.findByIdAndRemove(id)
        const employees = await Employee.find({})
        res.render('list', {
            employees: employees,
            message_delete: 'Successfully',
            message_update: false
        })
    } catch (error) {
        res.send({
            message: error
        })
    }
}