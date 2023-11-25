const express = require('express');
const app = express();
const ejemploRoutes = require('./routes/ejemploRoutes');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

// Middleware para procesar JSON
app.use(express.static('./public'));
app.use(express.json());

// Routes
app.use('/api', ejemploRoutes);
app.use(notFound); 
app.use(errorHandlerMiddleware);

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
