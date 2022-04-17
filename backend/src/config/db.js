const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://venkat:venkat@123@cluster0.h7i7z.mongodb.net/school-management?retryWrites=true&w=majority"
  );
};
