import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IState } from '../../store/index';
import { getRoleAuth } from '../../store/actions/auth';
import { Dispatch } from 'redux';
import { Table } from 'antd';
export interface IProps {
  dispatch: Dispatch;
  authList: [];
}
class Auth extends Component<IProps> {
  componentDidMount(){
    this.props.dispatch(getRoleAuth({roleId: 1}));
  }
  render(){
    const columns = [
      {
        title: '权限名称',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '权限ID',
        dataIndex: 'id',
        key: 'id'
      }
    ];
    
    const rowSelection = {
      onChange: (selectedRowKeys:any, selectedRows:any) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      onSelect: (record:any, selected:any, selectedRows:any) => {
        console.log(record, selected, selectedRows);
      },
      onSelectAll: (selected:any, selectedRows:any, changeRows:any) => {
        console.log(selected, selectedRows, changeRows);
      },
    };
    return <>
      <Table
        rowKey="id"
        columns={columns}
        rowSelection={{ ...rowSelection, checkStrictly: false }}
        dataSource={this.props.authList}
      />
    </>
  }
}

export default connect((state:IState)=>{
  return {
    authList: state.auth.authList
  }
}, (dispatch:Dispatch)=>({dispatch}))(Auth);