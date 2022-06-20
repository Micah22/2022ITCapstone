module.exports = {
    mongo: {
        development: {
            // connectionString: 'mongodb://127.0.0.1:27017/CollegeConnect?retryWrites=true&w=majority'
            connectionString: 'mongodb+srv://test:test@cluster0.njygz.mongodb.net/?retryWrites=true&w=majority'
        },
        production: {
            // connectionString: 'mongodb://127.0.0.1:27017/CollegeConnect?retryWrites=true&w=majority'
            connectionString: 'mongodb+srv://test:test@cluster0.njygz.mongodb.net/?retryWrites=true&w=majority'
        }
    },
    session: {
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false } // This needs to be true if in prod under https
    }
}
