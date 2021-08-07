import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import GeneralTemperature from "./GeneralTemperature";
import LoginComponent from './LoginComponent';
import PrivateRoute from './PrivateRoute';
import RegisterComponent from './RegisterComponent';
import WeatherApp from "./WeatherApp";

const RouterApp = () => {

    return(
        <Router>
          <Switch>
            <Route exact path="/login" component={LoginComponent}/>
            <Route exact path="/register" component={RegisterComponent}/>
            <PrivateRoute path="/" component={WeatherApp} />
          </Switch>
        </Router>
    )

}



export default RouterApp;