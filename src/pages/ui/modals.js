import { Button, Card, Modal } from 'antd';
import React, { Component } from 'react';
import './ui.less'
class Modals extends Component {
    state = {
        showModal1:false,
        showModal2:false,
        showModal3:false,
        showModal4:false
    }
    handleOpen = (type) => {
        this.setState({
            // 用[]包起来会当做变量，否则会当做key值
            [type]:true 
        })
    }
    handleConfirm = (type) => {
        // Modal.confirm  <=> Modal['confirm']
        Modal[type]({
            title:"确认?",
            content: '你确定学会了React了吗?',
            onOK(){
                console.log('Ok')
            },
            onCancel(){
                console.log('Cancel')
            }
        })
    }
    render() { 
        return (
            <div>
                <Card title="基础模态框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.handleOpen('showModal1')}>Open</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('showModal2')}>自定义页脚</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('showModal3')}>顶部20px弹框</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('showModal4')}>水平垂直居中弹框</Button>
                </Card>
                <Card title="信息确认框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.handleConfirm('confirm')}>Confirm</Button>
                    <Button type="primary" onClick={()=>this.handleConfirm('info')}>Info</Button>
                    <Button type="primary" onClick={()=>this.handleConfirm('success')}>Success</Button>
                    <Button type="primary" onClick={()=>this.handleConfirm('warning')}>Warning</Button>
                </Card>
                <Modal
                    title="React1"
                    visible={this.state.showModal1}
                    onCancel={()=>{
                        this.setState({
                            showModal1:false
                        })
                    }}
                >
                    <p>欢迎"这是一台机器"学习慕课推出的react高级课程</p>
                </Modal>
                <Modal
                    title="React2"
                    visible={this.state.showModal2}
                    okText="好的"
                    cancelText="算了"
                    onCancel={()=>{
                       this.setState({
                        showModal2:false
                       })
                    }}
                >
                    <p>欢迎"这是一台机器"学习慕课推出的react高级课程</p>
                </Modal>
                <Modal
                    title="React3"
                    style={{top:20}}
                    visible={this.state.showModal3}
                    onCancel={()=>{
                        this.setState({
                            showModal3:false
                        })
                    }}
                >
                    <p>欢迎"这是一台机器"学习慕课推出的react高级课程</p>
                </Modal>
                <Modal
                    title="React4"
                    wrapClassName="vertical-center-modal"
                    visible={this.state.showModal4}
                    onCancel={()=>{
                        this.setState({
                            showModal4:false
                        })
                    }}

                >
                     <p>欢迎"这是一台机器"学习慕课推出的react高级课程</p>
                </Modal>
            </div>
        );
    }
}
 
export default Modals;