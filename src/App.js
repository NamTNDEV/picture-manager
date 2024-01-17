import { Suspense, lazy, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import NotFound from "./components/NotFound";
import Header from "./components/Header";
import productApi from "api/productApi";
import SignIn from "features/auth/pages/SignIn";

const Photo = lazy(() => import("./features/photo"));

const config = {
  apiKey: "AIzaSyAUivWB_rf1y0-6Z4qdvIABFlSM1xfZAXg",
  authDomain: "picmanager-6dbdd.firebaseapp.com",
};
firebase.initializeApp(config);
function App() {
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = {
          offset: 10,
          limit: 10,
        };
        const response = await productApi.getAll(params);
        console.log(response);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };
    fetchProductList();
  }, []);

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        if (!user) {
          console.log("::!User::", user);
          return;
        }
        localStorage.setItem(
          "firebaseui::rememberedAccounts",
          JSON.stringify(user)
        );
        console.log("::User::", user);
      });
    return () => unregisterAuthObserver();
  }, []);

  return (
    <div className="">
      <Suspense fallback={<div>Loading ...</div>}>
        <Router>
          <Header />

          <Routes>
            <Route path="/" element={<Navigate to="/photo" />} />
            <Route path="/photo/*" element={<Photo />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
