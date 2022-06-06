import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="container-fluid py-3">
            <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
                <div className="">
                    <h3>
                        <Link to="/" className="px-3 py-2 text-dark text-decoration-none">
                            <l1>Compilador online</l1>
                        </Link>
                    </h3>
                </div>
                <ul className="navbar-nav m-2">
                    <li className="nav-item">
                        <Link to="/main" className="px-3 py-2 text-dark text-decoration-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
                        </svg>
                            Home
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Header;