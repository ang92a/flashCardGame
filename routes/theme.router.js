const router = require('express').Router();
const { Theme, Question } = require('../db/models');
const ThemeStartPage = require('../components/ThemeStartPage');

router.get('/:paramsId', async (req, res) => {
  try {
    const { paramsId } = req.params;
    const theme = await Theme.findOne({
      where: { id: paramsId },
    });

    const html = res.renderComponent(ThemeStartPage, { theme, showBtn: true });
    res.send(html);
  } catch ({ message }) {
    console.log({ message });
  }
});

// router.get('/:paramsId/question', async (req, res) => {
//   try {
//     console.log(req.params);
//     const questionArray = await Question.findAll({
//       where: { theme_id: req.params.paramsId },
//     });
//     res.send(questionArray);
//   } catch ({ message }) {
//     console.log({ message });
//   }
// });

module.exports = router;
