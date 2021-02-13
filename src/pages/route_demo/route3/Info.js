import React, { Component } from 'react';
 
class Info extends Component {
    render() { 
        return (
            <div>
                这里是动态路由
                <br/>
                获取动态路由的值是：{this.props.match.params.value}
            </div>
        );
    }
}
 
export default Info;