import type { Request, Response } from 'express';
import { UserServices } from './user.service.js';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { password, student: studentData } = req.body;

    // Validate the student data using Zod schema
    // const zodParsedData = studentValidationSchema.parse(studentData);

    const result = await UserServices.createStudentIntoDB(password, studentData);
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

export const UserControllers = {
  createStudent,
};
