import React from 'react';
import './dayForecast.css'

type Props = {info: {
    date: string,
    icon: string,
    maxC: number,
    minC: number,
    status: string
}}
type State = {};
class DayForecast extends React.Component<Props, State>{
    constructor(props: Props){
        super(props)
    }
    
    render() {
        return (
            // <p>This is a day forecast</p>
            <div className="dayForecast">
            <p>{this.props.info.date}</p>
            <img src={this.props.info.icon}></img>
            <div className="dayWeather">
            <p>{this.props.info.maxC}</p>
            <p>{this.props.info.minC}</p>
            </div>
            <p>{this.props.info.status}</p>
            </div>
        )
    }
}
export default DayForecast;