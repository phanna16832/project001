// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

// Middleware to parse JSON body
app.use(bodyParser.json());

// Simulated user data stored in a dictionary
const users = {
    'test@example.com': '888888',
    'user2@example.com': 'password2',
    '1234@gmail.com': '1234'  ,
    'x@gmail.com' : '12345'// Assuming '1234' is a valid email for testing purposes
};

// Login endpoint
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Check if the email and password match any user's credentials
    const isValidUser = users[email] && users[email] === password;

    // Send response
    res.status(200).json({ success: isValidUser });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});

// 404 Not Found middleware
app.use((req, res) => {
    res.status(404).send('Not Found');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
