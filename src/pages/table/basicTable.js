import { Card, Table } from 'antd';
import React, { Component } from 'react';
 
class BasicTable extends Component {
    state={
        dataSource2:[]
    }
    componentDidMount(){
        const data = [
            {
                id:'0',
                userName:'Jack',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2021-01-01',
                address:'山西省大同市云冈区',
                time:'09:00'
            },
            {
                id: '1',
                userName: 'Tom',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '北京市海淀区奥林匹克公园',
                time: '09:00'
            },
            {
                id: '2',
                userName: 'Lily',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '北京市海淀区奥林匹克公园',
                time: '09:00'
            },
        ]
        this.setState({
            dataSource:data
        })
    }
    render() { 
        const columns = [
            {
                title:'id',
                key:'id',
                dataIndex:'id'
            },
            {
                title:'用户名',
                key:'userName',
                dataIndex:'userName'
            },
            {
                title:'性别',
                key:'sex',
                dataIndex:'sex'
            },
            {
                title:'状态',
                key: 'state',
                dataIndex:"state"
            },
            {
                title:'爱好',
                key:'interest',
                dataIndex:'interest'
            },
            {
                title:'生日',
                key:'birthday',
                dataIndex:'birthday'
            },
            {
                title:'地址',
                key: 'address',
                dataIndex: 'address'
            },
            {
                title:'早起时间',
                key:'time',
                dataIndex:'time'
            }
        ]
        return (
            <div>
                <Card title="基础表格">
                    <Table
                        bordered
                        columns = {columns}
                        dataSource = {this.state.dataSource}
                        pagination = {false}
                    />
                </Card>
                <Card title="动态数据渲染表格-Mock" style={{margin:'10px 0'}}>
                    <Table
                        bordered
                        columns = {columns}
                        dataSource = {this.state.dataSource2}
                        pagination={false}
                    />
                </Card>
                <Card title="高级表格">
                    <Table
                        bordered
                        columns = {columns}
                        dataSource = {this.state.dataSource}
                        pagination = {false}
                    />
                </Card>
            </div>
        );
    }
}
 
export default BasicTable;