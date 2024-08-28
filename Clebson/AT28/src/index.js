import express from 'express';
import {formato} from './util/texto.js';
import { calc } from './util/numero.js';
import 'express-async-errors';

const app = express();
app.use(express.json())

class HTTPError extends Error{
  constructor(message, code){
    super(message);
    this.code = code;
  }
}
 
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/util/numero/:acao', (req, res) =>{
  const { acao } = req.params;
  const  input  = req.query.input.split(',');

  const result = {
    acao,
    input,
    output: calc(input, acao),
  };

  res.send(result);
})
 
app.post('/util/texto/:acao', (req, res) => {
  const { acao } = req.params;
  const { input } = req.body;

  const result = {
    acao,
    input,
    output: formato(input, acao),
    };

    res.send(result);
})

// Error handler
app.use((err, req, res, next) => {
  if (err instanceof HTTPError) {
    return res.status(err.code).json({ message: err.message });
  }
 
  // console.error(err.stack);
  // next(err)
  return res.status(500).json({ message: 'Something broke!' });
});

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`);
});