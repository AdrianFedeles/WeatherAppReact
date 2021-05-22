import { Component } from "react";

class DetailsComponent extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const { dayInfo } = this.props;
        return(
            <div className="details-part-container">
                <div><img src={dayInfo.icon}/></div>
                <div>{dayInfo.temp}</div>
                <div>{dayInfo.status}</div>
                <div>{dayInfo.humidity}%</div>
                <div>{dayInfo.wind} km/h</div>
            </div>
        )
    }
}

export default DetailsComponent;