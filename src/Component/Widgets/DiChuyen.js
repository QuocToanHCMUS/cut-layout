import React, { Component } from 'react';


class DiChuyen extends Component {
    constructor(props){
        super(props);
        this.state = {
            co_nhan_biet:false,
            vitri_x:0,
            vitri_y:0
        }
        this.hold=this.hold.bind(this)
        this.move=this.move.bind(this)
        this.tha=this.tha.bind(this)
    }
    hold(){
        console.log('hold');
        this.setState ({
            co_nhan_biet:true,
            vitri_x:this.state.vitri_x,
            vitri_y:this.state.vitri_y
        })
    }
    move(e){
        console.log('move');
        if(this.state.co_nhan_biet){
            this.setState({
                co_nhan_biet:this.state.co_nhan_biet,
                vitri_x:e.clientX,
                vitri_y:e.clientY
                }
            )
        }
    }
    tha(){
        console.log('tha');
        this.setState({
            co_nhan_biet:false,
            vitri_x:this.state.vitri_x,
            vitri_y:this.state.vitri_y
        })
    }

    render() {
        return (
            <div id='bao_quanh' className='bao_quanh' onMouseMove={this.move}>
                <div style={{marginLeft:(this.state.vitri_x -10 )+ "px",marginTop:(this.state.vitri_y -10)+"px"}} id='chay' className='chay' onMouseUp={this.tha} onMouseDown={this.hold}></div>
            </div>
        );
    }
}

export default DiChuyen;