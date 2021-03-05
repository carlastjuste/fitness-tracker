const express = require('express');
const path = require('path');

module.exports = () => {
const app = express();
    //require ('../routes');

    app.use(express.static('public'));

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "public/index.html"));
      });

const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>console.log('App listening on port http://localhost:'+PORT));

return app;

};