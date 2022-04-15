import express from 'express';
import * as bodyParser from 'body-parser';
import swaggerJSDoc from 'swagger-jsdoc';
import * as swaggerUi from 'swagger-ui-express';
import { errorController } from './api/controllers/error.controller';
import { constants } from './config';
import { v1Router } from './api/routes/v1';
import { v2Router } from './api/routes/v2';
const { options } = constants;

export const app = express();

const specs = swaggerJSDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/health', (req, res) => res.send('Healthy'));

app.use('/v1', v1Router);
app.use('/v2', v2Router);

app.use((err, req, res, next) => {
  errorController(err, res, next);
});
