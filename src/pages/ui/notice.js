import { Button, Card,notification } from 'antd';
import React, { Component } from 'react';
import './ui.less'
class Notice extends Component {
    openNotification = (type,direction) => {
        if (direction){
            notification.config({
                placement: direction
            })
        }

        // notification.success({
        //     message:'发工资了',
        //     description:'这是一台机器，你本月的工资为20w,请笑纳'
        // })
        notification[type]({
            message:'发工资了',
            description:'这是一台机器，你本月的工资为20w,请笑纳'
        })
    }
    render() { 
        return (
            <div>
                <Card title="通知提醒" className="card-wrap">
                    <Button type="primary" onClick={()=>this.openNotification('success')}>Success</Button>
                    <Button type="primary" onClick={()=>this.openNotification('info')}>Info</Button>
                    <Button type="primary" onClick={()=>this.openNotification('warning')}>Warning</Button>
                    <Button type="primary" onClick={()=>this.openNotification('error')}>Error</Button>
                </Card>
                <Card title="通知提醒" className="card-wrap">
                    {/* //控制方向 */}
                    <Button type="primary" onClick={() => this.openNotification('success','topLeft')}>Success</Button>
                    <Button type="primary" onClick={() => this.openNotification('info','topRight')}>Info</Button>
                    <Button type="primary" onClick={() => this.openNotification('warning','bottomLeft')}>Warning</Button>
                    <Button type="primary" onClick={() => this.openNotification('error','bottomRight')}>Error</Button>
                </Card>
            </div>
        );
    }
}
 
export default Notice;