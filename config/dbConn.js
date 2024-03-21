const mongoose = require("mongoose");

const DATABASE_URI =
  "mongodb+srv://alvinfloresacosta:lokalsoul@dmacluster.tdezred.mongodb.net/dma_employee_mgt_db?retryWrites=true&w=majority&appName=DmaCluster";

const connectDB = async () => {
  try {
    await mongoose.connect(DATABASE_URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
