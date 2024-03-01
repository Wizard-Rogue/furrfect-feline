import type { Express } from 'express';
import breedsController from '../controllers/breedsController';
import catsController from '../controllers/catsController';

const routes = (app: Express) => {
  app.get('/breeds', breedsController.getBreeds);

  app.get('/cats', catsController.getCats);
  app.get('/cats/:id', catsController.getCat);
};

export default routes;
