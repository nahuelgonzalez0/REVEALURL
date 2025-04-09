import express from 'express';
import { router } from './routes/routes';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/', router);

app.get('/status', (_req, res) => {
  res.send('API Funcionando!');
});

app.listen(port, () => {
  console.log(`Server corriendo en el puerto ${port}`);
});
