import React, { Component } from 'react';
import { HashRouter as Router,Route,Switch} from 'react-router-dom'
import About from '../route1/about';
import Main from './Main';
import Topic from '../route1/topic';
import Home from './Home';
import Info from './Info';
import NoMatch from './NoMatch';
class Iroute extends Component {
    render() { 
        return (
            <Router>
                <Home>
                   <Switch>
                         {/* <Route exact={true} path="/" component={Main}></Route> */}
                        <Route  path="/main" render={()=>
                            <Main>
                                <Route  path="/main/:value" component={Info}></Route>
                                
                            </Main>
                        }></Route>
                        <Route   path="/about" component={About}></Route>
                        <Route  path="/topic" component={Topic}></Route>
                        <Route component={NoMatch}></Route>
                   </Switch>
                </Home>
            </Router>
        );
    }
}
 
export default Iroute;