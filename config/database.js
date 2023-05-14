import mongoose from "mongoose";

const  connectDB = async () => {
    try {

        const databaseAddress = process.env.MONGO_URL
        // 데이터베이스 연결
        await mongoose.connect(databaseAddress)

        console.log("conneted database")

    } catch (err) {
        console.log(err)
    }
}

//try catch 문

export default connectDB