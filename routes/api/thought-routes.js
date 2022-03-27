const router = require('express').Router();

const {
	getAllThoughts,
	getThoughtById,
	createThought,
	addReaction,
	updateThought,
	deleteThought,
	removeReaction
} = require('../../controllers/thought-controller')