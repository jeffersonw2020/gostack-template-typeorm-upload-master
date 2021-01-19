import { Router } from 'express';

import transactionsRouter from './transactions.routes';
//rotas
const routes = Router();

routes.use('/transactions', transactionsRouter);

export default routes;
