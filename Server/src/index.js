//EXPRESS

const app = require("./app")
const PORT = 3001;
const { conn } = require('./DB_connection');


conn.sync({force: true}).then(()=>{
    app.listen(PORT, ()=>{console.log(`Server raised on port: ${PORT}`)})
})





//CONFIGURACION WEB SERVER DE NODE
// const http = require("http");
// const PORT = 3001;
// const { getCharById } = require('./controllers/getCharById');

// http.
// createServer((req ,res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
// if(req.url.includes("/rickandmorty/character")){
//    const id = req.url.split('/').at(-1);
//     getCharById(res,+id)
// }
// }).listen(PORT, "localhost")
//_______________________________________________________________________________________