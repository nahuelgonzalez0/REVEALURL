import { Router, Request, Response } from 'express';
import { resolver } from '../services/resolverService';

export const router = Router();

router.post('/', async (req: Request, res: Response) => {
  const { url } = req.body;
  console.log('Recibido URL:', url);

  if (!url || typeof url !== 'string') {
    res.status(400).json({ error: 'URL inválida' });
    return
  }

  try {
    const data = await resolver(url);
    res.json(data);
  } catch (error: any) {
    console.error('Hubo un error al resolver la URL:', error);
    res.status(500).json({ error: 'Error al resolver la URL', message: error.message });
  }
});
