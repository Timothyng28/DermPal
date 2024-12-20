import React from 'react';
import './Home.css';
import theme from '../../theme';


function Home() {
    return (
        <div className='intro'>
            <h1 style={{ color: theme.palette.primary.main }}>Welcome to Dermpal</h1>
            <p style = {{color : theme.palette.secondary.main}}>Your one stop skincare solution</p>
        </div>
    );
}

export default Home;
