import React, { Component } from 'react';
import { Menu, Icon } from 'antd'; 
import MenuConfig from './../../config/menuConfig'
import './index.less'
const  SubMenu  = Menu.SubMenu;
class NavLeft extends Component {
    // render() { 
    //     var style = {
    //         backgroundColor: 'red'
    //     }
    //     return (
    //         <div style={style}>
    //             NavLeft
    //         </div>
    //     );
    // }
    componentWillMount(){
       const menuTreeNode =  this.renderMenu(MenuConfig)

       this.setState({
           menuTreeNode
       })
    }
    //菜单渲染
    renderMenu = (data) =>{
        return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
        })
    }
    render(){
        return (
            <div style={{backgroundColor:'#ffffff'}}>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt=""/>
                    <h1>Imooc MS</h1>
                </div>
                <Menu
                    theme="dark"
                >
                  {this.state.menuTreeNode} 
                </Menu>
            </div>
        )
    }
}
 
export default NavLeft;