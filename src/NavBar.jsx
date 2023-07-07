import { Fragment } from "react";

function NavBar() {
  return (
    <Fragment>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary navbar-bgrnd"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand navbar-col">TaskLeap</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active navbar-col"
                  aria-current="page"
                  href="https://github.com/NemoX12"
                >
                  Creator's Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default NavBar;
