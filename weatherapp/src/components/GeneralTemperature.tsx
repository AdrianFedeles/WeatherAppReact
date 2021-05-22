import React from 'react';
import '../scss/generalTemperature.scss';
import '../models/GeneralInfoModel'
import GeneralInfoModel from '../models/GeneralInfoModel';
type State = {};
class GeneralTemperature extends React.Component <GeneralInfoModel, State> {
    constructor(props: GeneralInfoModel){
        super(props)
    }
        render() {
            const { generalInfo } = this.props
            return (
                <div className= "Container_General_Temperature_General">
                        <div className= 'Top_General_Temperature'>
                            <p className = 'City_Peneral_Temperature'>{generalInfo.generalCity},</p>
                            <p className = 'Country_General_Temperature'>{generalInfo.generalCountry}</p>
                        </div>
                        <div className='Img_Temp_General_Temperature'>
                            <img src={generalInfo.generalIcon}/>
                            <p>{generalInfo.generalTemperature}°C</p>
                        </div>
                        <div className="Status_Update_General_Temperature">
                            <p className="Status_Paragraph_Status_Update_General_Temperature">{generalInfo.generalStatus}</p>
                            <p className="Update_Paragraph_Status_Update_General_Temperature">Update as of {generalInfo.generalDataUpdate.slice(10)} AM</p>
                        </div>
                        <div className= "Details_General_temperature">
                            <div className = "First_Details_General_Temperature">
                                <p>Feels Like {generalInfo.generalFeelsLike}C°</p>
                                <p>Wind {generalInfo.generalWind} km/h</p>
                                <p>Visibility {generalInfo.generalVisibility} km</p>
                            </div>
                            <div className="Second-Details_General_Temperature">
                                <p>Barometer {generalInfo.generalBarometer} mb</p>
                                <p>Humidity {generalInfo.generalHumidity}%</p>
                                <p>DewPoint {generalInfo.generalDewPoint}°</p>
                            </div>
                        </div>
                </div>
            )
    }
}



export default GeneralTemperature;