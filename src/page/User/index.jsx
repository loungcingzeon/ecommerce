import React, { Component } from 'react';
import { Link }     from 'react-router-dom';
import MUtil                from 'util/mm.jsx';
import User                 from 'service/user-service.jsx';

import PageTitle            from 'components/Pagetitle/index.jsx';
import TableList            from 'util/Tablelist/index.jsx';
import Pagination           from 'util/Pagination/index.jsx';

const _mm = new MUtil();
const _user = new User();


class UserList extends Component{
    constructor(props){
        super(props);
        this.state = {
            list        : [],
            pageNum     : 1
        }
    }
    // 请求接口
    componentDidMount(){
        this.loadUserList();

    }
    loadUserList(){
        _user.getUserList(this.state.pageNum).then(res => {
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
            this.loadUserList();
        });
    }

    render(){
        let tableHeads = [
            {name: 'ID', width: '20%'},
            {name: '用户名', width: '20%'},
            {name: '邮箱', width: '20%'},
            {name: '电话', width: '20%'},
            {name: '注册时间', width: '20%'}
        ];

        let listBody = this.state.list.map((user, index) => {
            return (
                <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{new Date(user.createTime).toLocaleString()}</td>
                </tr>
            );
        });

        return (
            <div id="page-wrapper">
                <PageTitle title="用户列表"/>
                <TableList  tableHeads = {tableHeads}>
                    {listBody}
                </TableList>
                <Pagination
                    current={this.state.pageNum}
                    total={this.state.total}
                    onChange={(pageNum) => this.onPageNumChange(pageNum)}/>
            </div>
        );
    }
}
export default UserList;