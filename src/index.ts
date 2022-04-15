import { Logger } from './lib';
import { app } from './app';

const port = 8010;
const host = process.env.HOST ? `${process.env.HOST}/api-docs/` : `http://localhost:${port}/api-docs/`;

export const bootsrap = () => {
  try {
    Logger.info(host);
    app.listen(port, () => Logger.info(`App started and listening on port ${port}`));
  } catch (error) {
    Logger.error(error);
  }
};

bootsrap();

