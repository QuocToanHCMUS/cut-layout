import React, { Component } from 'react';
import ModelNotice from '../Modules/ModelNotice';
import RegisterFormOnly from '../Modules/RegisterFormOnly';

class RegisterForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            isSubmit:0,
            title_modal:"bạn đã đăng kí thành công",
            body_modal:"tạo tài khoản thành công"
        }
        this.changeStatusSubmit = this.changeStatusSubmit.bind(this)
    }

    /* chuyển qua register form
    handleChange = (e) =>{
        // this.setState(prevState =>{
        //     prevState[e.target.name]=e.target.value;
        //     console.log(prevState)
        //     return prevState
        // })
        if(e.target.name == 'email')
        {
            let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            if(re.test(e.target.value)){
                this.setState(prevState =>{
                        prevState['valid_'+ e.target.name]=true;
                        return prevState
                })
            }
            else{
                this.setState(prevState =>{
                    prevState['valid_'+ e.target.name]=false;
                    return prevState
            })
        }
        }
    }
    

    HandleSubmit = (e) =>{
        alert("đã gửi")
        e.preventDefault();
    }
    */

    changeStatusSubmit = () =>{
        this.setState(prevState =>{
            prevState.isSubmit = 1;
            return prevState;
        })
    }

    render() {
        return (
            <div className='container'>
                {(this.state.isSubmit)?<ModelNotice title_modal={this.state.title_modal} body_modal={this.state.body_modal}/>:<RegisterFormOnly handleFunction={this.changeStatusSubmit}/>}
            </div>
        );
    }
}

export default RegisterForm;