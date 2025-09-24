require('dotenv').config(); // Load environment variables from .env file
const app = require('./src/app'); // Import the Express app



app.listen(3000, () => { // Start the server
  console.log('Server is running on port 3000');
});