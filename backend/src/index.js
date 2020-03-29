const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const app = express();

//produção
// app.use(cors({
//   origin: 'http://meuapp.com'
// }));

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP
 * 
 * GET: Buscar um informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informações no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizando para criaro u alterar recursos
 */

/** 
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */

