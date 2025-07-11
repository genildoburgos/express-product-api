import app from './app';
import sequelize from './config/db';

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log('PostgreSQL connected');

    await sequelize.sync(); // Cria tabelas
    console.log('Tables synchronized');

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
    process.exit(1);
  }
})();
