import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import {BrowserRouter as Router, Route, Redirect, Link, Switch} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';


// 页面
import Home from 'page/Home/index.jsx';
import Layout from 'components/Layout/index.jsx';



class App extends Component{
    render() {
        return (
            <Router>
                <Layout>
                    <Switch>
                        <Route path="/" component={Home}/>
                        <Route path="/product" component={Home}/>
                        <Route path="/product-category" component={Home}></Route>
                    </Switch>
                </Layout>
            </Router>
        )
    }
}



ReactDOM.render(
    <App />,
    document.getElementById('app')
);