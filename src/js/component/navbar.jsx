import React from "react";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Pablo Estévez Artist</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <nav class="navbar bg-body-tertiary">
                    <div class="container-fluid">
                        <div className="navbar-nav container-fluid d-flex">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            <a className="nav-link" href="#">Features</a>
                            <a className="nav-link" href="#">Pricing</a>
                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                        </div>
                    </div>
                </nav>
            </div>
        </nav>
    );
};

{/* <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand">Navbar</a>
        <div className="navbar-nav container-fluid d-flex">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            <a className="nav-link" href="#">Features</a>
            <a className="nav-link" href="#">Pricing</a>
            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </div>
    </div>
</nav> */}

export default NavBar;
