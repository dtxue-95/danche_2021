import React, { Component } from 'react';
import {Row,Col} from 'antd'
import './index.less'
import Util from '../utils/utils'
import axios from '../../axios'
class Header extends Component {
    componentWillMount(){
        this.setState({
            userName:"这是一台机器"
        })
        setInterval(()=>{
            let sysTime = Util.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        },1000)
        this.getWeatherAPIData();
    }
    getWeatherAPIData(){
        // let city = '北京';
        // axios.jsonp({
        //     url:'https://devapi.qweather.com/v7/weather/now?location=101010100&key=528b2fabd6404fcfa376800599fe44b7'
        //       url:'https://devapi.qweather.com/v7/weather/now?location='+city+'&key=528b2fabd6404fcfa376800599fe44b7'
        // })
        // .then((res)=>{
        //     if(res.status == 'success'){
        //         let data = res.results[0].weather_data[0];
        //         this.setState({
        //             dayPictureUrl:data.dayPictureUrl
        //             weather:data.weather
        //         })
        //     }
        // })
       
    }
    render() { 
        return (
            <div className="header">
               <Row className="header-top">
                   <Col span="24">
                        <span>欢迎,{this.state.userName}</span>
                        <a href="#">退出</a>
                   </Col>
               </Row>
               <Row className="breadcrumb">
                   <Col span="4" className="breadcrumb-title">
                        首页
                   </Col>
                   <Col span="20" className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        {/* <span className="weather-img">
                            <img src={this.state.dayPictureUlr} alt=""/> 
                        </span> */}
                        <span className="weather-detail">
                            多云转晴
                            {/* {this.state.weather} */}
                        </span>
                   </Col>
               </Row>
            </div>
        );
    }
}
 
export default Header;