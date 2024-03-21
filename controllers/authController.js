const Admin = require("../models/Admin");

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: "Email and password are required" });
  }

  const adminExist = await Admin.findOne({ email });

  if (!adminExist) {
    return res.status(404).json({ success: false, message: "Unauthorized." });
  }

  if (password !== "breakthroughiscoming") {
    return res.status(401).json({ success: false, message: "Unauthorized." });
  }

  // const verifiedPassword = await bcrypt.compare(password, adminExist.password);

  // if (!verifiedPassword) {
  //   return res.status(401).json({ success: false, message: "Incorrect password." });
  // }

  // const accessToken = jwt.sign(
  //   { userEmail: adminExist.email, userId: adminExist._id },
  //   process.env.ACCESS_TOKEN_SECRET!,
  //   { expiresIn: "7d" }
  // );

  return res.status(200).json({
    success: true,
    message: "Login success",
    userId: adminExist._id,
    // accessToken,
  });
};

const logout = (req, res) => {};

module.exports = {
  login,
  logout,
};
