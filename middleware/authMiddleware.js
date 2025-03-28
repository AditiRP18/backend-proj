const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { verifyToken } = require('../config/jwt');

const authMiddleware = async (req, res, next) => {
  // Check for token in Authorization header
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    return res.status(401).json({ 
      message: 'No token provided' 
    });
  }

  // Extract token (expecting "Bearer TOKEN")
  const token = authHeader.split(' ')[1];

  try {
    // Verify token
    const decoded = verifyToken(token);
    
    if (!decoded) {
      return res.status(401).json({ 
        message: 'Invalid or expired token' 
      });
    }

    // Find user and attach to request
    const user = await User.findById(decoded.id).select('-password');
    
    if (!user) {
      return res.status(401).json({ 
        message: 'User not found' 
      });
    }

    // Attach user to request object
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ 
      message: 'Authentication failed',
      error: error.message 
    });
  }
};

module.exports = authMiddleware;