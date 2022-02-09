import React from 'react';
import { Link} from 'react-router-dom';

// functional component
const Navbar = (props) => {
    
    return (
        <nav className='ui raised  very padded segment'>
            <Link className='ui teal inverted segment' to="/">Gloria</Link>
            <div className='ui right floated header'>
                <button className="ui button "><Link to="/">Home</Link></button>
                <button className="ui button "><Link to="/about">About</Link></button>
                <button className="ui button "><Link to="/contact">Contact</Link></button>
            </div>
        </nav>
    )
};

export default Navbar;