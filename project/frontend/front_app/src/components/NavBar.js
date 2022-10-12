import {
    Link,
    NavLink
} from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm sticky-top navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">Home</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink
                            activeClassName='active'
                            className="nav-link"
                            aria-current="page"
                            to="/info"
                        >
                            Info
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            activeClassName='active'
                            className="nav-link"
                            aria-current="page"
                            to="/blogs"
                        >
                            Forum
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar