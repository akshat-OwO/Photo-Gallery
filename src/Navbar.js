import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>Photo Gallery</h1>
            <div className="links">
                <Link to="/">Mountains</Link>
                <Link to="/rivers">Rivers</Link>
            </div>
        </div>
     );
}
 
export default Navbar;