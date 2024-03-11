import mongoose from 'mongoose'

const Connection = async () => {
    try {
     const con = await mongoose.connect(process.env.DB_URI)
     if(con)
     {
        console.log(`dbConnection is successfully`)
     }
    } catch (error) {
        console.log('DataBase connection is unSuccessfully')
    }
}



export default Connection