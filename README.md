# Node Bse de datos

## Instruccions

- clonar el proyecto `git clone git@github.com:docentedev/simple-node-db.git`
- instalar dependencias `npm install`
- crear base de datos  de prueba e ingresar las credenciales en el archivo `index.js`

Modifique las siguientes lineas de codigo con sus credenciales dentro del archivo `index.js`

```js
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'prueba_node',
    password: '',
    port: 5432,
})
```

- restaure el backup `dump-prueba_node-202205092203.backup` que esta en el directorio `backup`
