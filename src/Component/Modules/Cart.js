import React, { Component } from 'react';
import './Cart.css'

class Cart extends Component {
    render() {
        return (
            <div>
                <div className='image_logo'>
                    <img src='https://banner2.cleanpng.com/20180428/vxq/kisspng-shopping-cart-clip-art-5ae4e4a611d292.380342161524950182073.jpg' alt=""/>
                </div>
                <div className='body_logo'>
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