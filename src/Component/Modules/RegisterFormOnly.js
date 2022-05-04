import React, { Component } from 'react';

class RegisterFormOnly extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:"",
            email:"",
            password:"",
            pre_password:"",
            gioi_tinh:"nữ",
            valid_name:'',
            valid_email:'',
            valid_password:'',
            valid_pre_password:''
        }
    }

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
        else{
            if(e.target.value){
                this.setState(prevState=>{
                    prevState['valid_' + e.target.name]=true;
                    return prevState
                })
            }
            else{
                this.setState(prevState=>{
                    prevState['valid_' + e.target.name]=false;
                    return prevState
                })
            }
        }
    }
    

    HandleSubmit = (e) =>{
        if(this.state.valid_email&&this.state.valid_password&&this.state.valid_pre_password)
        {
            
            console.log('form đã được gửi');
            this.props.handleFunction();
        }
        else{
            console.log('form chưa được gủi')
        }
        e.preventDefault();
    }
    render() {
        return (
            <form action="" className="form-horizontal" role="form" onSubmit={this.HandleSubmit}>
                        <div className="form-group">
                            <legend>Đăng kí</legend>
                        </div>
                
                        
                
                        <div className="form-group">
                            <div className="col-sm-2" >
                                Họ Tên
                            </div>
                            <div className={"col-sm-10 " + this.state.valid_name} value={this.state.valid_name}>
                                <input type="text" name='name' onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-2" >
                                Email
                            </div>
                            <div className={"col-sm-10 " + this.state.valid_email} value={this.state.valid_email}>
                                <input type="email" name='email' onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-2" >
                                Password
                            </div>
                            <div className={"col-sm-10 " + this.state.valid_password} value={this.state.valid_password}>
                                <input type="password"name='password' onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-2" >
                                Pre-Password
                            </div>
                            <div className={"col-sm-10 " + this.state.valid_pre_password} value={ this.state.valid_pre_password}>
                                <input type="password" name='pre_password' onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-2" >
                                    Giới Tính
                                </div>
                            <select name='gioi_tinh' onChange={this.handleChange}>
                                <option value="nam">nam</option>
                                <option value="nữ">nữ</option>
                                <option value="khác">khác</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-10">
                                <button type="submit" className="btn btn-primary" >Gửi</button>
                            </div>
                        </div>
                </form>
        );
    }
}

export default RegisterFormOnly;