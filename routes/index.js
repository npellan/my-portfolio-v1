const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();
const projets = require('../source/data/projets.json');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Nicolas Pellan - Développeur web' });
});

router.get('/projets', (req, res, next) => {
  res.render('projets', { title: 'Projets | Nicolas Pellan - Développeur web', projets });
});

router.get('/projets/:slug', (req, res, next) => {
  const projetSlug = req.params.slug;

  const projet = projets.find(
    (elem) => elem.slug === projetSlug,
  );
  res.render('projet', { title: `${projet.name} | Nicolas Pellan - Développeur web`, projet });
});

router.get('/a-propos', (req, res, next) => {
  res.render('apropos', { title: 'A propos | Nicolas Pellan - Développeur web' });
});

router.get('/contact', (req, res, next) => {
  res.render('contact', { title: 'Contact | Nicolas Pellan - Développeur web', error: false, success: false });
});

router.post('/contact', (req, res, next) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `${req.body.email}`, // This is ignored by Gmail
    to: process.env.GMAIL_USER,
    subject: 'Nouveau message sur nicolaspellan.fr',
    text: `${req.body.name} (${req.body.email}) a dit: ${req.body.message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.render('contact', { title: 'Contact | Nicolas Pellan - Développeur web', error: true, message: 'Désolé, une erreur est survenue, votre message n\'a pas été envoyé' });
    } else {
      res.render('contact', { title: 'Contact | Nicolas Pellan - Développeur web', success: true, message: 'Merci pour votre message, je vous répondrais très vite !' });
    }
  });
});

module.exports = router;
