import React, { Component } from 'react';
import NavTop from 'components/NavTop/index.jsx';
import NavSiden from 'components/Navsiden/index.jsx';
import './theme.css';

class Layout extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div id="wrapper">
                <NavTop />
                <NavSiden />
                {this.props.children}
            </div>
        );
    }
}
export default Layout;
