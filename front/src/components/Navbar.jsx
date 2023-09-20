// IMPORTS
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from '../assets/logo.png';
import { useAuth } from "../context/authContext";

const Navbar = () => {
    const { isAuthenticated, logout, user } = useAuth();

    return (
        <div className="header">
            <Link to={
                isAuthenticated ? "/reminders" : "/"
            } 
            className="logo">
                <img src={logo} alt="iconoTienda" className="icono"/>
                <h1 className="nombre text-black"><span>Sagrada</span>Madre</h1>
            </Link>
            <nav className="navbar-container flex rounded-lg">
                <ul className="navbar nav-animaciones flex gap-x-2">
                    {isAuthenticated ? (
                        <>
                            <li>
                                <Link to="/add-reminders" className="Li">Nuevo Recordatorio</Link>
                            </li>
                            <li>
                                <Link to="/" className="Li" onClick={() => {
                                    logout();
                                }}>LOGOUT</Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to="/login" className="Li">LOGIN</Link>
                            </li>
                            <li>
                                <Link to="/register" className="Li">REGISTER</Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;