import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import App from './App';


// import reportWebVitals from './reportWebVitals';
const routing = (
    <Router>
 
        <Switch>
            <Route exact path="/" component ={App}/>
            <Route path="/1" component ={App}/>
            <Route path="/2" component ={App}/>
        </Switch>

    </Router>
)


ReactDOM.render(
    // <React.StrictMode>
    // <NavBar />
    // </React.StrictMode>,
    routing,
    document.getElementById('root')
);


// ReactDOM.render (<App/>, document.getElementById('root'));
