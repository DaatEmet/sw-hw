import React from 'react';

const Header = () => {
    return (
        <div>
            <nav >
                <button className='btn-danger'>Home</button>
                <button className='btn-danger'>About me</button>
                <button className='btn-danger'>Star wars</button>
                <button className='btn-danger'>Contact</button>
            </nav>
            <h1 className='h1'>Luke Skywalker</h1>
        </div>
    );
};

export default Header;