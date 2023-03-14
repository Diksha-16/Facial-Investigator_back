const mongoose = require("mongoose");

exports.connect = () => {
  // Connecting to the database
  /* Enter your own credentials*/
  mongoose
    .connect(
      "mongodb+srv://recognise:recognise@cluster0.szu2i.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};
