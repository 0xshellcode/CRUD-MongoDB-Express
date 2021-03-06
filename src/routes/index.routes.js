import { Router } from 'express';
import {
  renderTasks,
  createTask,
  renderTaskEdit,
  editTask,
  delteTask,
  toggleDone,
} from '../controllers/tasks.controller';

const router = Router();

router.get('/', renderTasks);

router.post('/tasks/add', createTask);

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/tasks/:id/edit', renderTaskEdit);

router.post('/tasks/:id/edit', editTask);

router.get('/tasks/:id/delete', delteTask);

router.get('/tasks/:id/toggleDone/', toggleDone);
export default router;
