const express = require("express");
const sendEmail = require("./mailer");

const app = express();

// mailer.js
const nodemailer = require("nodemailer");

// Configurar el transportador de nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "angulordscenfotec@gmail.com", // Tu dirección de correo de Gmail
    pass: "qbjs qjsj sbrf wudq", // Tu contraseña de Gmail
  },
});
// app.js (o donde manejes la lógica de tu aplicación)

app.use(express.json()); // Para poder parsear JSON en las solicitudes

app.post("/send-email", (req, res) => {
  const { to, subject, text } = req.body;
  sendEmail(to, subject, text);
  res.send("Correo enviado");
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});

// Función para enviar correo
const sendEmail = (to, subject, text) => {
  const mailOptions = {
    from: "tu_correo@gmail.com",
    to,
    subject,
    text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(`Error: ${error}`);
    }
    console.log(`Email enviado: ${info.response}`);
  });
};

// Exportar la función
module.exports = sendEmail;
