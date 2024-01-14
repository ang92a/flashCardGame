const React = require('react');
const Layout = require('./Layout');
const Header = require('./Header');
const Theme = require('./Theme');

function ThemeStartPage({ theme, showBtn }) {
  return (
    <Layout>
      <Header />
      <Theme theme={theme} showBtn={showBtn} />
    </Layout>
  );
}

module.exports = ThemeStartPage;
