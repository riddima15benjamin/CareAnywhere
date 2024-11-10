const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json()); // For parsing JSON request bodies

// Routes
app.use('/api/auth', authRoutes);

// Start server
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

}
