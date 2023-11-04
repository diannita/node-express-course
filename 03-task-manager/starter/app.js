const express = require('express');
const app = express();
const ejemploRoutes = require('./routes/ejemploRoutes');
const connectDB = require('./db/connect');
require('dotenv').config();


// Middleware para procesar JSON
app.use(express.json());

// Routes
app.use('/api', ejemploRoutes);

// Iniciar el servidor
const port = process.env.PORT;

const start = async () => {
    try {
      await connectDB(process.env.MONGODB_URI);
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  start();
