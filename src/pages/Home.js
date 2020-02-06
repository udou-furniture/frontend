import React from 'react';

import CardIndex from '../components/reviews/CardIndex';
import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import Footer from '../components/footer/Footer';

class Home extends React.Component {
    render() {
        return (
			<>
                <Hero />
                <About />
                <CardIndex />
                <Footer />
			</>	
        );
    }
}

export default Home;