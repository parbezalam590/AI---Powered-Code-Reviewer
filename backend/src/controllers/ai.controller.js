const aiService = require("../services/ai.service"); // Import the AI service

module.exports.getReview = async (req,res) => { // Controller function to handle AI response requests
    const code = req.body.code;

    if(!code) {
        return res.status(400).json({error:"Prompt is required"});
    }

    const  response = await aiService(code); // Get AI response from the service

    res.send(response); // Send the AI response back to the client  
}