import express from 'express'
const router = express.Router();
import{patientsignup} from '../controller/book'
import { Addteacher, studentlogin,teacherlist,getDetailById,Updateteacher,deleteteacher} from '../controller/book';


router.post("/Addteacher",Addteacher);
router.post('/patientsignup',patientsignup);
router.post("/studentlogin",studentlogin);

router.get("/teacherlist",teacherlist);
router.get("/getDetailById",getDetailById);
router.put("/Updateteacher",Updateteacher);
router.delete("/deleteteacher/:id",deleteteacher);


export default router;
