module.exports = {
    mongo: {
        development: {
            // This is connecting to a local instance. Change this to a connection
            // string going to Mongodb Atlas if you prefer that
            connectionString: 'mongodb://127.0.0.1/CollegeConnect?retryWrites=true&w=majority'
        },
        production: {
            connectionString: 'mongodb://127.0.0.1/CollegeConnect?retryWrites=true&w=majority'
        }
    },
    session: {
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false } // This needs to be true if in prod under https
    }
}
