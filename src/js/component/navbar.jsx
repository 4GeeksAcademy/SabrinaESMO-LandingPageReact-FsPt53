import React from "react";

const NavBar = () => {
    return (
        <div className="bg-black bg-opacity-75">
            <nav className="navbar navbar-expand-lg text-center mx-5 px-5">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="#">Pablo Estévez Artist</a>
                    <nav className="navbar">
                        <div className="container-fluid">
                            <div className="navbar-nav container-fluid d-flex">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <a className="nav-link" href="#">Home</a>
                                <a className="nav-link" href="#">About</a>
                                <a className="nav-link" href="#">Services</a>
                                <a className="nav-link" href="#">Contact</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </nav>
        </div>
    );
};

{/* <nav className="navbar bg-body-tertiary">
    <div className="container-fluid">
        <a className="navbar-brand">Navbar</a>
        <div className="navbar-nav container-fluid d-flex">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            <a className="nav-link" href="#">Features</a>
            <a className="nav-link" href="#">Pricing</a>
            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </div>
    </div>
</nav> */}

export default NavBar;
