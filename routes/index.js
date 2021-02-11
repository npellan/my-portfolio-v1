const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Nicolas Pellan - Développeur web' });
});

router.get('/projets', (req, res, next) => {
  res.render('projets', { title: 'Projets | Nicolas Pellan - Développeur web' });
});

router.get('/a-propos', (req, res, next) => {
  res.render('apropos', { title: 'A propos | Nicolas Pellan - Développeur web' });
});

router.get('/contact', (req, res, next) => {
  res.render('contact', { title: 'A propos | Nicolas Pellan - Développeur web' });
});

module.exports = router;
