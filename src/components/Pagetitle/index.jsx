import React, { Component } from 'react';

class PageTitle extends Component{
    constructor(props){
        super(props);
    }
    // 使用一个生命周期
    componentWillMount(){
        document.title = `${this.props.title} - HAPPMMALL`;
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <h1 className="page-header">{this.props.title}</h1>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
export default PageTitle;