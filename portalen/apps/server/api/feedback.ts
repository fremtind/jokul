import { payload } from '@org/cms';
import express = require('express');
import { body, validationResult } from 'express-validator';

const feedback: express.Router = express.Router();

feedback.post(
    '/',
    body('feedbackValue').isNumeric(),
    body('message').isLength({ max: 900 }).trim().escape(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).send();
        }

        await payload.create({
            collection: 'feedback',
            data: req.body,
        });

        return res.status(200).send();
    }
);

export default feedback;
