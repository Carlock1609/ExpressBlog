/**
 * Required External Modules
 */
let express = require('express');
let path = require('path');

/**
 * App Variables
 */
let app = express();
let port = process.env.PORT || '8000';
/**
 *  App Configuration
 */
app.get('/', (req,res) => {
    res.status(200).send('YOU REACHED INDEX')
});

/**
 * Routes Definitions
 */

/**
 * Server Activation
 */
app.listen(port, () => {
    console.log('SERVER UP!!')
})