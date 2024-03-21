const Employee = require("../models/Employee");

const getAllEmployees = async (req, res) => {
  console.log("getting all employees");
  try {
    const employees = await Employee.find();
    console.log(employees);
    res.status(200).json({ success: true, count: employees.length, data: employees });
  } catch (error) {
    res.status(500).json({ success: false, message: "failed to fetch employees" });
  }
};

const getEmployeeById = async (req, res) => {
  console.log(req.params);
  console.log("getting employee by id");
  try {
    const employee = await Employee.findById(req.params.id);
    console.log(employee);
    res.status(200).json({ success: true, data: employee });
  } catch (error) {
    res.status(500).json({ success: false, message: "employee not found" });
  }
};

const createEmployee = async (req, res) => {
  try {
    if (!req.body.name || !req.body.role) {
      return res.status(400).json({ success: false, message: "All fields required!" });
    }

    if (isNaN(req.body.role) || req.body.role > 3 || req.body.role < 1) {
      return res.status(400).json({
        success: false,
        message: "Role must be a number within 1-3.",
        receivedValue: req.body.role,
      });
    }

    const newEmployee = {
      name: req.body.name,
      role: req.body.role,
    };

    const employee = await Employee.create(newEmployee);

    return res
      .status(201)
      .json({ success: true, message: "new employee created!", data: employee });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: "failed to create new employee" });
  }
};

const updateEmployee = async (req, res) => {
  const { id } = req.params;

  if (!req.body.name || !req.body.role) {
    return res.status(400).json({ success: false, message: "All fields required!" });
  }

  try {
    const employee = await Employee.findById(id);

    if (!employee) {
      return res.status(404).json({ success: false, message: "Employee not found." });
    }

    employee.name = req.body.name;
    employee.role = req.body.role;

    const updatedEmployee = await employee.save();

    return res
      .status(201)
      .json({ success: true, message: "Update employee success", data: updatedEmployee });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Update employee failed" });
  }
};

const deleteEmployee = async (req, res) => {
  const { id } = req.params;

  try {
    const employee = await Employee.findById(id);

    if (!employee) {
      return res.status(404).json({ success: false, message: "Employee not found." });
    }

    const deletedEmployee = await employee.deleteOne();

    return res.status(201).json({
      success: true,
      message: "Delete employee success",
      data: deletedEmployee,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Delete employee failed" });
  }
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
