module.exports = function (req, res, next) {
  console.log("Checking authentication");
  if (typeof req.headers['authorization'] === "undefined" || req.headers['authorization'] === null) {
    console.log(req.headers['authorization'])
    req.user = null;
    console.log("FAIL")
  } else {
    console.log("SUCCESS")
    var token = req.headers['authorization'];
    var decodedToken = jwt.decode(token, { complete: true }) || {};
    req.user = decodedToken.payload;
  }
  next();
}
