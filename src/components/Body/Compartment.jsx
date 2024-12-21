import React from 'react';

const Compartment = ({ children, backgroundColor, textColor, customeStyles, backgroundImage}) => {
    return (
        <div style={{ 
            backgroundImage: `url(${backgroundImage})` || 'none',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundColor: backgroundColor || 'white', 
            color: textColor || 'black', 
            minHeight: '400px', 
            padding: '50px', 
            margin: '0px', 
            textAlign: 'center', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            flexDirection: 'column',
            ...customeStyles 
        }}>
            {children}
        </div>
    );
};

export default Compartment;