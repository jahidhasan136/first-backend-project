import { Router } from 'express';
import { StudentRoutes } from '../modules/student/student.route.js';
import { UserRoutes } from '../modules/user/user.route.js';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
];

moduleRoutes.forEach(({ path, route }) => {
  router.use(path, route);
});

export default router;
