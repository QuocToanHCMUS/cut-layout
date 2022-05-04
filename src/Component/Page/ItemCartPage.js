import React, { Component } from 'react';

class ItemCartPage extends Component {

    processAddToCart = () => {
        //console.log(123, this.props.InfoItem);
        this.props.handleAddToCart(this.props.InfoItem);
    }
    processCutProduct = () => {
        //console.log(123, this.props.InfoItem);
        this.props.handleCutProduct(this.props.InfoItem);
    }
    processDelteProduct = () =>{
        this.props.handleDelteProduct(this.props.InfoItem)
    }

    render() {
        return (
            <tr>
                <td>{this.props.InfoItem.id}</td>
                <th><img src={this.props.InfoItem.image} /></th>
                <th>{this.props.InfoItem.name}</th>
                <th>
                    <button onClick={this.processCutProduct}>-</button>
                    <input value={this.props.InfoItem.quantity} />
                    <button onClick={this.processAddToCart}>+</button>
                </th>
                <th>{this.props.InfoItem.price}</th>
                <th>{this.props.InfoItem.quantity * this.props.InfoItem.price}</th>
                <th>
                    <button className="btn btn-danger" 
                    onClick={this.processDelteProduct}
                    >Xóa</button>
                </th>
            </tr>
        );
    }
}

export default ItemCartPage; 