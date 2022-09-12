import express from 'express';

import{CustomerSignup,customerlist} from '../controller/customer'

const router = express.Router();
router.post('/CustomerSignup',CustomerSignup)
router.get('/customerlist',customerlist)



export default router;