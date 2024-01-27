const errorHandler = (err, req, res, next) => {
  console.log(err);

  return res.status(500).json({
    message: 'Try again later'
  });
};

module.exports = errorHandler;