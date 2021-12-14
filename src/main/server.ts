import './config/module-alias';

import { env } from './config/env';

import 'reflect-metadata';

async function start() {
  try {
    const { app } = await import('@/main/config/app');

    app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}/api-docs/`));
  } catch (err) {
    console.error(err);
  }
}

start();
