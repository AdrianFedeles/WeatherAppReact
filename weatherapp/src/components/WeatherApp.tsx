import { Component } from "react";
import Forecast from "./Forecast";
import GeneralTemperature from "./GeneralTemperature";
import {generateForecastUrl} from "../utils/Constants";
import {GeneralInfo} from '../models/GeneralInfoModel';
import DayModel from "../models/DayModel";
import HourlyComponent from "./HourlyComponent";

class WeatherApp extends Component<any, any>{
    constructor(props: any){
      super(props)
      this.state = {
        forecastInfo: undefined,
        generalInfo: undefined,
        json: undefined,
        city: "Iasi",
        day: 0 
      }
      this.onBlur = this.onBlur.bind(this);
    }

    fetchData () {
      fetch(generateForecastUrl(this.state.city === '' ? "Iasi" : this.state.city)).then(response => response.json()).then(
        res =>{
          const forecastInfo = res.forecast.forecastday. map((item: any) => { return { info:{
            date : item.date,
            icon : item.day.condition.icon,
            maxC :  item.day.maxtemp_c,
            minC : item.day.mintemp_c,
            status : item.day.condition.text
          } } } )

          const generalInfo = {
            generalCity: res.location.name,
            generalCountry: res.location.country,
            generalIcon: res.current.condition.icon,
            generalTemperature: res.current.temp_c,
            generalStatus:  res.current.condition.text,
            generalDataUpdate: res.current.last_updated,
            generalFeelsLike: res.current.feelslike_c,
            generalWind: res.current.wind_kph,
            generalVisibility: res.current.vis_km,
            generalBarometer: res.current.pressure_mb,
            generalHumidity: res.current.humidity,
            generalDewPoint: 4,
          }

          this.setState({
            forecastInfo: forecastInfo,
            generalInfo: generalInfo,
            json: res
          })
        }
      )
    }

    onBlur(e: any){
      this.setState({city: e.target.value})
    }

    changeDay = (d: any) => {
      console.log("change day to " + d)
      this.setState({day: d})
    }

    extractDayInfo = (index: any) => {
      return this.state.json.forecast.forecastday[index].hour.map((item: any) => 
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
      if(this.state.forecastInfo && this.state.generalInfo){
        
        return (
            <div className= "Container">
              <div className="Section_Input_City">
                <input type="text" onBlur={this.onBlur}/>
              </div>
              <div className= 'Section_General_Temperature'>
                <GeneralTemperature generalInfo={this.state.generalInfo}/>
              </div>
              <div className="Section_Forecast_Daily">
                <Forecast changeDay={this.changeDay} info={this.state.forecastInfo}/>
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
      this.fetchData();
    }
  }
}

export default WeatherApp;