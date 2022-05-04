import React, { Component } from 'react';
import Header from '../Widgets/Header';
import Content from '../Widgets/Content';
import Footer from '../Widgets/Footer';
class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Content />
                <Footer />
            </div>
            
        );
    }
}

export default Home;