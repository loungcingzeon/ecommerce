import React, { Component } from 'react';

class CategorySelector extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="categoryselector">
                <div className="col-md-10">
                    <select name="" className="form-control cate-select">
                        <option value="">请选择一级分类</option>
                    </select>
                    <select name="" className="form-control cate-select">
                        <option value="">请选择二级分类</option>
                    </select>
                </div>
            </div>
        );
    }
}
export default CategorySelector;