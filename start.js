const app = require('./app'); //we can leave the .js off the file name in the require statement.

const server = app.listen(3000, () => {
    console.log(`Express is running on port ${server.address().port}`);
})



