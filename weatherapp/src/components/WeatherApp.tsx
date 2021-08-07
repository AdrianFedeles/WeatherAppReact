import { Component } from "react";
import Forecast from "./Forecast";
import GeneralTemperature from "./GeneralTemperature";
import {generateForecastUrl} from "../utils/Constants";
import {GeneralInfo} from '../models/GeneralInfoModel';
import DayModel from "../models/DayModel";
import HourlyComponent from "./HourlyComponent";
import { loadWeatherData } from '../redux-saga/actions';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
class WeatherApp extends Component<any, any>{
    constructor(props: any){
      super(props)
      this.state = {
        city: "Iasi",
        day: 0 
      }
      this.onBlur = this.onBlur.bind(this);
    }

    onBlur(e: any){
      this.setState({city: e.target.value})
    }

    changeDay = (d: any) => {
      console.log("change day to " + d)
      this.setState({day: d})
    }

    extractDayInfo = (index: any) => {
      return this.props.json?.forecast.forecastday[index].hour.map((item: any) => 
        ({
          time: item.time,
          temp: item.temp_c,
          icon: item.condition.icon,
          status: item.condition.text,
          humidity: item.humidity,
          wind: item.wind_kph
        })
      );
    }
    
    render(){
      console.log(2)
      if(this.props.forecastInfo && this.props.generalInfo){
        
        return (
            <div className= "Container">
              <div className="Section_Input_City">
                <input type="text" onBlur={this.onBlur}/>
              </div>
              <div className= 'Section_General_Temperature'>
                <GeneralTemperature/>
              </div>
              <div className="Section_Forecast_Daily">
                <Forecast changeDay={this.changeDay} info={this.props.forecastInfo}/>
              </div>
              <div className = "Section_Chart_Hourly">
                <HourlyComponent dayInfo={this.extractDayInfo(this.state.day)}/>
              </div>
            </div>
        )
  }
    else{
      return(
      <div>
        <input type="text" onBlur={this.onBlur}/>
      </div>)
      ;
    }
}
  componentDidUpdate(prevProps:any, prevState:any){
    console.log(prevState)
    console.log(this.state)
    if(prevState.city !== this.state.city){
      this.props.loadWeatherData(this.state.city === "" ? "Iasi" : this.state.city);
    }
  }
}

function mapStateToProps(state: any){
  return {
    json: state.weather_data,
    generalInfo: state.general_info,
    forecastInfo: state.forecast_info,
  }
}

function mapDispatchToProps(dispatch: any){
  return bindActionCreators({ loadWeatherData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherApp);