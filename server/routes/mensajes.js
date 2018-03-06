const express = require("express");
const router = express.Router();
const User = require("../models/User");
// const Mensaje = require("../models/Mensaje");
const moment = require("moment");
const nodemailer = require('nodemailer');

router.get("/entrada", (req, res, next) => {
	const emisor = res.locals.user._id;

  Mensaje.find({_id:emisor})
    .sort({ created_at: -1 })
    .populate("emisor")
    .populate("receptor")
    .then(mensajes => {
      res
        .status(200)
        .json({ message: "Bandeja de entrada", mensajes: mensajes });
    });
});

router.get("/salida", (req, res, next) => {
  const emisor = res.locals.user._id;
  
  Mensaje.find({_id:emisor})
    .sort({ created_at: -1 })
    .populate("emisor")
    .populate("receptor")
    .then(mensajes => {
      res
        .status(200)
        .json({ message: "Bandeja de entrada", mensajes: mensajes });
    });
});

router.post("/salida", (req, res, next) => {
  let {asunto,contenido,receptorUsername} = req.body;
  const emisor = res.locals.user._id;
  let emisorName;

  User.findById(emisor)
  .then(user =>{emisorName=user.name})
  .catch(e => {
    console.log(e);
    res.status(500).json({ message: "error"})
  })

	User.findOne({username:receptorUsername})
		.then(user =>{
      receptor = user._id;
      receptorMail = user.email;

      const mensaje = { asunto,contenido,emisor,receptor };

      mailOptions.to = receptorMail;
      mailOptions.subject = asunto;
      mailOptions.html = (`El usuario <b>${emisorName}</b> te ha enviado un mensaje privado,<br> para poder verlo, accede a: <a href=http://diluviodeideas.com>Diluvio de Ideas</a>`)
      
      const newMensaje = new Mensaje(mensaje);
      console.log("EL MENSAJE CONTIENE ========>",mensaje)
      newMensaje.save()
        .then(mensaje => {
          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {console.log(error);} 
            else {console.log('Email enviado: ' + info.response);}
          })
          return res
              .status(200)
              .json({ mensaje: mensaje, message: "mp enviado correctamente" })
        })
		})
		.catch(e => {
      console.log(e);
      res.status(500).json({ message: "error"})
    }) 
});

router.get("/delete/:id", (req, res) => {
  const mensajeId = req.params.id;
  Mensaje.findByIdAndRemove(mensajeId)
    .then(m => { res.status(200).json({ status: "mp eliminado" }) })
    .catch(err => { next(err) });
});

module.exports = router;



console.log('entro en mensajes')
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: 'sebastien.delmestre@gmail.com',
      pass: 'Lalita11'
    }
  });

  let mailOptions = {
    from: '"Fred Foo 👻" <sebastien.delmestre@gmail.com>',
    to: 'manuelavellosolis@gmail.com',
    subject: 'PRUEBA',
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>' // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log(info);
});