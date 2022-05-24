import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {NavLink,Link} from "react-router-dom";
class TopBanner extends Component {
    constructor(props){
        super(props);
        this.state={
            valueSearch:""
        }
        this.handleClickTest = this.handleClickTest.bind(this);
    }
    ChangeInputSearch = (e) =>{
        console.log(e);
        
        this.setState({
            valueSearch :e.target.value
        })
        
    }
    SearchButtonClick = (e) =>{
        let a = window.location.href.split('?')
        if(a.length>1){
            window.location.href = a[0] + "?s=" + this.state.valueSearch
        }
        else{
            window.location.href = window.location.href + "?s=" + this.state.valueSearch
        }
    }
    // componentDidMount(){
    //     alert("haha")
    // }
    // shouldComponentUpdate(nextProps,nextState){
    //     alert("componet should update")
    //     console.log(this.props, this.state)
    //     console.log(nextProps,nextState);
    //     return true
    // }
    // componentWillUpdate(){
    //     alert("Component Will Update")
    // }
    handleClickTest(){
        console.log('click button')
        //ReactDOM.unmountComponentAtNode(document.getElementById('root'))
        this.setState({
            valueSearch: this.state.valueSearch * 1 + 1
        })
        
    }
    // componentWillUnmount(){
    //     console.log("Component Will Unmount")
    // }
    render() {
        return (
            <div>
                <div className="top-banner">
                                <div className="header">
                                    <div className="container">
                                        <div className="headr-left">
                                            <div>
                                                <button onClick={this.handleClickTest}>On Click</button>
                                            </div>
                                            <div className="social">							
                                                <a href="#"><i className="facebook"></i></a>
                                                <a href="#"><i className="twitter"></i></a>
                                                <a href="#"><i className="gplus"></i></a>	
                                                <a href="#"><i className="pin"></i></a>	
                                                <a href="#"><i className="youtube"></i></a>	
                                            </div>
                                            <div className="search">
                                                
                                                    <input type="submit" value="" onClick={this.SearchButtonClick}/>
                                                    <input type="text" onChange={this.ChangeInputSearch} placeholder="Search..."/>					 
                                                
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                        <div className="headr-right">
                                            <div className="details">
                                                <ul>
                                                    <li><a href="mailto@example.com"><span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>info(at)example.com</a></li>
                                                    <li><span className="glyphicon glyphicon-earphone" aria-hidden="true"></span>(+1)000 123 456789</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                                <div className="banner-info">
                                    <div className="container">
                                        <div className="logo">
                                                <h1><a href="index.html">GAME BOX</a></h1>
                                        </div>
                                        <div className="top-menu">
                                            <span className="menu"></span>
                                                <ul className="nav1">
                                                    <li><NavLink className = {({ isActive }) => {return (isActive)?'active':'inactive'}} to="/">Home</NavLink></li>
                                                    <li><NavLink className = {({ isActive }) => {return (isActive)?'active':'inactive'}} to="/register">Register</NavLink></li>
                                                    <li><NavLink className = {({ isActive }) => {return (isActive)?'active':'inactive'}} to="/game2">Game2</NavLink></li>
                                            </ul>
                                        </div>	
                                        
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                        </div>
            </div>
        );
    }
}

export default TopBanner;