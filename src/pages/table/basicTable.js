import { Card, Table } from 'antd';
import React, { Component } from 'react';
import axios from './../../axios/index'
// import axios from 'axios'
class BasicTable extends Component {
    state={
        dataSource2:[]
    }

    params = {
        page:1
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
        data.map((item,index)=>{
            item.key = index;
        })
        this.setState({
            dataSource:data
        })
        this.request(); //获取动态数据需要在初始化的时候调用一下
    }

//动态获取mock数据
request = () => {
    // 封装好后不再使用原生模式获取数据
    // let baseUrl = 'https://www.fastmock.site/mock/a7ca75d7ecc413eb4a0f2ed600ffc80b/mockapi'; 
    // axios.get(baseUrl+'/table/list2')
    // .then((res)=>{
    //     // console.log(JSON.stringify(res));
    //     if(res.status === 200 && res.data.code === 0){
    //         // alert("000");
    //         // console.log(res.data.result);
    //         // alert("111");
    //         this.setState({
    //             dataSource2:res.data.result
    //         })
    //     }
    // })

    //调用封装的axios
    axios.ajax({
        url:'/table/list',
        data:{
            params:{
                page:this.params.page
            }
        }
    }).then((res)=>{
        // alert("000");
        if(res.code === 0){
            res.result.list.map((item,index)=>{
                item.key = index;
            })
            this.setState({
                dataSource2:res.result.list
            })
        }
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
            </div>
        );
    }
}
 
export default BasicTable;