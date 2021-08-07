import React, { Component } from "react";
import { firebaseAuth } from "../utils/firebase";
import showPopup from "./popupHelper";

class LoginComponent extends Component {
    constructor(props){
        super(props);
        this.emailRef = React.createRef();
        this.passwordRef = React.createRef();
    }
    render() {
        return(
            <div className='loginContainer'>
                <form>
                    <label>Email</label>
                    <input ref={this.emailRef} placeholder='Email'/>
                    <label>Password</label>
                    <input ref={this.passwordRef} placeholder='Password'/>
                    <input type="button" onClick={this.login} value="Log In"/>
                </form>
            </div>
        )
    }

    login = () => {        
        const email = this.emailRef.current.value;
        const password = this.passwordRef.current.value;
        firebaseAuth.signInWithEmailAndPassword(email,password).then((user) => {
            console.log(user);
            localStorage.setItem('token', '12431323423');
            showPopup('User logged in with succes!', 'SUCCES');
        
        }).catch(err => { console.log(err); showPopup(err.message, 'ERROR');});
    }
}
export default LoginComponent;



