const express = require('express');
const projets = require('../source/data/projets.json');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Nicolas Pellan - Développeur web' });
});

router.get('/projets', (req, res, next) => {
  res.render('projets', { title: 'Projets | Nicolas Pellan - Développeur web' });
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
  res.render('contact', { title: 'Contact | Nicolas Pellan - Développeur web' });
});

module.exports = router;
