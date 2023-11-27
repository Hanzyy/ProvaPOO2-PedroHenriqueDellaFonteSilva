import express from 'express';
import MainRouter from './Routes/MainRoutes';
import UsuarioRouter from './Routes/UsuarioRoutes';
import LanceRouter from './Routes/LeilaoRoutes';
import LeilaoRouter from './Routes/LanceRoutes';


const app = express();
const port = 3000;


app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', './src/Views');

app.use(MainRouter);
app.use(UsuarioRouter);
app.use(LanceRouter);
app.use(LeilaoRouter);


app.listen(port, function(){
    console.log(`Server running on port ${port}`);
})