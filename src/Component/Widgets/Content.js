import React, { Component } from 'react';
import TopContent from '../Modules/TopContent';
import Lastest from '../Modules/Lastest';
import Poster from '../Modules/Poster';
import XBox from '../Modules/XBox';
import ListGame from '../Modules/ListGame';
import Cart from '../Modules/Cart';
import CartPage from '../Modules/CartPage';
import { confirm } from "react-confirm-box";

class Content extends Component {
    constructor (props){
        super(props);
        this.state = {
            danhSachGame : [
                {
                    id:1,
                    name:"fo4",
                    typegame:"football",
                    image:"https://cdn.tgdd.vn/2020/05/content/thumb-800x450-10.jpg",
                    price: 500000
                },
                {
                    id:2,
                    name:"fo2",
                    typegame:"football",
                    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrU88x0t2mSLzTHkx1Mn03V4QHkWQ2FpWDyQ&usqp=CAU",
                    price: 600000
                },
                {
                    id:3,
                    name:"fo3",
                    typegame:"football",
                    image:"https://kenh14cdn.com/203336854389633024/2021/3/26/photo-1-1616734368916922985518.jpg",
                    price: 700000
                },
                {
                    id:4,
                    name:"pes",
                    typegame:"pes",
                    image:"https://newsney.com/wp-content/uploads/2021/07/PES-2022-Could-Be-Totally-Free-FEATURE.jpeg",
                    price: 800000
                }
            ],
            mang_gio_hang: []
        }
    }

    addToCart = (item) => {
        let mang = this.state.mang_gio_hang;
        if(mang.length>0){
            let co_kt = 0
            for(var i=0;i<mang.length;i++){
                if(mang[i].id == item.id){
                    item.quantity +=1
                    mang[i]= item
                    this.setState(prevState =>{
                        prevState.mang_gio_hang = mang;
                        return prevState
                    })
                    co_kt = 1
                }
            }
            if(co_kt === 0){
                item.quantity = 1
                mang.push(item);
                this.setState(prevState => {
                    prevState.mang_gio_hang = mang;
                    return prevState;
                });
            }
        }
        else{
            item.quantity = 1
            mang.push(item);
            this.setState(prevState => {
                prevState.mang_gio_hang = mang;
                return prevState;
            });
        }
    }

    cutProduct = async (item) =>{
        let mang = this.state.mang_gio_hang;
        for(var i=0;i<mang.length;i++){
            if(mang[i].id == item.id){
                if(item.quantity <=1){
                    const result = await confirm("Are you sure?");
                    if (result) {
                        console.log("You click yes!");
                        mang.splice(i,1)
                        //return;
                    }
                    else{
                        console.log("You click No!");
                    }
                }
                else{
                    item.quantity -=1
                    mang[i]= item
                }
                this.setState(prevState =>{
                    prevState.mang_gio_hang = mang;
                    return prevState
                })
            }
        }

    }
    deleteProduct = async (item) =>{
        // let mang = this.state.mang_gio_hang;
        // for(var i=0;i<mang.length;i++){
        //     if(mang[i].id == item.id){
                const result = await confirm("Are you sure?");
                if (result) {
                    console.log("You click yes!");
                    let mang = this.state.mang_gio_hang;
                    for(var i=0;i<mang.length;i++){
                        if(mang[i].id == item.id){
                            mang.splice(i,1)
                            item.quantity -=1
                            mang[i]= item


                            this.setState(prevState =>{
                                prevState.mang_gio_hang = mang;
                                return prevState
                            })
                    //return;
                        }
                        else{
                            console.log("You click No!");
                        }

                // item.quantity -=1
                // mang[i]= item

                // this.setState(prevState =>{
                //     prevState.mang_gio_hang = mang;
                //     return prevState
                // })
            }
        }

    }
    render() {
        return (
            <div>
                
                <ListGame handleAddToCart={this.addToCart} danhSachGame={this.state.danhSachGame}/>
                <CartPage CartItems={this.state.mang_gio_hang} handleDelteProduct={this.deleteProduct} handleCutProduct={this.cutProduct}  handleAddToCart={this.addToCart} />
                <Lastest />
                <Poster />
                <XBox />
                <Cart CartItems={this.state.mang_gio_hang}/>
                
            </div>
        );
    }
}

export default Content;