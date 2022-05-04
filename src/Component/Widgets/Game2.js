import React, { Component } from 'react';
import './Game2.css';
class Game2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            co_nhan_biet:false,
            vitri_y:0,
            vitri_x:-50,
            count:0,
            vitri_x1:250,
            vitri_a:500,
            vitri_b:718,
        }
        this.start=this.start.bind(this)
        this.hold=this.hold.bind(this)
    }
    start(){
        //console.log('start');
        
        if(this.state.count < 2){
            if(this.state.vitri_y < 500){
                this.setState ({
                    co_nhan_biet:true,
                    vitri_y:this.state.vitri_y + 1,
                    //
                    count:this.state.count
                })
                setTimeout(this.start, 10);
                //console.log(this.state.count);
            }
            else{
                this.setState ({
                    co_nhan_biet:true,
                    vitri_y:0,
                    vitri_x:-50+((Math.floor(Math.random()*4)+1)*100),
                    vitri_x1:-250+((Math.floor(Math.random()*4)+1)*100),
                    //
                    count:this.state.count + 1
                })
                setTimeout(this.start, 1000)
                //console.log(this.state.count);
            }
        }
        else if(this.state.count  < 3){
            if(this.state.vitri_y < 500){
                this.setState ({
                    co_nhan_biet:true,
                    vitri_y:this.state.vitri_y + 2,
                    //
                    count:this.state.count
                })
                setTimeout(this.start, 5);
                //console.log(this.state.count);
            }
            else{
                this.setState ({
                    co_nhan_biet:true,
                    vitri_y:0,
                    //
                    count:this.state.count + 1,
                    vitri_x:-50+((Math.floor(Math.random()*4)+1)*100),
                    vitri_x1:-250+((Math.floor(Math.random()*4)+1)*100),

                })
                setTimeout(this.start, 1000)
                //console.log(this.state.count);
            }
        }
        else if(this.state.count  < 5){
            if(this.state.vitri_y < 500){
                this.setState ({
                    co_nhan_biet:true,
                    vitri_y:this.state.vitri_y +5,
                    count:this.state.count
                })
                setTimeout(this.start, 0);
                //console.log(this.state.count);
            }
            else{
                this.setState ({
                    co_nhan_biet:true,
                    vitri_y:0,
                    //
                    count:this.state.count + 1,
                    vitri_x:-50+((Math.floor(Math.random()*4)+1)*100),
                    vitri_x1:-250+((Math.floor(Math.random()*4)+1)*100),
                })
                setTimeout(this.start, 1000)
                //console.log(this.state.count);
            }
        }
       
    }

    hold(e){
        console.log('hold');
        console.log(e)
        if(e.keyCode === 38){
            this.setState ({
                vitri_a:this.state.vitri_a - 5,   
            })
            console.log("vi tri y:"+this.state.vitri_a)
        }
        else if(e.keyCode === 40){
            this.setState ({
                vitri_a:this.state.vitri_a + 5,   
            })
            console.log("vi tri y:"+this.state.vitri_a)
        }
        else if(e.keyCode === 39){
            this.setState ({
                vitri_b:this.state.vitri_b - 5,   
            })
            console.log("vi tri x:"+this.state.vitri_b)
        }
        else if(e.keyCode === 37){
            this.setState ({
                vitri_b:this.state.vitri_b + 5,   
            })
            console.log("vi tri x:"+this.state.vitri_b)
        }
     
        

        var x_xe = this.state.vitri_b;
        console.log(x_xe)
        var y_xe = this.state.vitri_a;
        console.log(y_xe)
        var x_nguoc5 = this.state.vitri_x+168;
        var x_nguoc4 = this.state.vitri_x+368;
        var x_nguoc3 = this.state.vitri_x+568;
        var x_nguoc2 = this.state.vitri_x+768;
        var x_nguoc1 = this.state.vitri_x+968;

        var x_nguoc6 = this.state.vitri_x1+268;
        var x_nguoc7 = this.state.vitri_x1+468;
        var x_nguoc8 = this.state.vitri_x1+668;
        var x_nguoc9 = this.state.vitri_x1+868;
        var x_nguoc10 = this.state.vitri_x1+1068;
        var y_nguoc = this.state.vitri_y;
        if(((x_xe===x_nguoc1)||(x_xe===x_nguoc2)||(x_xe===x_nguoc3)||(x_xe===x_nguoc4)||(x_xe===x_nguoc5)||
        (x_xe===x_nguoc6)||(x_xe===x_nguoc7)||(x_xe===x_nguoc8)||(x_xe===x_nguoc9)||(x_xe===x_nguoc10))&&
        (y_xe===y_nguoc)){
            alert("bạn đã thua")
        }
        
    }
    
      
    
    /*
    move(){
        console.log('move');
        if(this.state.co_nhan_biet){
                this.setState({
                    co_nhan_biet:this.state.co_nhan_biet,
                    vitri_y:this.state.vitri_y ,
                    }
                )
                console.log(this.state.vitri_y)
        }
    }
    */

    render() {
        return (
            <div id='main' className='main'>
                <div id='duong_dua' className='duong_dua'>
                    <div id='xe' className='xe start' 
                        style={{
                            marginTop:(this.state.vitri_y )+"px",
                            position:"relative",
                            left:(this.state.vitri_x )+"px"
                            }} >
                    </div>
                    <div id='xe_1' className='xe start' 
                        style={{
                            marginTop:(this.state.vitri_y )+"px",
                            position:"relative",
                            left:(this.state.vitri_x1 )+"px"
                            }} >
                    </div>
                </div>
                <div id='xe_dua' className='xe' 
                        style={{
                            
                            zIndex:9999999,
                            position:"fixed",
                            top:(this.state.vitri_a) + "px",
                            right: (this.state.vitri_b) + "px",
                            }} >
                                
                </div>
                <button id='btn' className='start' onKeyDown={this.hold} onClick={this.start}
                    style={{
                        position:"fixed"
                        ,zIndex:10000
                        }}
                    >Start        
                </button>
                <div style={{
                        position:"fixed"
                        ,zIndex:10000,
                        color:"red",
                        fontSize:"20px",
                        top:"650px",
                        left:"730px",
                        }}
                >
                    Điểm :{this.state.count}
                </div>
            </div>
        );
    }
}

export default Game2;