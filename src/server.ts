import express from 'express';
import routes from './routes';

const app = express();
app.use(routes);

app.set('port', process.env.PORT || 4000)
app.listen(3333, () => {
    console.log('O servidor está rodando');
});