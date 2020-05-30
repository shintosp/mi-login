import React from 'react';

const Header = function() {
    return (
        <header>
            {/* <img className="brand" src="../images/brand.png" /> */}
            <span className="brand">Logo</span>
            <span className="currentUser">User Name</span>
        </header>
    );
}

export default Header;