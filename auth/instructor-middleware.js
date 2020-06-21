module.exports = {
  checkRole,
};

function checkRole(role) {
  return (req, res, next) => {
    if (req.decodedToken.role === role) {
      next();
    } else {
      res.status(403).json({ message: "You are not authorized" });
    }
  };
}
