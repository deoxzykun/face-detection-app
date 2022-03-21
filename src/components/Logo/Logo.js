import React from 'react';
import Tilt from 'react-parallax-tilt';
import face from './face.png';
import './Logo.css';

const Logo = () => {
    return(
        <div className='ma4 mt0'>
            <Tilt className='Tilt br2 shadow-2'>
                <div className='pa3'>
                    <img alt='logo' src={face} />
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;