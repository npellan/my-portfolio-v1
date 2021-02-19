require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const projets = require('../source/data/projets.json');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Nicolas Pellan - Développeur web',
    description: 'Bonjour, je suis développeur web fullstack Javascript, spécialisé en React et Node.js',
    url: '/',
  });
});

router.get('/projets', (req, res, next) => {
  res.locals = { ...res.locals, projets };
  res.render('projets', {
    title: 'Projets | Nicolas Pellan - Développeur web',
    description: 'Découvrez tous les projets que j\'ai réalisé en tant que développeur web fullstack Javascript, React et Node.js',
    url: '/projets',
  });
});

router.get('/projets/:slug', (req, res, next) => {
  const { slug } = req.params;
  const projet = projets.find(
    (elem) => elem.slug === slug,
  );
  res.locals = { ...res.locals, projet };

  res.render('projet', {
    title: `${projet.name} | Nicolas Pellan - Développeur web`,
    description: `Découvrez mon travail réalisé sur le projet ${projet.name}`,
    url: `/projets/${projet.slug}`,
  });
});

router.get('/a-propos', (req, res, next) => {
  res.render('apropos', {
    title: 'A propos | Nicolas Pellan - Développeur web',
    description: 'Je suis un développeur web reconverti par passion, mélomane et grand lecteur',
    url: '/a-propos',
  });
});

router.get('/contact', (req, res, next) => {
  res.render('contact', {
    title: 'Contact | Nicolas Pellan - Développeur web',
    description: 'Pour discuter ou pour travailler ensemble, n\'hésitez pas à me contacter',
    url: '/contact',
  });
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
      res.render('contact', {
        title: 'Contact | Nicolas Pellan - Développeur web',
        error: 'Désolé, une erreur est survenue, votre message n\'a pas été envoyé',
        description: 'Pour discuter ou pour travailler ensemble, n\'hésitez pas à me contacter',
        url: '/contact',
      });
    } else {
      res.render('contact', {
        title: 'Contact | Nicolas Pellan - Développeur web',
        success: 'Merci pour votre message, je vous répondrais très vite !',
        description: 'Pour discuter ou pour travailler ensemble, n\'hésitez pas à me contacter',
        url: '/contact',
      });
    }
  });
});

module.exports = router;
