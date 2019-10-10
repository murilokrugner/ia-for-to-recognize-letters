import { Router } from 'express';

import ImagesController from './app/controllers/ImagesController';

const routes = new Router();

routes.get('/', (req, res) => {
    return res.json('deu certo');
});

routes.get('/images', ImagesController.index);

export default routes;
