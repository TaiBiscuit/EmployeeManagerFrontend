import React from "react";
import UserAuthService from "../services/UserAuthService";

export const Home = () => {
/*     const [jwt, setJwt] = useLocalState("", "jwt"); */

    function submitForm(e){
        e.preventDefault();
        const reqBody ={
            user: document.getElementById('fname').value,
            password:document.getElementById('fpas').value
        }
/*         UserAuthService.userLogIn(reqBody)
         .then((response) => Promise.all([response.json(), response.headers]))
        .then(([body, headers]) => {
            setJwt(headers.get("authorization"))
        }); */ 
    }

    return (
    <>
    <div className="main-container">
        <div className="log-in-form">
            <form action="post" onSubmit={(e) => submitForm(e)}>
                <div className="username form-div">
                    <label htmlFor="username" className="contact-label">Username</label>
                    <input name="username" type="text" className="contact-input" id="fname" required/>
                </div>
                <div className="password form-div">
                    <label htmlFor="password" className="contact-label">Password</label>
                    <input name="password" type="password" className="contact-input" id="fpas" required/>
                </div>
                <button className="log-btn">Log in</button>
            </form>
        </div>
        <a href="/employee">See All Employee</a>
    </div>
    </>
    )
}