import React, { Component } from 'react';
import MUtil                from 'util/mm.jsx';
import User                 from 'service/user-service.jsx';

const _mm = new MUtil;
const _user = new User;

import './index.scss';
class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            redirect: _mm.getUrlParam('redirect') || ''
        }
    }
    // 使用一个生命周期
    componentWillMount(){
        document.title = '登陆 - MMALL'
    }


    // 当用户名发生改变
    onInputChange(e){
        let inputValue = e.target.value;    // 通过定义输入表单的value名获取当前表单的值
        let inputName = e.target.name;      // 通过定义输入表单的name名获取当前表单的名字
        this.setState({
            [inputName]: inputValue
        });
    }
    // 当用户提交表单
    onSubmit(){
         let loginInfo = {
             username: this.state.username,
             password: this.state.password
         };
         let checkResult = _user.checkLoginInfo(loginInfo);

         // 验证通过
         if(checkResult.status){
             _user.login(loginInfo).then((res) => {
                 // 成功处理
                 _mm.setStorage('userInfo', JSON.stringify(res));
                 this.props.history.push(this.state.redirect)
             }, (errMsg) => {
                 // 错误处理
                 _mm.errorTips(errMsg);
             });
         }
    }
    //
    onInputKeyUp(e){
        if(e.keyCode === 13){
            this.onSubmit();
        }
    }
    render(){
        return (
            <div className="col-md-4 col-md-offset-4">
                <div className="panel panel-default loding-panel">
                    <div className="panel-heading">欢迎登陆 - MMALL管理系统</div>
                    <div className="panel-body">
                        <div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">用户名</label>
                                <input type="text"
                                       name="username"
                                       className="form-control"
                                       id="exampleInputEmail1"
                                       placeholder="请输入用户名"
                                       onKeyUp={e => this.onInputKeyUp(e)}
                                       onChange={(e) => this.onInputChange(e)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">密码</label>
                                <input type="password"
                                       name="password"
                                       className="form-control"
                                       id="exampleInputPassword1"
                                       placeholder="请输入密码"
                                       onKeyUp={e => this.onInputKeyUp(e)}
                                       onChange={(e) => this.onInputChange(e)}
                                />
                            </div>
                            <button type="button"
                                    className="btn btn-primary btn-sm btn-block "
                                    onClick={e => {this.onSubmit(e)}}
                            >登   陆</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
