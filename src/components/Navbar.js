import {Link} from 'react-router-dom';

function Navbar() {
    return(
        <nav className="navbar-menu">
        <h2 claassName="header">
        I don't know what to name it!!
        </h2>
        <ul>
            <Link className="navbar-list" to='/'>Home</Link>
            <Link className="navbar-list" to='/animals'>Animals</Link>
            <Link className="navbar-list" to='/'>Plants</Link>
            <Link className="navbar-list" to='/'>About</Link>
        </ul>
        </nav>
    ) 
}

export default Navbar;