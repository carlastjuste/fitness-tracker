const express = require('express');

module.exports = () => {
const app = express();
    //require ('../routes');

    app.use(express.static('public'));

const PORT = process.env.Port || 8080;
app.listen(PORT, ()=>console.log('App listening on port http://localhost:'+PORT));

return app;

};