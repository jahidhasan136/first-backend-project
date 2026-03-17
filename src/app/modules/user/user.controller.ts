import type { RequestHandler } from 'express';
import { UserServices } from './user.service.js';
import sendResponse from '../../utils/sendResponse.js';
import status from 'http-status';

const createStudent: RequestHandler = async (req, res, next) => {
  try {
    const { password, student: studentData } = req.body;

    // Validate the student data using Zod schema
    // const zodParsedData = studentValidationSchema.parse(studentData);

    const result = await UserServices.createStudentIntoDB(password, studentData);

    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const UserControllers = {
  createStudent,
};
