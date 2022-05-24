import React, { Component } from 'react';

class ProductShortInfo extends Component {
    render() {
        return (
            <div className="short_product">
                <div className="title">{this.props.spInfo.ten_sach}</div>
                <div className="title"><img src={'images/sach/'+this.props.spInfo.hinh} /></div>
                {
                    (this.props.spInfo.don_gia)?<div className="price_have_sale">
                        <div className="sale_price">{this.props.spInfo.don_gia}</div>
                        <div className="origin_price">{this.props.spInfo.gia_bia}</div>
                    </div>:<div className="price_no_sale">
                        <div className="origin_price">{this.props.spInfo.gia_bia}</div>
                    </div>
                }
            </div>
        );
    }
}

export default ProductShortInfo;