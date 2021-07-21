import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <Fragment>
            <header className="header">
                <h1 className="heading">USER LIST</h1>
                <nav>
                    <ul className="navigation">
                        <li >
                            <NavLink className="links" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li >
                            <NavLink className="links" to="/firstpage">
                                First Page
                            </NavLink>
                        </li>
                        <li >
                            <NavLink className="links" to="/secondpage">
                                Second Page
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </Fragment>
    );
};

export default Header;
