const express = require("express");
const isLoggedIn = require("./middleware/isLoggedIn");

const usersRoute = require("./routes/usersRoute")
const readGoalsRoute = require("./routes/readGoalsRoute");
const createGoalRoute = require("./routes/createGoalRoute");
const updateGoalRoute = require("./routes/updateGoalRoute");

const router = express.Router();

router.use("/auth", usersRoute);
router.get("/goals", isLoggedIn, readGoalsRoute);
router.post("/goals", isLoggedIn, createGoalRoute);
router.put("/goals/:id", isLoggedIn, updateGoalRoute);

module.exports = router;
