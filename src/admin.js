import { Col, Row } from 'antd';
import Header from './components/Header/index'
import Footer from './components/Footer/index'
import React, { Component } from 'react';
import NavLeft from './components/NavLeft';
import './components/style/common.less'
import Home from './pages/home';
 
class Admin extends Component {
    render() { 
        return (
            <Row className="container">
                    <Col span="3" className="nav-left">
                        <NavLeft/>
                    </Col>
                    <Col span="21" className="main">
                        <Header/>
                        <Row className="content">
                            {/* <Home/>   */}
                            {this.props.children}
                        </Row>
                        <Footer/>
                    </Col>
            </Row>
        );
    }
}
 
export default Admin;