import mongoose from 'mongoose';

const MONGO_URI = 'mongodb://127.0.0.1:27017/personsDB';

const dbConnect = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Database is ready!');
    }
    catch (e) {
        console.error('error in mongoDB connection: ', e);
    }
}

export default dbConnect;