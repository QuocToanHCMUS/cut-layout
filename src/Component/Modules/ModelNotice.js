import React, { Component } from 'react';
import './ModelNotice.css'

class ModelNotice extends Component {
    constructor(props){
        super(props);
        this.state = {
            ShowOrHide:1
        }
    }
    handleHideMode = () =>{
        this.setState({
            ShowOrHide:0
        })
        console.log('123')
    }

    render() {
        return (
            <>
                <div className={'model_hide_show ' + ((this.state.ShowOrHide)?'active':'inactive')}>
                    <div className='header_modal'>
                        {this.props.title_modal}
                        <div className='btn_close_model' 
                            onClick={this.handleHideMode}>
                                x
                        </div>
                    </div>
                    <div className='body_modal'>
                        {this.props.body_modal}
                    </div>
                </div>

             
            </>
        );
    }
}

export default ModelNotice;