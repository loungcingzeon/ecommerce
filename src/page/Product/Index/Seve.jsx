import React, { Component } from 'react';
import MUtil                from 'util/mm.jsx';
import Product              from 'service/product-service.jsx';
import PageTitle            from 'components/Pagetitle/index.jsx';

const _mm                   = new MUtil();
const _product              = new Product();


/*
http://localhost:8080/manage/product/save.do?
categoryId=1

subImages=test.jpg,11.jpg,2.jpg,3.jpg
detail=detailtext

name=三星洗衣机
subtitle=三星大促销
price=1000
stock=100
status=1
 */

class ProductSeve extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div id="page-wrapper">
                <PageTitle title="商品列表" />
                <div className="form-horizontal">
                    <div className="form-group">
                        <label className="col-md-2 control-label">商品名称</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control"  placeholder="请输入商品名称"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label  className="col-md-2 control-label">商品描述</label>
                        <div className="col-md-5">
                            <input type="text" className="form-control"  placeholder="请输入商品描述"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label  className="col-md-2 control-label">所属分类</label>
                        <div className="col-md-10">
                            <select name="" className="form-control cate-select">
                                <option value="">请选择一级分类</option>
                            </select>
                            <select name="" className="form-control cate-select">
                                <option value="">请选择二级分类</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-2 control-label">商品价格</label>
                        <div className="col-md-3">
                            <div className="input-group">
                                <input type="number" className="form-control"  placeholder="价格"/>
                                <span className="input-group-addon">元</span>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label  className="col-md-2 control-label">商品库存</label>
                        <div className="col-md-3">
                            <div className="input-group">
                                <input type="number" className="form-control"  placeholder="库存"/>
                                <span className="input-group-addon">件</span>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label  className="col-md-2 control-label">商品图片</label>
                        <div className="col-md-10">
                            xxx
                        </div>
                    </div>
                    <div className="form-group">
                        <label  className="col-md-2 control-label">商品详情</label>
                        <div className="col-md-10">
                            xxx
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-default">提交</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ProductSeve;