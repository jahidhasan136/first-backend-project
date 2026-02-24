import { z } from 'zod';

/**
 * Helpers
 */
const capitalizeFirst = (v: string) => (v.length ? v.charAt(0).toUpperCase() + v.slice(1) : v);

/**
 * userName schema (matches userNameSchema)
 */
export const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, { message: 'First name must be required' })
    .max(20, { message: 'First name must be less than 20 characters' })
    .refine((value) => capitalizeFirst(value) === value, {
      message: 'First name must start with a capital letter',
    }),

  middleName: z.string().trim().optional(),

  lastName: z
    .string()
    .trim()
    .min(1, { message: 'Last name must be required' })
    // validator.isAlpha equivalent (letters only)
    .regex(/^[A-Za-z]+$/, { message: '{VALUE} is not valid' }),
});

/**
 * guardian schema (matches guardianSchema)
 */
export const guardianValidationSchema = z.object({
  fatherName: z.string().min(1, { message: 'Father Name must be required' }),
  fatherOccupation: z.string().min(1, { message: 'Father occupation must be required' }),
  fatherContactNo: z.string().min(1, { message: 'Father contact no must be required' }),

  motherName: z.string().min(1, { message: 'Mother name must be required' }),
  motherOccupation: z.string().min(1, { message: 'Mother occupation must be required' }),
  motherContactNo: z.string().min(1, { message: 'Mother contact no must be required' }),
});

/**
 * localGuardian schema (matches LocalGuardianSchema)
 */
export const localGuardianValidationSchema = z.object({
  name: z.string().min(1, { message: 'Local Guardian Name must be required' }),
  occupation: z.string().min(1, { message: 'Local Guardian occupation must be required' }),
  contactNo: z.string().min(1, { message: 'Local Guardian contact no must be required' }),
  address: z.string().min(1, { message: 'Local Guardian address must be required' }),
});

/**
 * student schema (matches studentSchema)
 */
export const studentValidationSchema = z.object({
  id: z.string().min(1, { message: 'Id must be required' }),
  name: z.object({
    firstName: z
      .string()
      .trim()
      .min(1, { message: 'First name must be required' })
      .max(20, { message: 'First name must be less than 20 characters' })
      .refine((v) => v[0] === v[0]?.toUpperCase(), {
        message: 'First name must start with a capital letter',
      }),
    middleName: z.string().trim().optional(),
    lastName: z
      .string()
      .trim()
      .min(1, { message: 'Last name must be required' })
      .regex(/^[A-Za-z]+$/, { message: '{VALUE} is not valid' }),
  }),

  password: z
    .string()
    .min(1, { message: 'Password must be required' })
    .max(20, { message: 'Password must be less than 20 characters' }),

  gender: z.enum(['male', 'female'], { message: '{VALUE} is not supported' }),

  dateOfBirth: z
    .string()
    .min(1, { message: 'Date of birth must be required' })
    // if you want strict format like 2002-08-14:
    .regex(/^\d{4}-\d{2}-\d{2}$/, { message: 'dateOfBirth must be YYYY-MM-DD' }),

  email: z.string().email({ message: '{VALUE} is not a valid email' }),

  contactNo: z.string().min(1, { message: 'Contact no must be required' }),
  emergencyContactNo: z.string().min(1, { message: 'Emergency contact no must be required' }),

  bloodGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], {
      message: '{VALUE} is not supported',
    })
    .optional(),

  presentAddress: z.string().min(1, { message: 'Present Address must be required' }),
  permanentAddress: z.string().min(1, { message: 'Permanent Address must be required' }),

  guardian: z.object({
    fatherName: z.string().min(1, { message: 'Father Name must be required' }),
    fatherOccupation: z.string().min(1, { message: 'Father occupation must be required' }),
    fatherContactNo: z.string().min(1, { message: 'Father contact no must be required' }),
    motherName: z.string().min(1, { message: 'Mother name must be required' }),
    motherOccupation: z.string().min(1, { message: 'Mother occupation must be required' }),
    motherContactNo: z.string().min(1, { message: 'Mother contact no must be required' }),
  }),

  localGuardian: z.object({
    name: z.string().min(1, { message: 'Local Guardian Name must be required' }),
    occupation: z.string().min(1, { message: 'Local Guardian occupation must be required' }),
    contactNo: z.string().min(1, { message: 'Local Guardian contact no must be required' }),
    address: z.string().min(1, { message: 'Local Guardian address must be required' }),
  }),

  profileImg: z.string().optional(),

  isActive: z.enum(['active', 'inactive']).default('active'),
  isDeleted: z.boolean().default(false),
});

export default studentValidationSchema;
