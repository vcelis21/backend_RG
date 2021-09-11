import authors from './models/Authors';
import books from './models/Books';
//import {authors,books} from './dataTest';

import { GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull } from "graphql";


//Type Query son consultas que se encuentran para saber que puede buscar en el .json
//Mutation va a modificar e insertar datos que manda el usuario

const BookType = new GraphQLObjectType({
  name: 'Book',
  description: 'Representa el libro que escribió el autor',
  fields: () => ({
    _id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    authorId: { type: GraphQLNonNull(GraphQLInt) },
    author: {
      type: AuthorType,         //Esta es la validación equivalente a la Foreign key en SQL
      resolve: (book) => {
        return authors.find(author => author._id === book.authorId)
      }
    }
  })
})

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  description: 'Representa al Autor',
  fields: () => ({
    _id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    books: {
      type: new GraphQLList(BookType),
      resolve: (author) => {
        return books.filter(book => book.authorId === author._id)
      }
    }
  })
})

export  const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    book: {
      type: BookType,
      description: 'Un solo libro',
      args: {
        _id: { type: GraphQLInt }
      },
      resolve: (parent, args) => {
        return books.findOne(
          { _id:args._id}
        );
     }
      //books.find(book => book._id === args._id)
    },
    books: {
      type: new GraphQLList(BookType),
      description: 'Lista de todos los libros',
      resolve: () => {
         return books.find();
      }
     
    },
    authors: {
      type: new GraphQLList(AuthorType),
      description: 'Lista de todos los autores',
      resolve: () => {
        return authors.find();
     }
    },
    author: {
      type: AuthorType,
      description: 'Un solo autor',
      args: {
        _id: { type: GraphQLInt }
      },
      resolve: (parent, args) =>{
        return authors.findOne(
          { _id:args._id}
        ); 
      }
      //authors.find(author => author._id === args._id)
    }
  })
})

export const RootMutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root Mutation',
  fields: () => ({
    addBook: {
      type: BookType,
      description: 'Add a book',
      args: {
        _id: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString) },
        authorId: { type: GraphQLNonNull(GraphQLInt) }
      },
      resolve: (parent, args) => {
       
        const newBook= new books({
          _id: args._id,
          name: args.name,
          authorId: args.authorId 

        })
        return newBook.save();
      }
    },

    addAuthor: {
      type: AuthorType,
      description: 'Agregando un autor',
      args: {
        _id: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString) }
      },
      resolve: (parent, args) => {
        const newAuthor= new authors({
          _id: args._id,
          name: args.name
        })
        return newAuthor.save();
      }
    }
  })
})
