import React, { Component } from 'react';
import ProductShortInfo from './ProductShortInfo';
const axios = require('axios').default
class ProductList extends Component {
    constructor(props){
        super(props);
        this.state={
            ds_sp:[],
            so_trang:0

        }
    }
    componentDidMount(){
        axios.get('http://localhost:4000/total-product')
        .then( (response) =>{
        // handle success
        console.log(response);
        this.setState(prevState =>{
            prevState.so_trang = response.data.so_trang;
            console.log(response.data)
        return prevState;
            })
        })
        .catch( (error) =>{
        // handle error
        console.log(error);
        })
        .then (() =>{
        // always executed
        });

        axios.get('http://localhost:4000/product?page=0')
        .then( (response) =>{
        // handle success
        console.log(response);
        this.setState(prevState =>{
            prevState.ds_sp = response.data;
        return prevState;
            })
        })
        .catch( (error) =>{
        // handle error
        console.log(error);
        })
        .then (() =>{
        // always executed
        });
    }

    handleChangePage = (e) =>{
        console.log(e.target.getAttribute('data-page'));
        axios.get('http://localhost:4000/product?page=' + e.target.getAttribute('data-page'))
        .then( (response) =>{
        // handle success
            console.log(response);
            this.setState(prevState =>{
            prevState.ds_sp = response.data; 
            return prevState;
        })
        })
        .catch((error) =>{
        // handle error
            console.log(error);
        })
        .then (() =>{
        // always executed
        });
    }
    render() {
        var array_page_btn=[]; 
        for (let i = 0;i<this.state.so_trang; i++){ 
            console.log(this.state.so_trang)
            array_page_btn.push(i);
        }
        return (
            <div>
                {this.state.ds_sp.map(sp=>{
                    return <ProductShortInfo spInfo={sp} />
                })}
                <button type="button" class="btn btn-info">Prev</button>
                <div>
                    {
                        array_page_btn.map(item=>{
                            return  <button data-page={item} onClick={this.handleChangePage} type="button" class="btn btn-info">{item + 1}</button>
                        })
                    }
                </div>
                <button type="button" class="btn btn-info">Next</button>
                
            </div>
        );
    }
}

export default ProductList;