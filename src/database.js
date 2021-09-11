import mongoose from 'mongoose';
const user= "crashvic";
const password= "chikilinn95";
const cluster= "cluster0.v8czf";
const database="myFirstDatabase";

export async function connect(){  // exporta la función para que se pueda conectar y async hace que la función sea asincrona
    try{
        //await espera a que se acabe de realizar la conexión para mostrar el mensaje en consola
        await mongoose.connect(`mongodb+srv://${user}:${password}@${cluster}.mongodb.net/${database}?retryWrites=true&w=majority`,{
            useNewUrlParser: true
        });
        
        console.log('>>Se conecto correctamente a la base de datos');

    }catch(e){
        console.log('Error al conectar a la BD')
    }
}

