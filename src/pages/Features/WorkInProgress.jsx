import React from 'react';
import BG from './BG.svg';

function WorkInProgress(props) {
    return (
        <div 
            style={{ 
                backgroundImage:`url(${BG})`, 
                backgroundRepeat: 'no-repeat', 
                backgroundSize: 'cover', 
                height: '100vh', 
                width: '100vw',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <h1>Work in Progress...</h1>
            <h2>The team is working hard to bring {props.feature} to you!</h2>
        </div>
    );
}

export default WorkInProgress;