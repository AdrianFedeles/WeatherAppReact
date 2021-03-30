import React from 'react';
import './forecast.css'
import GeneralTemperature from './generalTemperature'
import DayForecast from './DayForecast'
interface DayModel{
    date: string,
    icon: string,
    maxC: number,
    minC: number,
    status: string
}

interface Props{
    info: DayModel[]
}

type State = {};
class Forecast extends React.Component<Props, State>{
    constructor(props: Props){
        super(props)
    }
    
    render() {
        return (
            <div className=''>
                <div className= ''>
                <GeneralTemperature>
                </GeneralTemperature>
                </div>
            <div className="">
                <p>Daily</p>
                <div className="forecast">
                { this.props.info.map( (item, i) => <DayForecast key={i} info={item} /> )}
                </div>
            </div>
            </div>
        )
    }
}
export default Forecast;