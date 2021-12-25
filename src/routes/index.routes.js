import { Router } from 'express';
import Task from '../models/Task';

const router = Router();

router.get('/', async (req, res) => {
  const tasks = await Task.find().lean();
  console.log(tasks);
  res.render('index', { tasks: tasks });
});

router.post('/tasks/add', async (req, res) => {
  try {
    const task = Task(req.body);
    const taskSaved = await task.save();
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/edit/:id', (req, res) => {
  res.render('edit');
});

router.post('/edit/:id', (req, res) => {
  res.send('Received!');
});

export default router;
