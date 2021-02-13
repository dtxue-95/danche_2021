import React, { Component } from 'react';
import { Button, Card,Icon,Radio} from 'antd'
import './ui.less'
class Buttons extends Component {
    state = {
        loading:true,
        size:'default'
    }

    handleCloseLoading=()=>{
        this.setState({
            loading:false
        });
    }

    handleChange = (e)=>{
        this.setState({
            size:e.target.value
        })
    }

    render() { 
        return (
            <div>
               <Card title="基础按钮" className="card-wrap">
                   <Button type="primary">Imooc</Button>
                   <Button type="primary">Primary</Button>
                   <Button>Default</Button>
                   <Button type="dashed">Dashed</Button>
                   <Button type="danger">Danger</Button>
                   <Button type="link">Link</Button>
               </Card>
               <Card title="图标按钮" className="card-wrap" style={{marginBottom:5}}>
                    <Button type="primary" shape="circle" icon="search" />
                    <Button type="primary" shape="circle">
                    A
                    </Button>
                    <Button type="primary" icon="search">
                    Search
                    </Button>
                    <Button shape="circle" icon="search" />
                    <Button icon="search">Search</Button>
                    <br />
                    <Button shape="circle" icon="search" />
                    <Button icon="search">Search</Button>
                    <Button type="dashed" shape="circle" icon="search" />
                    <Button type="dashed" icon="search">
                    Search
                    </Button>
                    <br/>
                    <Button icon="plus">创建</Button>
                    <Button icon="edit">编辑</Button>
                    <Button icon="delete">删除</Button>
                    <Button shape="circle" icon="search"></Button>
                    <Button type="primary" icon="search">搜索</Button>
                    <Button type="primary" icon="download">下载</Button>
               </Card>
               <Card title="Loading按钮" className="card-wrap">
               <Button type="primary" loading={this.state.loading}>确定</Button>
                    <Button type="primary" shape="circle" loading={this.state.loading}></Button>
                    <Button loading={this.state.loading} >点击加载</Button>
                    <Button shape="circle" loading={this.state.loading}></Button>
                    <Button type="primary" onClick={this.handleCloseLoading}>关闭</Button>
               </Card>
               <Card title="按钮组" style={{marginBottom:10}}>
                   <Button.Group>
                        {/* <Button type="primary" icon="left">返回</Button>
                        <Button type="primary" iocn="right">前进</Button> */}
                        <Button type="primary">
                            <Icon type="left" />
                            Go back
                        </Button>
                        <Button type="primary">
                            Go forward
                            <Icon type="right" />
                        </Button>
                   </Button.Group>
               </Card>
               <Card title="按钮尺寸" className="card-wrap">
                    <Radio.Group value={this.state.size} onChange={this.handleChange}>
                        <Radio value="small">小</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="large">大</Radio>
                    </Radio.Group> 
                    <Button type="primary" size={this.state.size}>Imooc</Button>
                    <Button size={this.state.size}>Imooc</Button>
                    <Button type="dashed" size={this.state.size}>Imooc</Button>
                    <Button type="danger" size={this.state.size}>Imooc</Button>
                </Card>
            </div>
        );
    }
}
 
export default Buttons;