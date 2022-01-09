const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGODB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('MongoDB Connected Successfully')
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB