const getUserProfile = (req, res) => {
  // Fetch and return user profile data
  res.send({ message: "User profile data" });
};

const googleAuth = (req, res) => {
  // Handle Google OAuth authentication
  res.send({ message: "Google OAuth success" });
};

module.exports = { getUserProfile, googleAuth };
