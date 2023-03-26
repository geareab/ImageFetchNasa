import React, { useContext }  from "react";

import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

import { AuthContext } from "../../shared/context/auth-context";

const LoginPage = () => {
  const auth = useContext(AuthContext);
  return (
    <GoogleOAuthProvider clientId="443069228094-kbs9ehqdj38dbn9fgeo51efnifsimsv2.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
          auth.login(credentialResponse.credential, credentialResponse.credential);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </GoogleOAuthProvider>
  );
};

export default LoginPage;
