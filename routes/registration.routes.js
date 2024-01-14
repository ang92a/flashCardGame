const router = require('express').Router();
const { User } = require('../db/models');

const RegistrationPage = require('../components/RegistrationPage');

router.get('/', (req, res) => {
  const html = res.renderComponent(RegistrationPage, {
    title: 'Registration Page',
  });
  res.send(html);
});

router.post('/', async (req, res) => {
  try {
    const { name } = req.body;
    console.log(name);
    const user = await User.create({ name, scores: 0 });
    res.json({
      message: 'success',
    });
  } catch ({ message }) {
    console.log({ message });
  }
});

module.exports = router;
