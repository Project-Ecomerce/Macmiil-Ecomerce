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
      return;
    }

    // BUILT IN USERID
    return data;
  });

  req.userId = decoded.userId;

  next();
};

module.exports = protect;