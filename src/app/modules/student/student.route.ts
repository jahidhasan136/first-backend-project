import express from 'express';
import { StudentController } from './student.controller.js';

const router = express.Router();

router.get('/', StudentController.getAllStudents);

router.get('/:studentId', StudentController.getSingleStudent);

router.put('/:studentId', StudentController.updateSingleStudent);

router.delete('/:studentId', StudentController.deleteStudent);

export const StudentRoutes = router;
