// CommonJS, when we use require

import express from 'express';
import { create } from 'express-handlebars';
import path from 'path';
import morgan from 'morgan';
import indexRoutes from './routes/index.routes';

const app = express();

app.set('views', path.join(__dirname, 'views'));

const exphbs = create({
  layoutsDir: path.join('src/views', 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  defaultLayout: 'main',
  extname: '.hbs',
});

app.engine('.hbs', exphbs.engine);
app.set('view engine', '.hbs');

// Middlewares

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

// Routes

app.use(indexRoutes);

export default app;
