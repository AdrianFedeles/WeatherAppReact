import { Component } from "react";
import DetailsComponent from "./DetailsComponent";
import "../scss/DetailsHorly.scss";
class DetailsHourly extends Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            indexStart: 0
        }
        console.log(props.dayInfo)
    }

    render(){
        const { dayInfo, nrElems } = this.props;
        const { indexStart } = this.state;
        return (
            <div>
                <hr/>
                    <div className="details-container">
                        <button onClick={()=>this.toLeft()}>{'<'}</button>
                        {dayInfo.filter((day: any, i: any) => i>=indexStart && i-indexStart<nrElems).map((day: any, i: any) =><DetailsComponent key={`details_${i}`} dayInfo={day}/>)}
                        <button onClick={()=>this.toRight()}>{'>'}</button>
                    </div>
                <hr/>
            </div>
        );
    }

    toLeft = () => {
        console.log('left');
        const { nrElems } = this.props;
        let {indexStart } = this.state;
        if(indexStart == 0){
            return;
        }
        else if( indexStart >= nrElems ) {
            indexStart = indexStart - nrElems;
        }
        else if( indexStart > 0) {
            indexStart = 0;
        }
        this.setState({indexStart});
    }

    toRight = () => {
        console.log('right');
        const { nrElems, dayInfo } = this.props;
        let {indexStart } = this.state;
        let limit = dayInfo.length - nrElems;
        if( indexStart == limit  ){
            return;
        }
        else if( limit-indexStart+1 < nrElems) {
            indexStart = limit;
        }
        else  {
            indexStart = indexStart + nrElems;
        }
        
        this.setState({indexStart});
    }
}

export default DetailsHourly;