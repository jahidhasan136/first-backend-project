import type { Request, Response } from 'express';
import { StudentService } from './student.service.js';
import studentValidationSchema from './student.validation.js';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    // Validate the student data using Zod schema
    const zodParsedData = studentValidationSchema.parse(studentData);

    const result = await StudentService.createStudentIntoDB(zodParsedData);
    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to create student',
      error: (error as Error).message,
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentService.getAllStudentsFromDb();
    res.status(200).json({
      success: true,
      message: 'Students retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to retrieve students',
      error: (error as Error).message,
    });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params as { studentId: string };
    const result = await StudentService.getSingleStudentFromDb(studentId);
    res.status(200).json({
      success: true,
      message: 'Student retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to retrieve student',
      error: (error as Error).message,
    });
  }
};

export const StudentController = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
