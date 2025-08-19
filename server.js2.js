// server.js
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 🔹 Conexión a MongoDB (cambia el string por tu conexión real)
mongoose.connect("mongodb://localhost:27017/sistemaUsuarios", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("✅ Conectado a MongoDB"))
  .catch(err => console.error(err));

// 🔹 Modelo de Usuario
const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String
});
const User = mongoose.model("User", UserSchema);

// 🔹 Ruta de registro
app.post("/api/auth/register", async (req, res) => {
  // registro de usuario
});

app.post("/api/auth/login", async (req, res) => {
  // login de usuario
});

// 🔹 Ruta protegida (ejemplo dashboard)
app.get("/api/dashboard", (req, res) => {
  res.json({ message: "Bienvenido al dashboard privado" });
});

// 🔹 Levantar servidor
app.listen(3000, () => {
  console.log("🚀 Servidor corriendo en http://localhost:3000");
});
