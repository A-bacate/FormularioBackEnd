// Importar bibliotecas
const express = require("express")
const sqlite3 = require('sqlite3')
const cors = require('cors')
const bcrypt = require('bcrypt')

// Configurar servidor
const app = express();
const PORT = 3000;

app.use(cors())
app.use(express.json())

// Criar banco sqlite e tabela
const db = new sqlite3.Database('./database.db')
// Criar tabela usuarios
db.run(`CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    email TEXT,
    senha TEXT
)`)