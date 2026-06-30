const app = require('./app') // The Express app


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started in ${PORT}`);
});

