const React = require('react');

function Theme({ theme, showBtn }) {
  return (
    <div className="theme" data-id={theme.id}>
      <div className="themeImg">
        <img src={theme.theme_image} alt="img" />
      </div>
      <p>{theme.title}</p>
      {showBtn && <button className="btnStartGame">Start Game</button>}
    </div>
  );
}

module.exports = Theme;
