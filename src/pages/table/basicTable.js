import { Button, Card, message, Modal, Table } from 'antd';
import React, { Component } from 'react';
import Utils from '../../utils/utils';
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
        //消除警告
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
    let _this = this;
    axios.ajax({
        url:'/table/list',
        data:{
            params:{
                page:this.params.page
            },
            // isShowLoading:false  //默认就是true
        }
    }).then((res)=>{
        // alert("000");
        if(res.code === 0){
            res.result.list.map((item,index)=>{
                item.key = index;
            })
            this.setState({
                dataSource2:res.result.list,
                selectedRowKeys:[],
                selectedRows:null,
                pagination:Utils.pagination(res,(current)=>{
                    _this.params.page = current;
                    this.request();
                })
            })
        }
    })
    }
    onRowClick = (record,index) => {
        let selectKey = [index]; //定义索引
        Modal.info({
            title:'信息',
            content: `用户名:${record.userName},性别:${record.sex}`
        })
        this.setState({
            selectedRowKeys:selectKey, //选中的哪个索引
            selectdeItem:record //选中的哪一项
        })
    }
    // add = ()=> {
    //     let item = this.state.selectdeItem;
    //     if(item.id){
    //         //做一些事情处理新增、删除item等
    //     }
    // }
    //多选执行删除动作
    handleDelete = (()=>{
        let rows = this.state.selectedRows;
        let ids = [];
        rows.map((item)=>{
            ids.push(item.id)
        })
        Modal.confirm({
            title:'删除提示',
            content:`您确定要删除这些数据吗:${ids.join(',')}`,
            onOk:()=>{
                message.success('删除成功');
                this.request();
            }
        })
    })
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
                dataIndex:'sex',
                //render 处理当前字段 进行格式化
                render(sex){
                    return sex === 1?'男':'女'
                }
            },
            {
                title:'状态',
                key: 'state',
                dataIndex:"state",
                render(state){
                    let config = {
                        '1':'咸鱼一条',
                        '2':'风华浪子',
                        '3':'北大才子',
                        '4':'百度FE',
                        '5':'创业者'
                    }
                    return config[state];
                }
            },
            {
                title:'爱好',
                key:'interest',
                dataIndex:'interest',
                render(abc){
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '踢足球',
                        '4': '跑步',
                        '5': '爬山',
                        '6': '骑行',
                        '7': '桌球',
                        '8': '麦霸'
                    }
                    return config[abc];
                }
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
                title:'工作时间',
                key:'time',
                dataIndex:'time'
            }
        ]
        // const {selectedRowKeys} =this.state; //使用解构
        const selectedRowKeys = this.state.selectedRowKeys; //不使用解构
        const rowSelection = {
            type:'radio',
            selectedRowKeys
        }
        const rowCheckSelection = {
            type: 'checkbox',
            selectedRowKeys,
            onChange:(selectedRowKeys,selectedRows)=>{
                // let ids = [];
                // selectedRows.map((item)=>{
                //     ids.push(item.id)
                // })
                this.setState({
                    selectedRowKeys,
                    selectedRows
                    // seletctedIds: ids //可以做添加、删除等操作
                })
            }
        }
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
                <Card title="Mock-单选" style={{margin:'10px 0'}}>
                    <Table
                        bordered
                        rowSelection = {rowSelection}
                        onRow={(record,index) => {
                            return {
                              onClick: () => {
                                  this.onRowClick(record,index)
                              }, // 点击行
                            //   onDoubleClick: event => {},
                            //   onContextMenu: event => {},
                            //   onMouseEnter: event => {}, // 鼠标移入行
                            //   onMouseLeave: event => {},
                            };
                          }}
                        columns = {columns}
                        dataSource = {this.state.dataSource2}
                        pagination={false}
                    />
                </Card>
                <Card title="Mock-多选" style={{margin:'10px 0'}}>
                    <div style={{marginBottom:10}}>
                          <Button onClick={this.handleDelete}>删除</Button>
                    </div>
                    <Table
                        bordered
                        rowSelection = {rowCheckSelection}
                        columns = {columns}
                        dataSource = {this.state.dataSource2}
                        pagination={false}
                    />
                </Card>
                <Card title="Mock-表格分页" style={{ margin: '10px 0' }}>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={this.state.pagination}
                    />
                </Card>
            </div>
        );
    }
}
 
export default BasicTable;