const React = require('react');

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {/* {user && <p>Hello, {user.name}</p>}
            <p>Scores: {user.scores}</p> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

module.exports = NavBar;