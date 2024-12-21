import React from 'react';
import Compartment from '../../components/Body/Compartment';
import HighlightedText from '../../components/Body/HighlightedText';
import theme from '../../theme';
import svg1 from './svg1.svg';
import svg2 from './svg2.svg';
import './About.css';

function About() {
    return (
        <div>
            <Compartment backgroundColor = {'transparent'} textColor={'white'} height = "100vh" width = "100vw" overflow = "hidden" backgroundImage = {svg1} >
                <h1>Finding the right skincare</h1>
                <HighlightedText text = 'does not have to be difficult' highlight="not" highlightColor="rgba(200, 50, 0, 0.5)" color='white' />
                <HighlightedText text = 'we are here to simplify it' highlight="simplify" highlightColor="rgba(0, 220, 170, 0.5)" color='white' />
            </Compartment>
            <div id = 'motivation' style={{ backgroundColor: theme.palette.secondary.main, minHeight: '300px'}}>
                <h2>Our Mission</h2>
                At DermPal, we believe finding the right skincare shouldn’t involve trial and error that risks damaging your skin. <br />
                Our mission is to provide a simple and accessible solution tailored to your unique needs.<br />
                We help you gradually incorporate the right products into your routine, protecting your skin barrier along the way. <br />
                Powered by DermAI, we ensure every step you take is precisely what your skin needs.
            </div>
            <Compartment backgroundColor = {'transparent'} textColor={'white'} height = "100vh" width = "100vw" backgroundImage={svg2}>
                <h1> "Everyone's skin is different." </h1>
                <h1>One App,&nbsp;Every Skin,&nbsp;No Exceptions.</h1>
            </Compartment>
        </div>
    );
}

export default About;