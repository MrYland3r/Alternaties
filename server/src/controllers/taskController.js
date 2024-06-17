const Task = require('../models/Task');

// Create a new task under a goal
exports.createTask = async (req, res) => {
    try {
        const newTask = new Task({
            goal: req.body.goalId,
            title: req.body.title,
            description: req.body.description,
            deadline: req.body.deadline,
        });
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (error) {
        res.status(400).json({ message: 'Failed to create task', error: error.message });
    }
};

// Retrieve all tasks for a specific goal
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ goal: req.params.goalId });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(400).json({ message: 'Failed to get tasks', error: error.message });
    }
};

// Update a specific task
exports.updateTask = async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.taskId, req.body, { new: true });
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(400).json({ message: 'Failed to update task', error: error.message });
    }
};

// Mark a task as completed
exports.completeTask = async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.taskId, { isCompleted: true }, { new: true });
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(400).json({ message: 'Failed to complete task', error: error.message });
    }
};

// Delete a specific task
exports.deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndRemove(req.params.taskId);
        res.status(204).send('Task deleted');
    } catch (error) {
        res.status(400).json({ message: 'Failed to delete task', error: error.message });
    }
};
