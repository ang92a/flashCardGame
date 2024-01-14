const btnStartGame = document.querySelector('.btnStartGame');
const titleCard = document.querySelector('.theme');

if (btnStartGame) {
  btnStartGame.addEventListener('click', (e) => {
    if (e.target) {
      const theme = e.target.closest('.theme');
      const { id } = theme.dataset;
      window.location.assign(`/theme/${id}/question/1`);
    }
  });
}
