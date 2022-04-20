import mongoose from 'mongoose';

class Database{

    constructor(){
        this.mongo();
    }

    mongo(){
        console.log(process.env.MONGO_URL)
        mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true,
        });
    }
}

export default new Database();