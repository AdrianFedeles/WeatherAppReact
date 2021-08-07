import React, { Component } from "react";
import { firebaseAuth } from "../utils/firebase";
import showPopup from "./popupHelper";

class RegisterComponent extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className='loginContainer'>
                <form>
                    <label>Email</label>
                    <input property="email" onChange={(e) => this.onValueChanged(e)} placeholder='Email'/>
                    <label>Password</label>
                    <input property="password" onChange= {(e) => this.onValueChanged(e)} placeholder='Password'/>
                    <input type="button" onClick={this.register} value="Register"/>
                </form>
            </div>
        )
    }

    register = () => {        
        const { email, password } = this.state;
        firebaseAuth.createUserWithEmailAndPassword(email, password).then((succ) => { console.log(succ); showPopup('User created with succes!', 'SUCCES');})
        .catch(err => { console.log(err); showPopup(err.message, 'ERROR');});
    }

    onValueChanged = (e) => {
        const property = e.target.getAttribute("property");
        const value = e.target.value;
        this.setState({[property]: value});
    }
}
export default RegisterComponent;



