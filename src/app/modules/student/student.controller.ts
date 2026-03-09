import type { NextFunction, Request, Response } from 'express';
import { StudentService } from './student.service.js';
import sendResponse from '../../utils/sendResponse.js';
import status from 'http-status';

const getAllStudents = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentService.getAllStudentsFromDb();

    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: 'Students retrieved successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { studentId } = req.params as { studentId: string };
    const result = await StudentService.getSingleStudentFromDb(studentId);

    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: 'Student retrieved successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateSingleStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { studentId } = req.params as { studentId: string };
    const { student: studentData } = req.body;
    const result = await StudentService.updateSingleStudentFromDb(studentId, studentData);

    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: 'Student updated successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { studentId } = req.params as { studentId: string };
    const result = await StudentService.deleteStudentFromDb(studentId);

    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: 'Student delete successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const StudentController = {
  getAllStudents,
  getSingleStudent,
  updateSingleStudent,
  deleteStudent,
};
