import express from 'express';

const router = express.Router();

router.get("/signin", (req, res) => {
  res.render("signin");
});

export default router;
