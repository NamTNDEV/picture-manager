import "firebase/compat/auth";
import firebase from "firebase/compat/app";
import { StyledFirebaseAuth } from "react-firebaseui";

const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/photo",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

function SignIn() {
  return (
    <div>
      <div className="text-center">
        <h2>Login Form</h2>
        <p>or login with social accounts</p>
      </div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}

export default SignIn;
