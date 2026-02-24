import type { TStudent } from './student.interface.js';
import { Student } from './student.model.js';

const createStudentIntoDB = async (studentData: TStudent) => {
  // builtin static method
  // const result = await StudentModel.create(student);

  // builtin instance method
  const student = new Student(studentData);
  if (await student.isUserExists(studentData.id)) {
    throw new Error('Student already exists');
  }
  const result = await student.save();
  return result;
};

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
  createStudentIntoDB,
  getAllStudentsFromDb,
  getSingleStudentFromDb,
  updateSingleStudentFromDb,
  deleteStudentFromDb,
};
