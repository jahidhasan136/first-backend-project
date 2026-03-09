import type { TStudent } from './student.interface.js';
import { Student } from './student.model.js';

const getAllStudentsFromDb = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentFromDb = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

const updateSingleStudentFromDb = async (id: string, updateData: Partial<TStudent>) => {
  const result = await Student.updateOne({ id }, updateData);
  return result;
};

const deleteStudentFromDb = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const StudentService = {
  getAllStudentsFromDb,
  getSingleStudentFromDb,
  updateSingleStudentFromDb,
  deleteStudentFromDb,
};
