const express = require('express');
const app = express();
require('./config/db');
const libroController = require('./controllers/libroController');

app.use('/', libroController);
//
//app.use(express.static(__dirname + '/public/'))
app.listen('3000',function(){
    console.log(' 3000')
});


