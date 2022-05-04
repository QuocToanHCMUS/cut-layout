import React, { Component } from 'react';
import TopBanner from '../Modules/TopBanner';
import Slider from '../Modules/Slider';

class Header extends Component {
    render() {
        return (
            <div>
                <TopBanner />            
                <Slider />
            </div>
        );
    }
}

export default Header;