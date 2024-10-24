import express = require('express');
import feedback from './feedback';
import figma from './figma';
import search from './search';

const api: express.Router = express.Router();

api.use('/figma', figma);
api.use('/search', search);
api.use('/user-feedback', feedback);

export default api;
