import React, { Component } from 'react';
import ShortGame from './ShortGame';

class ListGame extends Component {
    constructor(props){
        super(props);
        this.state = {
            // danhSachGame : [
            //     {
            //         name:"fo4",
            //         typegame:"football",
            //         image:"https://cdn.tgdd.vn/2020/05/content/thumb-800x450-10.jpg"
            //     },
            //     {
            //         name:"fo2",
            //         typegame:"football",
            //         image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrU88x0t2mSLzTHkx1Mn03V4QHkWQ2FpWDyQ&usqp=CAU"
            //     },
            //     {
            //         name:"fo3",
            //         typegame:"football",
            //         image:"https://kenh14cdn.com/203336854389633024/2021/3/26/photo-1-1616734368916922985518.jpg"
            //     },
            //     {
            //         name:"pes",
            //         typegame:"pes",
            //         image:"https://newsney.com/wp-content/uploads/2021/07/PES-2022-Could-Be-Totally-Free-FEATURE.jpeg"
            //     }
            // ]
        }
    }

    render() {
        return (
            <div>
                <div className="content">
                    <div className="container">
                        <div className="top-games">
                            <h3>Top Games</h3>
                            <span></span>
                        </div>
                        <div className="top-game-grids">
                            <ul id="flexiselDemo1">
                                {/* <ShortGame typegame="hahaha" name="toan" image="images/t1.jpg" /> */}
                                {/* {
                                    this.state.danhSachGame.map((item,index)=>{
                                        return <ShortGame key={index} name={item.name} typegame={item.typegame} image={item.image} />
                                    })
                                } */}
                                {
                                    this.props.danhSachGame.map((item,index)=>{
                                        return <ShortGame key={index} name={item.name} typegame={item.typegame} image={item.image}
                                                            dataID={index} infoItem={item} handleAddToCart={this.props.handleAddToCart} />
                                    })
                                }
                                {/* <li>
                                    <div className="game-grid">
                                        <h4>{this.state.danhSachGame[0].typegame}</h4>
                                        <p>{this.state.danhSachGame[0].name}</p>
                                        <img src={this.state.danhSachGame[0].image} className="img-responsive" alt=""/>
                                    </div>	
                                </li>
                                <li>
                                    <div className="game-grid">
                                        <h4>{this.state.danhSachGame[1].typegame}</h4>
                                        <p>{this.state.danhSachGame[1].name}</p>
                                        <img src={this.state.danhSachGame[1].image} className="img-responsive" alt=""/>
                                    </div>	
                                </li>
                                <li>
                                    <div className="game-grid">
                                        <h4>{this.state.danhSachGame[2].typegame}</h4>
                                        <p>{this.state.danhSachGame[2].name}</p>
                                        <img src={this.state.danhSachGame[2].image} className="img-responsive" alt=""/>
                                    </div>	
                                </li>
                                <li>
                                    <div className="game-grid">
                                        <h4>{this.state.danhSachGame[3].typegame}</h4>
                                        <p>{this.state.danhSachGame[3].name}</p>
                                        <img src={this.state.danhSachGame[3].image} className="img-responsive" alt=""/>
                                    </div>	
                                </li> */}
                                {/* <li>
                                    <div className="game-grid">
                                        <h4>Action Games</h4>
                                        <p>Nulla elementum nunc tempus.</p>
                                        <img src="images/t1.jpg" className="img-responsive" alt=""/>
                                    </div>	
                                </li>
                                <li>
                                    <div className="game-grid">
                                        <h4>Racing Games</h4>
                                        <p>Nulla elementum nunc tempus.</p>
                                        <img src="images/t3.jpg" className="img-responsive" alt=""/>
                                    </div>
                                </li>
                                <li>
                                    <div className="game-grid">
                                        <h4>3D Games</h4>
                                        <p>Nulla elementum nunc tempus.</p>
                                        <img src="images/t4.jpg" className="img-responsive" alt=""/>
                                    </div>
                                </li>
                                <li>
                                    <div className="game-grid">
                                        <h4>Arcade Games</h4>
                                        <p>Nulla elementum nunc tempus.</p>
                                        <img src="images/t2.jpg" className="img-responsive" alt=""/>
                                    </div>	
                                </li>				 				 	 */}
                            </ul>
                            
                                
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListGame;