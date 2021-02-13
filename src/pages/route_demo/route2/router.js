import React, { Component } from 'react';
import { HashRouter as Router,Route} from 'react-router-dom'
import About from '../route1/about';
import Main from './Main';
import Topic from '../route1/topic';
import Home from './Home';
class Iroute extends Component {
    render() { 
        return (
            <Router>
                <Home>
                   {/* <Route exact={true} path="/" component={Main}></Route> */}
                   <Route  path="/main" render={()=>
                       <Main>
                           <Route  path="/main/a" component={About}></Route>
                            {/* <div>
                                this is a sub child element
                            </div> */}
                       </Main>
                   }></Route>
                   <Route   path="/about" component={About}></Route>
                   <Route  path="/topic" component={Topic}></Route>
                </Home>
            </Router>
        );
    }
}
 
export default Iroute;