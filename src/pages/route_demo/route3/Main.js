import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
class Main extends Component {
    render() { 
        return (
            <div>
                this is about page of Main;
                <br/>
                <Link to="/main/test-id">
                    这是一个嵌套路由 动态路由1
                </Link>
                <br/>
                <Link to="/main/456">
                    这是一个嵌套路由 动态路由2
                </Link>
                <hr/>
                {this.props.children}
            </div>
        );
    }
}
 
export default Main;