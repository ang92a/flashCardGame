const React = require('react');
const Layout = require('./Layout');
const Header = require('./Header');
const ThemeList = require('./ThemeList');

function HomePage({ title, themeList }) {
  return (
    <Layout title={title}>
      <Header />
      <ThemeList themeList={themeList} />
    </Layout>
  );
}

module.exports = HomePage;
