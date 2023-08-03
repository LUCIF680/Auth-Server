import express from 'express';
import * as userServices from '../services/user';

const router = express.Router();

/* GET all users */
router.get('/', userServices.getAllUsers);

export default router;
