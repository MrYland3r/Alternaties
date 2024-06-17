const Goal = require('../models/Goal');

// Create a new goal
exports.createGoal = async (req, res) => {
    try {
        const newGoal = new Goal({
            user: req.body.userId,  // Assuming user ID is passed in the request body
            title: req.body.title,
            description: req.body.description,
            deadline: req.body.deadline,
        });
        const savedGoal = await newGoal.save();
        res.status(201).json(savedGoal);
    } catch (error) {
        res.status(400).json({ message: 'Failed to create goal', error: error.message });
    }
};

// Retrieve all goals for a user
exports.getGoals = async (req, res) => {
    try {
        const goals = await Goal.find({ user: req.params.userId }); // Assuming user ID is passed as a URL parameter
        res.status(200).json(goals);
    } catch (error) {
        res.status(400).json({ message: 'Failed to get goals', error: error.message });
    }
};

// Update a specific goal
exports.updateGoal = async (req, res) => {
    try {
        const updatedGoal = await Goal.findByIdAndUpdate(req.params.goalId, req.body, { new: true });
        res.status(200).json(updatedGoal);
    } catch (error) {
        res.status(400).json({ message: 'Failed to update goal', error: error.message });
    }
};

// Delete a specific goal
exports.deleteGoal = async (req, res) => {
    try {
        await Goal.findByIdAndRemove(req.params.goalId);
        res.status(204).send('Goal deleted');
    } catch (error) {
        res.status(400).json({ message: 'Failed to delete goal', error: error.message });
    }
};
