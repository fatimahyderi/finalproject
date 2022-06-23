import mongoose from 'mongoose';

//Connection with mongo with Mongoose.
const dbData = async () => {
    try {
      const con = await mongoose.connect(process.env.DATABASE_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // userFindAndModify:false,
        // userCeatedIndex:true
      });
      console.log('mongo db connected' + con.connection.host);
    } catch (err) {
      console.log(err);
      process.exit(1)
    }
  }


  export { dbData };