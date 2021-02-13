import React, { Component } from 'react';
import { HashRouter, Link, Route, Switch } from 'react-router-dom';
import About from './about';
import Main from './Main';
import Topic from './topic';

class Home extends Component {
    render() { 
        return (
            // 路由根节点 HashRouter 也就是在加载任何页面之前都要先把路由加载出来
           <HashRouter>  
               <div>
                   <ul>
                     <li>
                         <Link to="/">Main</Link>
                     </li>
                     <li>
                         <Link to="/about">About</Link>
                     </li>
                     <li>
                         <Link to="/topic">Topic</Link>
                     </li>
                   </ul> 
                   {/* 下面要加载相对应的路由 */}
                   <hr/>
                   <Switch>
                   <Route exact={true} path="/" component={Main}></Route>
                   <Route  path="/about" component={About}></Route>
                   <Route  path="/topic" component={Topic}></Route>
                   </Switch>
               </div>
           </HashRouter>
        );
    }
}
 
export default Home;