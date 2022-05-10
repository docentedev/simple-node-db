const http = require('http')
const url = require('url')
const fs = require('fs')
const { Client } = require('pg')

// localhost prueba_node 5432 pass: ''
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'prueba_node',
    password: '',
    port: 5432,
})

client.connect()

const server = http.createServer((req, res) => {
    const urlParse = url.parse(req.url, true)
    if (urlParse.pathname === '/') {
        client.query('select * from estudiantes', (err, resDB) => {
            console.log(err, resDB.rows)
            res.write(JSON.stringify(resDB.rows))
            res.end()
        })
    }
    if (urlParse.pathname === '/get') {
        const apellido = urlParse.query.apellido || ''
        console.log(apellido);
        client.query(`select * from estudiantes where apellido  =  $1`, [apellido], (err, resDB) => {
            console.log(err, resDB)
            res.write(JSON.stringify(resDB.rows))
            res.end()
        })
    }
    if (urlParse.pathname === '/home') {
        fs.readFile('index.html', (err, data) => {
            res.write(data)
            res.end()
        })
    }
})

// http://localhost:3000/get?apellido=Cortez

server.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000')
})

/*
const insert = `
INSERT INTO estudiantes
(nombre, apellido)
VALUES('Rodrigo', 'Palza')
`
client.query(insert, (err, res) => {
    console.log(err, res)
})
*/
