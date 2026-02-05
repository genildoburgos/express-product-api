import app from './app';
import sequelize from './config/db';
import logger from './logger';

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.authenticate();
    logger.info('PostgreSQL connected');

    await sequelize.sync(); // Cria tabelas
    logger.info('Tables synchronized');

    app.listen(PORT, () => {
      logger.info(`Server running on port ${PORT}`);
    });
  } catch (error: any) {
    logger.error('Error starting server:', error);
    process.exit(1);
  }
})();
