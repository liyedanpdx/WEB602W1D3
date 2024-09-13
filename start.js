require('dotenv').config();
//we can leave the .js off the file name in the require statement.
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection
    .on('open', () => {
        console.log('Mongoose connection open');
    })
    .on('error',(err) => {
        console.log(`Connection error: ${err.message}`);
});

require('./models/Registration')
const app = require('./app'); 
const server = app.listen(3000, () => {
    console.log(`Express is running on port ${server.address().port}`);
})




