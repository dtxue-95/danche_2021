import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
class Main extends Component {
    render() { 
        return (
            <div>
                this is about page of Main;
                <Link to="/main/a">
                    这是一个嵌套路由
                </Link>
                <hr/>
                {this.props.children}
            </div>
        );
    }
}
 
export default Main;