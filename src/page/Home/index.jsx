import React, { Component } from 'react';

import PageTitle from 'components/Pagetitle/index.jsx';

import "./index.css";

class Home extends Component{
    render(){
        return (
            <div id="page-wrapper">
                <PageTitle title="首页" />
                <div className="row">
                    <div className="col-md-12">
                        body
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
