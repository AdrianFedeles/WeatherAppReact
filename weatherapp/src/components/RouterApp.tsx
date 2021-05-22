import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import GeneralTemperature from "./GeneralTemperature";
import WeatherApp from "./WeatherApp";
const RouterApp = () => {
    return(
    <Router>
        <Switch>
          <Route path="/general" component={GeneralTemperature}/>
          <Route path="/" component={WeatherApp}/>
        </Switch>
    </Router>
    )

}

export default RouterApp;