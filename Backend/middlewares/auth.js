const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  const token = req.headers?.authorization?.split(' ')[1];

  if (!token) {
    res.json({
      status: 'Error',
      message: 'You are not authenticated',
    });
    return;
  }

  const decoded = jwt.verify(token, process.env.JWT_SEC, (err, data) => {
    if (err) {
      res.json({
        status: 'Error',
        message: 'You are not authenticated',
      });
      return
    }
    return data;

    // BUILT IN USERID
    // return data;

    
  });
  
  req.userId = decoded.user
  

  next();
};

module.exports = protect;