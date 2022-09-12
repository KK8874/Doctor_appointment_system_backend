import  express  from 'express';

import {AdminSignup,AdminLogin} from '../controller/admin'




const router = express.Router();

router.post('/AdminSignup',AdminSignup)
router.post('/AdminLogin',AdminLogin)



export default router;
