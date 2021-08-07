import React from "react";
import DetailsHourly from "./DetailsHourly";
import ChartHourly from "./ChartHourly";
class HourlyComponent extends React.Component <any, any> {
    constructor(props: any) {
        super(props);
        console.log('Hourly comp ctor');
        this.state = {
            state: 1,
        }
    }
    renderSummary = () => {
        console.log('renderSumm');
        return (
        <div>
            <ChartHourly {...this.props}></ChartHourly>
        </div>
        );
    }
    renderDetails = () => {
        console.log('renderDetails');
        return (
        <div>
            <DetailsHourly {...this.props} nrElems={8
            }></DetailsHourly>
        </div>);
    }
    renderState = () : any => {
        switch (this.state.state){
            case 1:
                return this.renderSummary();
            case 2: 
                return this.renderDetails();
            default:
                return (<p>State not supported</p>);
        }
    }
    summaryClick = () => {
        this.setState({state:1})
    }
    detailsClick = () => {
        this.setState({state:2})
    }
    render(){
        console.log("render "+ "hourlycomp")
        return(
            <div >
                <div className="Top_Section_Hourly">
                    <div className="Paragraph_Section_Chart_Hourly">
                        <p>Hourly</p>
                    </div>
                    <span className="Space_Bitwin_Paragrapf_And_Buttons"></span>
                    <div className="Buttons_Section_Chart_Hourly">
                        <button onClick= {this.summaryClick} className= "Button_Summary_Section_Chart_Hourly">Summary</button>
                        <button onClick= {this.detailsClick} className="Button_Details_Section_Chart_Hourly">Details</button>
                    </div>
                </div>
                <div className="Details_Section_Hourly">
                    {this.renderState()}
                </div>
            </div>
        )
    }
        
    
}

export default HourlyComponent;