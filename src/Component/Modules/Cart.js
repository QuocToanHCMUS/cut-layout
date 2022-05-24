import React, { Component } from 'react';
import './Cart.css'

class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
            showOrHide : false
        }
    }
    handleShowOrHideCart = () =>{
        if(this.showOrHide){
            this.setState(prevState=>{
                prevState.showOrHide=false;
                return prevState
            })
        }
        else{
            this.setState(prevState=>{
                prevState.showOrHide=true;
                return prevState
            })
        }
    }

    render() {
        return (
            <div>
                <div className='image_logo' onClick={this.handleShowOrHideCart}>
                    <img src='https://banner2.cleanpng.com/20180428/vxq/kisspng-shopping-cart-clip-art-5ae4e4a611d292.380342161524950182073.jpg' alt=""/>
                    {
                        (this.props.totalQuantity)?<div className='number_total'>
                            {this.props.totalQuantity}
                        </div>:<></>
                    }
                </div>
                <div className={'body_logo '+ this.state.showOrHide}>
                    {
                    this.props.CartItems.map(ItemCart => {
                        return <div className="item_cart_in_list">
                                    <div className="hinh_san_pham">
                                        <img src={ItemCart.image} />
                                    </div>
                                    <div className="short_description">
                                        <div className="title_prod">{ItemCart.name}</div>
                                        <div className="quantity_prod">Số lượng: {ItemCart.quantity}</div>
                                    </div>
                                </div>
                    })
                }
                </div>
                
            </div>
        );
    }
}

export default Cart;