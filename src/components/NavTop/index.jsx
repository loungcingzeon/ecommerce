import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NavTop extends Component{
    constructor(props){
        super(props);
    }
    // 退出登录
    onLogout(){
        console.log(123);


    }
    render() {
       return (
           <nav className="navbar navbar-default top-navbar" role="navigation">
               <div className="navbar-header">
                   <Link className="navbar-brand" to="/"><b>HAPPY</b>MMALL</Link>
               </div>

               <ul className="nav navbar-top-links navbar-right">
                   <li className="dropdown">
                       <a className="dropdown-toggle" href="javascript:vid(0);">
                           <i className="fa fa-user fa-fw"></i>
                           <span>欢迎, Admin....</span>
                           <i className="fa fa-caret-down"></i>
                       </a>
                       <ul className="dropdown-menu dropdown-user">
                           <li>
                               <a onClick={() => {this.onLogout()}}>
                                    <i className="fa fa-sign-out fa-fw"></i>
                                    <span>退出登录</span>
                               </a>

                           </li>
                       </ul>
                   </li>
               </ul>
           </nav>
       );

   }
}

export default NavTop;