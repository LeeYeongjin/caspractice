import React from 'react';
import CasClient, { constant } from "react-cas-client";


const Home = () => {

    let casEndpoint = "https://ssodev.ucdavis.edu/cas";
    let casOptions = { version: constant.CAS_VERSION_2_0 };

    let casClient = new CasClient(casEndpoint, casOptions);

    function handleLogin(event){
        event.preventDefault()
        
        casClient
            .auth()
            .then(successRes => {
                console.log(successRes);
                // Login user in state / locationStorage ()
                // eg. loginUser(response.user);

                // If proxy_callback_url is set, handle pgtpgtIou with Proxy Application

                // Update current path to trim any extra params in url
                // eg. this.props.history.replace(response.currentPath);
            })
            .catch(errorRes => {
                console.error(errorRes);
                // Error handling
                // displayErrorByType(errorRes.type)

                // Update current path to trim any extra params in url
                // eg. this.props.history.replace(response.currentPath);
            });

    }
    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleLogin}>Login Here</button>
        </div>
    )
}

export default Home