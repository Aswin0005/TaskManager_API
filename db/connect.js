const mongoose = require('mongoose');

const connectionString =
  'mongodb+srv://Aswin:10161970@nodeexpressprojects.g9qo93l.mongodb.net/Task-Manager?retryWrites=true&w=majority&appName=NodeExpressProjects';

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB
