export default function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark custom-nav">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>

                            {/* First Dropdown */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Features
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Analyze Text</a></li>
                                    <li><a className="dropdown-item" href="/">Synonyms</a></li>
                                    <li><a className="dropdown-item" href="/">Antonyms</a></li>
                                    <li><a className="dropdown-item" href="/">Rhyming words</a></li>
                                    <li><a className="dropdown-item" href="/">Dictionary</a></li>
                                </ul>
                            </li>

                            {/* Second Dropdown */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Info
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item " href="/">About-us</a></li>
                                    <li><a className="dropdown-item" href="/">Contact-us</a></li>
                                    <li><a className="dropdown-item" href="/">Developer</a></li>
                                </ul>
                            </li>
                        </ul>

                        {/* Search Form */}
                        <div className="d-flex" role="search">
                            {/* <i className="bi bi-moon"></i> */}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
