// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import News from './components/News';
import Services from './components/Services';
import Gallery from './components/Gallery';
import AparatPolhut from './components/AparatPolhut';

const App = () => {
    return (
        <div>
            <Header />
            <main>
                <Home />
                <AparatPolhut />
                <About />
                <News />
                <Services />
                <Gallery />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;
