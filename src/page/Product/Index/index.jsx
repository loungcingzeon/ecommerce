import React, { Component } from 'react';
import { Link }     from 'react-router-dom';
import MUtil                from 'util/mm.jsx';
import Product              from 'service/product-service.jsx';

import PageTitle            from 'components/Pagetitle/index.jsx';
import TableList            from 'util/Tablelist/index.jsx';
import Pagination           from 'util/Pagination/index.jsx';

const _mm                   = new MUtil();
const _product              = new Product();

import './index.scss';


class ProductList extends Component{
    constructor(props){
        super(props);
        this.state = {
            list        : [],
            pageNum     : 1
        }
    }
    // 请求接口
    componentDidMount(){
        this.loadProductList();

    }
    loadProductList(){
        _product.getProductList(this.state.pageNum).then(res => {
            // 成功
            this.setState(res);
        }, errMsg => {
            // 如果输入错了，就应该把list数据干掉 错误
            this.setState({
                list: []
            });
            _mm.errorTips(errMsg);
        });
    }
    // 当页娄发生变化的时候
    onPageNumChange(pageNum){
        this.setState({
            pageNum: pageNum
        }, () => {
            this.loadProductList();
        });
    }
    // 改变商品状态 上架 / 下架
    onSetProductStatus(e, productId, currentStatus){
        let newStatus = currentStatus == 1 ? 2 : 1;
        let confrimTips = currentStatus == 1 ? '确定要下架该商品?' : "确定要上架该上商品?";
        // 防止错误操作提示
        if(window.confirm(confrimTips)){
            _product.onSetProductStatus({
                productId: productId,
                status: newStatus
            }).then(res => {
                _mm.successTips(res);
                this.loadProductList();
            }, errMsg => {
                _mm.errorTips(errMsg);
            })
        }
    }

    render(){
        let tableHeads = [
            {name: '商品ID', width: '10%'},
            {name: '商品信息', width: '50%'},
            {name: '价格', width: '10%'},
            {name: '状态', width: '15%'},
            {name: '操作', width: '15%'}
        ];
        return (
            <div id="page-wrapper">
                <PageTitle title="商品列表"/>
                <TableList tableHeads = {tableHeads}>
                    {
                        this.state.list.map((product, index) => {
                            return (
                                <tr key={index}>
                                    <td>{product.id}</td>
                                    <td>
                                        <p>{product.name}</p>
                                        <p>{product.subtitle}</p>
                                    </td>
                                    <td>￥：{product.price}</td>
                                    <td>
                                        <p>{product.status == 1 ? '在售' : '已下架'}</p>
                                        <button className={`btn btn-xs btn-warning`} onClick={(e) => {this.onSetProductStatus(e, product.id, product.status)}}>{product.status == 1 ? '下架' : '上架'}</button>
                                    </td>
                                    <td>
                                        <Link className="opear" to={`/product/detail/${product.id}`}>详情</Link>
                                        <Link className="opear" to={`/product/save/${product.id}`}>编辑</Link>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </TableList>
                <Pagination
                    current={this.state.pageNum}
                    total={this.state.total}
                    onChange={(pageNum) => this.onPageNumChange(pageNum)}/>
            </div>
        );
    }
}

export default ProductList;