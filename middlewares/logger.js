module.exports = (req, res, next) => {
  console.log(`\n`);
  console.log(req.method, req.url);
  console.log(`\n`);
  next();
};