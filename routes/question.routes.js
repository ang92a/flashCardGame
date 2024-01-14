const router = require('express').Router();
const { Question } = require('../db/models');

router.get('/:paramsId/question', async (req, res) => {
  try {
    console.log(req.params);
    const questionArray = await Question.findAll({
      where: { theme_id: req.params.paramsId },
    });
    res.send(questionArray);
  } catch ({ message }) {
    console.log({ message });
  }
});

module.exports = router;
