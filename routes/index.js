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

router.get('/projets/:id', (req, res, next) => {
  const projetId = parseInt(req.params.id, 10);

  const projet = projets.find(
    (elem) => elem.id === projetId,
  );
  res.render('projet', { title: 'Projets | Nicolas Pellan - Développeur web', projet });
});

router.get('/a-propos', (req, res, next) => {
  res.render('apropos', { title: 'A propos | Nicolas Pellan - Développeur web' });
});

router.get('/contact', (req, res, next) => {
  res.render('contact', { title: 'Contact | Nicolas Pellan - Développeur web' });
});

module.exports = router;
