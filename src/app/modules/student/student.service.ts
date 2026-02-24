import type { TStudent } from './student.interface.js';
import { Student } from './student.model.js';

const createStudentIntoDB = async (studentData: TStudent) => {
  // builtin static method
  // const result = await StudentModel.create(student);

  // builtin instance method
  const student = new Student(studentData);
  if (await student.isUseExists(studentData.id)) {
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

export const StudentService = {
  createStudentIntoDB,
  getAllStudentsFromDb,
  getSingleStudentFromDb,
};
