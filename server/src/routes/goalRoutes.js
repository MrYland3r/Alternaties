const express = require('express');
const router = express.Router();
const { createGoal, getGoals, updateGoal, deleteGoal } = require('../controllers/goalController');

// Goal CRUD operations
router.post('/', createGoal);      // Create a new goal
router.get('/', getGoals);         // Retrieve all goals for a user
router.put('/:goalId', updateGoal); // Update a specific goal
router.delete('/:goalId', deleteGoal); // Delete a specific goal

module.exports = router;
