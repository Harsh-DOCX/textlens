import { Link} from "react-router-dom";

export default function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark custom-nav">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/textlens">{props.title}</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                            </li>

                            {/* First Dropdown */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Features
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link to="/analyse-text" className="dropdown-item">Analyze Text</Link></li>
                                    <li><Link to="/synonyms" className="dropdown-item">Synonyms</Link></li>
                                    <li><Link to="/antonyms" className="dropdown-item">Antonyms</Link></li>
                                    <li><Link to="/rhyming-word" className="dropdown-item">Rhyming words</Link></li>
                                    <li><Link to="/scan-text" className="dropdown-item">check gramatic error</Link></li>
                                    <li><Link to="/translator" className="dropdown-item">Dictionary</Link></li>
                                    <li><Link to="/bit-conversion" className="dropdown-item">Binary and text conversion</Link></li>
                                    <li><Link to="/morse-conversion" className="dropdown-item">Morse and text conversion</Link></li>

                                </ul>
                            </li>

                            {/* Second Dropdown */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Info
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link to="/about-us" className="dropdown-item ">About-us</Link></li>
                                    <li><Link to="/contact-us" className="dropdown-item">Contact-us</Link></li>
                                    <li><Link onClick={()=>{window.open("https://harsh-docx.github.io/harshcode", '_blank')}} className="dropdown-item">Developer</Link></li>
                                </ul>
                            </li>
                        </ul>

                        {/* Search Form
                        <div className="d-flex" role="search">
                        </div> */}
                    </div>
                </div>
            </nav>
        </>
    );
}
