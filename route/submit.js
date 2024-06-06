import express from 'express';
import { bandNameGenerator } from './middleware.js';

const router = express.Router();

router.post("/submit", bandNameGenerator, (req, res) => {
  const post = res.locals.post;
  res.render(`post`);
});

export default router;
