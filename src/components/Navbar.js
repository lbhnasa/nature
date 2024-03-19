import {Link} from 'react-router-dom';

function Navbar() {
    return(
        <nav className="navbar-menu">
        <ul>
            <Link className="navbar-list" to='/'>Home</Link>
            <Link className="navbar-list" to='/'>Animals</Link>
            <Link className="navbar-list" to='/'>Plants</Link>
            <Link className="navbar-list" to='/'>Anything else</Link>
        </ul>
        </nav>
    ) 
}

export default Navbar;