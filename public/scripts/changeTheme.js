const themeCard = document.querySelector('.themeList');

if (themeCard) {
  themeCard.addEventListener('click', (e) => {
    if (e.target.closest('.themeImg')) {
      const theme = e.target.closest('.theme');
      const { id } = theme.dataset;
      if (id) {
        window.location.assign(`/theme/${id}`);
      }
    }
  });
}

// if (themeCard) {
//   themeCard.addEventListener('click', async (e) => {
//     if (e.target.closest('.themeImg')) {
//       const theme = e.target.closest('.theme');
//       const { id } = theme.dataset;
//       console.log(id);
//       const res = await fetch(`/home/${id}`);
//       const data = await res.json();

//       if (data) {
//         window.location.assign(data.url);
//       }
//     }
//   });
// }
