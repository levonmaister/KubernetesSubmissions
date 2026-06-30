const Router = require('express').Router();



Router.get('/', (req, res) => {

    console.log(process.env.GREETING);
    return res.json(process.env.GREETING);
})



module.exports = Router;
