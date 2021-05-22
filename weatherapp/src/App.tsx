import React from 'react';
import './App.css';

type AppProps = {};
type AppState = { date: Date, text: string, numb: number };
class App extends React.Component<AppProps,AppState>{
  timerID: number;
  constructor(props: object){
    console.log("constructor")
    super(props)
    this.timerID = 0; 
    this.state = {
      date: new Date(),
      text: "Adrian",
      numb: 0
    };
    this.click = this.click.bind(this);
    //busy indicator
  }

  render(){
    console.log("render")
    return(
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <h2>It is {this.state.text}</h2>
        <h2>It is {this.state.numb}</h2>
        <button onClick={this.click}>CLICK ME!!!</button>
      </div>
    );
  }

  click(): void{
    this.setState({
      text: "Adrian Fedeles"
    })
    this.setState((state, props)=>({
      numb : state.numb + 1
    })
    )
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  componentDidMount(){
    console.log("did mount")
    // this.timerID = window.setInterval(
    //   () => this.tick(),
    //   1000
    // );
  }

  componentDidUpdate(){
    console.log("did update")
    //call spre api
    //oprim buysindicator
    //parsam datele din json
    //forecast -> array cu toate zilele de forecat
    //vreme general -> json cu informatiile potrivite
  }

  componentWillUnmount(){
    console.log("will unmount")
    clearInterval(this.timerID);
  }

}

export default App;
