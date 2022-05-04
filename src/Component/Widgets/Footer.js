import React, { Component } from 'react';
import TopFooter from '../Modules/TopFooter';
import CopyWrite from '../Modules/CopyWrite';
class Footer extends Component {
    render() {
        return (
            <div>
                <TopFooter />
                <CopyWrite />
            </div>
        );
    }
}

export default Footer;