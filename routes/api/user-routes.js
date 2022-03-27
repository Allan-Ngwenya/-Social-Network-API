const router = require('express').Router();
const {
	getAllUsers,
	getUserById,
	createUser,
	addFriend,
	updateUser,
	deleteUser,
	removeFriend
} = require('../../controllers/user-controller');