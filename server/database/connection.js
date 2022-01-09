const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const con = await mongoose.connect("mongodb+srv://admin:admin@cluster0.ilv9k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false,
            // useCreateIndex: true
        })
        console.log('MongoDB connected')
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB