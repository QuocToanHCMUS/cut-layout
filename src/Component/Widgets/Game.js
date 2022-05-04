import React, { Component } from 'react';
import './Game.css';
class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
            co_nhan_biet:false,
            vitri_y:0,
            count:0,
            vitri_y1:0,
            count_1:0,
            vitri_y2:0,
            count_2:5,
            vitri_y3:0,
            count_3:0
        }
        this.start=this.start.bind(this)
        //this.move=this.move.bind(this)
    }
    start(){
        console.log('start');
        var a = Math.floor(Math.random()*1)
        var b = ['vitri_y1', 'vitri_y2']
        
        
        
        /*
        if(this.state.count < 5){
            if(this.state.vitri_y < 500){
                this.setState ({
                    co_nhan_biet:true,
                    vitri_y:this.state.vitri_y + 1,
                    //
                    count:this.state.count
                })
                setTimeout(this.start, 10);
                console.log(this.state.count);
            }
            else{
                this.setState ({
                    co_nhan_biet:true,
                    vitri_y:0,
                    //
                    count:this.state.count + 1
                })
                setTimeout(this.start, 1000)
                console.log(this.state.count);
            }
        }
        else if(this.state.count  < 10){
            if(this.state.vitri_y < 500){
                this.setState ({
                    co_nhan_biet:true,
                    vitri_y:this.state.vitri_y + 1,
                    //
                    count:this.state.count
                })
                setTimeout(this.start, 5);
                console.log(this.state.count);
            }
            else{
                this.setState ({
                    co_nhan_biet:true,
                    vitri_y:0,
                    //
                    count:this.state.count + 1
                })
                setTimeout(this.start, 1000)
                console.log(this.state.count);
            }
        }
        else if(this.state.count  < 15){
            if(this.state.vitri_y < 500){
                this.setState ({
                    co_nhan_biet:true,
                    vitri_y:this.state.vitri_y + 1,
                    count:this.state.count
                })
                setTimeout(this.start, 2);
                console.log(this.state.count);
            }
            else{
                this.setState ({
                    co_nhan_biet:true,
                    vitri_y:0,
                    //
                    count:this.state.count + 1
                })
                setTimeout(this.start, 1000)
                console.log(this.state.count);
            }
        }
        */
        if(this.state.count < 2){
            if(this.state.vitri_y1 < 500){
                this.setState ({
                    co_nhan_biet:true,
                    //vitri_y2:this.state.vitri_y2 + 1,
                    vitri_y1:this.state.vitri_y1 + 1,
                    //
                    count:this.state.count
                })
                setTimeout(this.start, 10);
                console.log(this.state.count);
            }
            else{
                this.setState ({
                    co_nhan_biet:true,
                    //vitri_y2:0,
                    vitri_y1:0,
                    //
                    count:this.state.count + 1
                })
                setTimeout(this.start, 1000)
                console.log(this.state.count);
            }
        }
        
        else if(this.state.count  < 4){
            if(this.state.vitri_y2 < 500||this.state.vitri_y1 < 500){
                this.setState ({
                    co_nhan_biet:true,
                    vitri_y2:this.state.vitri_y2 + 1,
                    vitri_y1:this.state.vitri_y1 + 1,
                    //
                    count:this.state.count
                })
                setTimeout(this.start, 5);
                console.log(this.state.count);
            }
            else{
                this.setState ({
                    co_nhan_biet:true,
                    vitri_y2:0,
                    vitri_y1:0,
                    //
                    count:this.state.count + 1
                })
                setTimeout(this.start, 1000)
                console.log(this.state.count);
            }
        }
        /*
        else if(this.state.count  < 15){
            if(this.state.vitri_y < 500){
                this.setState ({
                    co_nhan_biet:true,
                    vitri_y:this.state.vitri_y + 1,
                    count:this.state.count
                })
                setTimeout(this.start, 2);
                console.log(this.state.count);
            }
            else{
                this.setState ({
                    co_nhan_biet:true,
                    vitri_y:0,
                    //
                    count:this.state.count + 1
                })
                setTimeout(this.start, 1000)
                console.log(this.state.count);
            }
            
        }
        */

       
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
                    <div id='line_1' className='line_1' >
                        <div id='xe_1' className='xe_1 start' 
                            style={{
                            marginTop:(this.state.vitri_y1 )+"px"}} 
                        >

                        </div>
                    </div>
                    <div id='line_2' className='line_2'>
                        <div id='xe_2' className='xe_2 start' 
                            style={{
                            marginTop:(this.state.vitri_y2)+"px"}} 
                        >

                        </div>
                    </div>
                    <div id='line_3' className='line_3'>
                        <div id='xe_3' className='xe_3 start' 
                            style={{
                            marginTop:(this.state.vitri_y3)+"px"}} 
                        >

                        </div>
                    </div>
                    <div id='line_4' className='line_4'>
                        <div id='xe_4' className='xe_4 start' 
                            style={{
                            marginTop:(this.state.vitri_y)+"px"}} 
                        >

                        </div>
                    </div>
                </div>
                <button id='start btn' onClick={this.start}>Start</button>
            </div>
        );
    }
}

export default Game;