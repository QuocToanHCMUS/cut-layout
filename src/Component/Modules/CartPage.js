import React, { Component } from 'react';
import ItemCartPage from '../Page/ItemCartPage';
class CartPage extends Component {
    render() {
        return (
            <div>
                <div class="table-responsive">
                    <table class="table table-hover table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Hình</th>
                                <th>Tên</th>
                                <th>Số lượng</th>
                                <th>Đơn giá</th>
                                <th>Tổng tiền</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.CartItems.map(ItemCart => {
                                return <ItemCartPage InfoItem={ItemCart} 
                                 handleAddToCart={this.props.handleAddToCart} 
                                 handleCutProduct={this.props.handleCutProduct} 
                                 handleDelteProduct={this.props.handleDelteProduct}/>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default CartPage;