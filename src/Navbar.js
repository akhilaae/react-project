import { Link } from 'react-router-dom'
const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1 className="title">ReactApp</h1>
            <ul className="nav-items">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/create" className="nav-link">New Blog</Link>
            </ul>
        </div>
     );
}
 
export default Navbar;