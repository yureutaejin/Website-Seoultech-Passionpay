import {
    NavLink
} from 'react-router-dom'


const NavButton = ({ name, to }) => {
    return (
        <li className="nav-item fw-bold">
            <NavLink
                activeClassName='active'
                className="nav-link"
                aria-current="page"
                to={to}
            >
                {name}
            </NavLink>
        </li>
    )
}

export default NavButton