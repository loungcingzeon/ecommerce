import React, { Component } from 'react';
import RcPagination   from 'rc-pagination';
import 'rc-pagination/dist/rc-pagination.css';

// 通用分页组件
/**
 * hideOnSinglePage 也就是说这个组件只有一页的时候，这个组件就不显示了
 * showQuickJumper  这是快速跳转多少页
 *
 */
class Pagination extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="row">
                <div className="col-md-12">
                    <RcPagination
                        {...this.props}
                        hideOnSinglePage
                        showQuickJumper
                    />
                </div>
            </div>
        );
    }
}

export default Pagination;