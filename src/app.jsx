import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import {BrowserRouter as Router, Route, Redirect, Link, Switch} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Layout       from 'components/Layout/index.jsx';
// 页面
import Home             from 'page/Home/index.jsx';
import ProductRouter    from 'page/Product/router.jsx';
import Login            from 'page/Login/index.jsx';
import UserList         from 'page/User/index.jsx';
import ErrorPage        from 'page/Error/index.jsx';




class App extends Component{
    render() {
        let LayoutRouter = (
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/product" component={ProductRouter}/>
                    <Route path="/product-category" component={Home}></Route>
                    <Route path="/user/index" component={UserList}></Route>
                    <redirect exact from="/user" to="/user/index" />
                    <Route component={ErrorPage}/>
                </Switch>
            </Layout>
        );
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/" render={ props => LayoutRouter }/>
                </Switch>
            </Router>
        )
    }
}



ReactDOM.render(
    <App />,
    document.getElementById('app')
);