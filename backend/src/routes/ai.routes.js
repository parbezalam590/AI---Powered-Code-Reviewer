const express = require('express'); // Import Express
const aiController = require("../controllers/ai.controller"); // Import the AI controller   

const router = express.Router();// Initialize Router


router.post("/get-review",aiController.getReview); // Define a GET route at /get-response

module.exports = router; // Export the router for use in other files