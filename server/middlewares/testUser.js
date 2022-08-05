import User from "../models/user.js";

const checkTestUser = async (req, res, next) => {
  const resp = await User.findById(req.user.userId);
  if (resp.email === "testUser@test.com") {
    return res.status(400).send({ msg: "Test user. Read only !" });
  } else next();
};

export default checkTestUser;
