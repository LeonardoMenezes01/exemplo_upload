const express = require ('express');
const multer = require ('multer');

const app = express();
const upload = multer({ dest: 'img/'});


app.use('/img',express.static('img/'));

app.use(express.static('puclic'));


app.listen(3000, ()=>{
    console.log("rodando em https://localhost:3000")
})