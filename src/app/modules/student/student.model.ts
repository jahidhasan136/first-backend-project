import { Schema, model } from 'mongoose';
import type { Guardian, LocalGuardian, Student, Username } from './student.interface.js';

const userNameSchema = new Schema<Username>({
  firstName: { type: String, required: [true, 'First name must be required'] },
  middleName: { type: String },
  lastName: { type: String, required: [true, 'Last name must be required'] },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: [true, 'Father Name must be required'] },
  fatherOccupation: { type: String, required: [true, 'Father occupation must be required'] },
  fatherContactNo: { type: String, required: [true, 'Father contact no must be required'] },
  motherName: { type: String, required: [true, 'Mother name must be required'] },
  motherOccupation: { type: String, required: [true, 'Mother occupation must be required'] },
  motherContactNo: { type: String, required: [true, 'Mother contact no must be requried'] },
});

const LocalGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: [true, 'Local Guardian Name must be required'] },
  occupation: { type: String, required: [true, 'Local Guardian occupation must be required'] },
  contactNo: { type: String, required: [true, 'Local Guardian contact no must be required'] },
  address: { type: String, required: [true, 'Local Guardian address must be required'] },
});

const studentSchema = new Schema<Student>({
  id: { type: String, unique: true, required: true },
  name: {
    type: userNameSchema,
    required: [true, 'Name must be required'],
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message: '{VALUE} is not supported',
    },
    required: true,
  },
  email: { type: String, required: true, unique: true },
  contactNo: { type: String, required: [true, 'Contact no must be required'] },
  emergencyContactNo: { type: String, required: [true, 'Emergency contact no must be required'] },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message: '{VALUE} is not supported',
    },
  },
  presentAddress: { type: String, required: [true, 'Present Address must be required'] },
  permanentAddress: { type: String, required: [true, 'Permanent Address must be required'] },
  guardian: {
    type: guardianSchema,
    required: [true, 'Guardian information must be required'],
  },
  localGuardian: {
    type: LocalGuardianSchema,
    required: [true, 'Local Guardian information must be required'],
  },
  profileImg: { type: String },
  isActive: {
    type: String,
    enum: {
      values: ['active', 'inactive'],
      message: '{VALUE} is not supported',
    },
    default: 'active',
    required: true,
  },
});

export const StudentModel = model<Student>('Student', studentSchema);
