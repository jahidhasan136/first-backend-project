import z from 'zod';

const userValidationSchema = z.object({
  password: z
    .string({
      message: 'Password must be a string',
    })
    .max(20, { message: 'Password can not be more than 20 characters' })
    .optional(),
  needsPasswordChange: z.boolean().default(true).optional(),
  role: z.enum(['admin', 'student', 'faculty'], {
    message: 'Role must be either admin, student or faculty',
  }),
  status: z.enum(['in-progress', 'blocked'], {
    message: 'Status must be either in-progress or blocked',
  }),
  isDeleted: z.boolean().default(false).optional(),
});

export const UserValidation = {
  userValidationSchema,
};
