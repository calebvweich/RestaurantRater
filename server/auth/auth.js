import jwt from "jsonwebtoken";

export function auth(req, res, next) {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) return res.status(401).json({ msg: "No token, access denied" });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // user info from token
    next();
  } catch (err) {
    res.status(401).json({ msg: "Invalid token" });
  }
}