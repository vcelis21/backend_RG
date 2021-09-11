import { connect } from './database';
import app from './routes';

connect();
//Iniciamos el servidor
app.listen(3000, ()=>console.log('Server on port', process.env.PORT || 3000));
/*app.set('port', process.env.PORT || 3000);
app.set('port', 3000);                                              Estas son otras maneras de poder mostrarlo        
app.listen(app.get('port'), ()=>console.log(app.get('port'))) */

