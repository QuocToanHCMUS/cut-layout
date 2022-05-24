import React, { Component } from 'react';
import Header from '../Widgets/Header';
import Content from '../Widgets/Content';
import Footer from '../Widgets/Footer';
import ProductList from '../Modules/ProductList';
class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataAPI:{}
        }
    }
    // componentDidMount(){
        
    // }

    render() {
        return (
            <div>
                {/* <Header /> */}
                <ProductList />
                <Content />
                {/* <Footer /> */}
            </div>
            
        );
    }
}

export default Home;