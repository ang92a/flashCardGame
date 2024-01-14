const React = require('react');
const Theme = require('./Theme');

function ThemeList({ themeList }) {
  return (
    <div className="themeList">
      {themeList.map((theme) => (
        <Theme theme={theme} />
      ))}
    </div>
  );
}
module.exports = ThemeList;
