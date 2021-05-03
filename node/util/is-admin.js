module.exports = (req, res, next) => {
  const userType = req.person.user_type;
  if (!userType === "ADMIN") return res.sendStatus(400);
  next();
};
