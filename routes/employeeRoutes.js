const express = require("express");

const router = express.Router();

const userController = require("../controllers/employeeController");

router.get("/", userController.getAllEmployees);
router.get("/:id", userController.getEmployeeById);

router.post("/", userController.createEmployee);

router.patch("/:id", userController.updateEmployee);

router.delete("/:id", userController.deleteEmployee);

module.exports = router;
