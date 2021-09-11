//Estos son equivalentes en antiguas versiones, para poder mejorar un poco ocuparemos unas dependencias 
//y un compilador de babel que nos va a permitir ocupar comandos más actualizados cómo lo son el import 

//const express = require('express');
//const {graphqlHTTP} = require('express-graphql');     //Estos son comandos antiguas versiones 
//const schema = require('./models.js');

import {schema} from './schema'
import express from 'express';
import {graphqlHTTP} from "express-graphql"; 
const app = express();


 //-----------------------------------------------------------Home principal
 app.get('/', async(req,res) => {
    res.json({message: 'Hola bienvenido a RGASESORES'})   //Es la respuesta que se obtiene por default 
});

 //-----------------------------------------------------------GraphiQL
 //Se abre una ruta en el servidor y se procesa la información
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
    context:  {                 //Ayuda a pasar todos los datos a los resolvers y se muestra Graphiql en
                                //localhost:3000/graphql
        messageId : 'test'
    }
}));

/* Esta es la última parte con el que se podrían hacer el post y el get en otra ruta
para este caso sería localhost:3000/add_authors y es el intermediario con el frontEnd

 //-----------------------------------------------------------Agregar autores
app.post("/add_authors", async (req, res) => {
    const author = new authors(req.body);

    try {
      await author.save();
      response.send(author);
    } catch (error) {
      res.status(500).send(error);
    }
});

 //-----------------------------------------------------------Obtener autores

 app.get("/authors", async (req, res) => {
    const author = await authors.find({});
  
    try {
      res.send(author);
    } catch (error) {
      res.status(500).send(error);
    }
  });
*/
  module.exports=app;


