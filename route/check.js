import express from 'express';
import { authenticationCheck, userIsAuthorised } from './middleware.js';

const router = express.Router();

router.post("/check", authenticationCheck, (req, res) => {
    if (userIsAuthorised) {
        res.render("dashboard");
    }
});

export default router;
