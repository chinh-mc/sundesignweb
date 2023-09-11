import mongoose from "mongoose";

const connect = async () => {
  try {
    if(process.env.MONGO) {
      await mongoose.connect(process.env.MONGO);
    } else {
      throw new Error("Connection failed!");
    }
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;
