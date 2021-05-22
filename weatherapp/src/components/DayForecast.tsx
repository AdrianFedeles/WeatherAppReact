import React from 'react';
import '../scss/dayForecast.scss'
import DayModel from '../models/DayModel'
class DayForecast extends React.Component<any, any>{
    constructor(props: any){
        super(props)
        console.log("Day " + this.props.day + " " + this.props.changeDay);
    }
    render() {
        return (
            <div className="Container_Day_Forecast" onClick={() => {this.props.changeDay(this.props.day)}} >
                <div className="Date_Icon_Day_Forecast">
                    <p>{this.props.info.date}</p>
                    <img src={this.props.info.icon}></img>
                </div>
                <div className="MaxC_MinC_Day_Forecast">
                    <p className="MaxC_Day_Forecast">{this.props.info.maxC}C°</p>
                    <p className="MinC_Day_Forecast">{this.props.info.minC}C°</p>
                </div>
                <div className="Paragraph_status_Day_Forecast">
                    <p>{this.props.info.status}</p>
                </div>
            </div>
        )
    }
}
export default DayForecast;