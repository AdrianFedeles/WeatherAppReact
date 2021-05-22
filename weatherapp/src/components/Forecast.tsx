import React from 'react';
import '../scss/forecast.scss'
import DayForecast from './DayForecast'
class Forecast extends React.Component<any, any>{
    constructor(props: any){
        super(props)
        console.log("Forecast " + this.props.changeDay)
    }
    render() {
        return (
            <div>
                <p className="Parafraph_Section_Forecast_Daily">Daily</p>
                <div className="Forecast_Daily">
                { this.props.info.map( (item: any, i: any) => <DayForecast changeDay={this.props.changeDay} day={i} key={i} info={item.info}/> )}
                </div>
            </div>
        )
    }
}
export default Forecast;