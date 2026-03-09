import type { Request, Response } from 'express';
import { StudentService } from './student.service.js';

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

const updateSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params as { studentId: string };
    const { student: studentData } = req.body;
    const result = await StudentService.updateSingleStudentFromDb(studentId, studentData);
    res.status(200).json({
      success: true,
      message: 'Student updated successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to update student',
      error: (error as Error).message,
    });
  }
};

const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params as { studentId: string };
    const result = await StudentService.deleteStudentFromDb(studentId);
    res.status(200).json({
      success: true,
      message: 'Student delete successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to delete student',
      error: (error as Error).message,
    });
  }
};

export const StudentController = {
  getAllStudents,
  getSingleStudent,
  updateSingleStudent,
  deleteStudent,
};
