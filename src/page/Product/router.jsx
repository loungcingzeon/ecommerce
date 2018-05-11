import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect, Link, Switch} from 'react-router-dom';


// 页面
import ProductList         from 'page/Product/Index/index.jsx';
import ProductSave         from 'page/Product/Index/Seve.jsx';

class ProductRouter extends Component{
    render() {
        return (
            <Switch>
                <Route path="/product/index" component={ProductList}/>
                <Route path="/product/save" component={ProductSave}/>
                <Redirect exact from="/product" to="/product/index"/>
            </Switch>
        )
    }
}

export default ProductRouter;