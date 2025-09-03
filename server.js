const express = require("express")
const sqlite3 = require('sqlite3')
const cors = require('cors')
const bcrypt = require('bcrypt')

const app = express();
const PORT = 3000;

app.use(cors())
app.use(express.json())

// Criar banco sqlite e tabela
const db = new sqlite3.Database('./database.db')