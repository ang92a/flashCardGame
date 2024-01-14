const React = require('react');
const NavBar = require('./NavBar');

function Layout({ title, children, user }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        {/* стили Bootstrap: */}
        <link
          href="/styles/bootstrap.css"
          rel="stylesheet"
          crossOrigin="anonymous"
        ></link>

        {/* стили для HomePage: */}
        <link rel="stylesheet" href="/style/style.css" />
        <script defer src="/scripts/addUser.js" />
        <script defer src="/scripts/changeTheme.js" />
        <script defer src="/scripts/getQuestion.js" />
      </head>
      <body>
        {' '}
        <NavBar user={user} />
        {children}
      </body>
    </html>
  );
}

module.exports = Layout;
