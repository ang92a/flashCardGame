const router = require('express').Router();
const { Theme } = require('../db/models');
const HomePage = require('../components/HomePage');

// router.get('/:paramsId', (req, res) => {
//   try {
//     const { paramsId } = req.params;
//     // res.redirect(`/theme/${paramsId}`);
//     res.json({ url: `/theme/${paramsId}` });
//   } catch ({ message }) {
//     res.send({ message });
//   }
// });

router.get('/', async (req, res) => {
  try {
    const themeArray = await Theme.findAll();
    const html = res.renderComponent(HomePage, {
      title: 'StartGame',
      themeList: themeArray,
    });
    res.send(html);
  } catch ({ message }) {
    res.send({ message });
  }
});

module.exports = router;
