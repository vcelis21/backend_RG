import { GraphQLSchema,GraphQLObjectType,GraphQLString,graphql } from 'graphql';
import {RootQueryType,RootMutationType} from './resolvers';
 
//-------------------------------------------------- creamos el esquema para Graphql
export const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType
})

/* Documentación para realizar consultas y mutaciones

query{
  authors{
    name
  }
}

mutation{
	addAuthor(name: "Autor1 "){
    _id
    name
  }
}
*/