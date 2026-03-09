import config from '../../config/index.js';
import type { TStudent } from '../student/student.interface.js';
import { Student } from '../student/student.model.js';
import type { TUser } from './user.interface.js';
import { User } from './user.model.js';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  const userData: Partial<TUser> = {};

  userData.password = password || (config.default_pass as string);

  userData.role = 'student';

  userData.id = '2030100001';

  const newUser = await User.create(userData);
  if (Object.keys(newUser).length) {
    studentData.id = newUser.id; //embedding id
    studentData.user = newUser._id; //referencing _id

    const newStudent = Student.create(studentData);
    return newStudent;
  }
};

export const UserServices = {
  createStudentIntoDB,
};
