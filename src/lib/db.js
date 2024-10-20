import mongoose from 'mongoose';
import User from '../../models/User';

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connection is success")
    }
    catch (error) {
        throw new Error("Error in connecting to the database");
    }
};

const getUser = async (username) => {
    try {
      const user = await User.findOne({ username });
      return user || null;
    } catch (error) {
      console.error("Error fetching user:", error.message);
      return null; // Handle errors gracefully
    }
  };

  const authenticateUser = async (username, password) => {
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return null; // User not found
      }
  
      if (password == user.password) {
        return user; // User authenticated successfully
      } else {
        return null; // Incorrect password
      }
    } catch (error) {
      console.error("Error authenticating user:", error.message);
      return null; // Handle errors gracefully
    }
  };

export default connect;
export {getUser, authenticateUser };