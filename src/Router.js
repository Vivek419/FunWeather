import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './component/main'
import Weather from './component/days'

function Routers(props) {
    return (
        <div>
            <Router>
                <div>
            <Route 
            path="/"
            exact
            strict
            component={Main}
            />
             <Route 
             path="/weather"
             exact
             strict
             component={Weather}/>
            
            </div>
            </Router>
            
        </div>
    );
}

export default Routers;