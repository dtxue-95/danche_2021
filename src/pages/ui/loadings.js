import {Alert, Card, Icon, Spin,Switch} from 'antd'
import React, { Component } from 'react';
import './ui.less'
class Loadings extends Component {
    state = { loading: false };

    toggle = value => {
        this.setState({ loading: value });
    };
    render() { 
        const icon = <Icon type="loading" style={{fontSize:24}}/>
        const iconLoading = <Icon type="loading" style={{fontSize:24}}/>
        return (
            <div>
               <Card title="spin用法" className="card-wrap">
                    <Spin size="small"/>
                    <Spin style={{margin:'0 30px'}}/>
                    <Spin size="large"/>
                    {/* //自定义spin */}
                    <Spin indicator={icon} style={{marginLeft:30}}/>
                    <Spin indicator={icon} style={{marginLeft:30}} spinning={false}/>
               </Card>
               <Card title="内容遮罩" className="card-wrap">
                    <Alert
                        message="React1"
                        description="欢迎来到React高级实战课程"
                        type="info"
                        style={{marginBottom:10}}
                    />
                    <Spin>
                        <Alert
                            message="React2"
                            description="欢迎来到React高级实战课程"
                            type="warning"
                            style={{marginBottom: 10 }}
                        />
                    </Spin>
                    <Spin spinning={this.state.loading} delay={3000} tip="加载中...">
                        <Alert
                            message="React3"
                            description="欢迎来到React高级实战课程"
                            type="warning"
                            style={{marginBottom: 10 }}
                        />
                    </Spin>
                    <div style={{ marginTop: 16 }}>
                            Loading state：
                        <Switch checked={this.state.loading} onChange={this.toggle} />
                    </div>
                    <Spin indicator={iconLoading} tip="正在加载...">
                        <Alert
                            message="React4"
                            description="欢迎来到React高级实战课程"
                            type="warning"
                            style={{marginTop: 10 }}
                        />
                    </Spin>
               </Card>
            </div>
        );
    }
}
 
export default Loadings;