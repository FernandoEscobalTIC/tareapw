import jwt from 'jsonwebtoken';
import utils from "../utils.js";

function verifyToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).json({ error: 'Token nulo' });
  }

  jwt.verify(token, utils.validateSecretKey, (err, decodedToken) => {
    if (err) {
      return res.status(401).json({ error: 'Token no válido' });
    }

    req.userId = decodedToken.userId;
    next();
  });
}

export default verifyToken;