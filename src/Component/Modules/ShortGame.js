import React, { Component } from 'react';


class ShortGame extends Component {
    constructor(props){
        super(props);
    }

    processAddToCart = () => {
        console.log(123, this.props.infoItem);
        this.props.handleAddToCart(this.props.infoItem);
    }
    render() {
        return (
                <li>
                    <div className="game-grid">
                        <h4>{this.props.typegame}</h4>
                        <p>{this.props.name}</p>
                        <img src={this.props.image} className="img-responsive" alt=""/>
                        <div className="btn_add_cart" onClick={this.processAddToCart}>Add to cart</div>
                    </div>
                    
                </li>
        );
    }
}

export default ShortGame;