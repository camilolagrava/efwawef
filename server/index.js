const express = require('express');
const morgan = require('morgan');
const app = express();

const { mongoose } = require('./database');
//Setting
app.set('port', process.env.PORT || 4000);

//Middlewares
//puede que esto de morman no me de  porque no me salia
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/productos',require('./routes/producto.routers'));
app.use('/api/usuarios',require('./routes/usuario.routers'));
app.use('/api/proovedores',require('./routes/proovedor.routers'));
app.use('/api/ingresoMateriales',require('./routes/ingresoMaterial.routers'));
app.use('/api/salidaMateriales',require('./routes/salidaMaterial.routers'));
app.use('/api/controlBodegas',require('./routes/controlBodega.routers'));
app.use('/api/irregularidades',require('./routes/irregularidad.routers'));
app.use('/api/controlMateriales',require('./routes/controlMaterial.routers'));
app.use('/api/alertas',require('./routes/alerta.routers'));


app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
})