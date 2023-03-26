import React from "react";

import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

const LoginPage = () => {
  return (
    <GoogleOAuthProvider clientId="443069228094-kbs9ehqdj38dbn9fgeo51efnifsimsv2.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </GoogleOAuthProvider>
  );
};

export default LoginPage;
