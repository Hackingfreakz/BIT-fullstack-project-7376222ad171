import React from 'react'
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

const GAuth = () => {
    const clientId = "691701543397-gbptsop3a1t7b0j2b25djg67nae1rkik.apps.googleusercontent.com";

    return (
        <GoogleOAuthProvider 
        style={{backgroundColor: '#f2f5f9'}}
            clientId={clientId}>
            <GoogleLogin
                onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                }}
                onError={() => {
                    console.log("Login Failed");
                }}
            />
        </GoogleOAuthProvider>
    );
};
export default GAuth;