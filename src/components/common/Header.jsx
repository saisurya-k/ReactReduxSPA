import React from 'react';
import { Link, IndexLink } from 'history';
const Header = () => {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/cats" activeClassName="active">Cats</Link>
        </nav>
    );
}
export default Header;