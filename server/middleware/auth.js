const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');


const authMiddleware = async (req, res, next) => { 
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    res
.status(StatusCodes.UNAUTHORIZED)
.json({ error: 'Missing or invalid token' });

  }
  const token = authHeader.split(' ')[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_KEY);
    
    req.user = payload;
    next();
  } catch (error) {
    res
.status(StatusCodes.UNAUTHORIZED)
.json({ error: 'Missing or invalid token' });

  }
  
};
module.exports = authMiddleware;
