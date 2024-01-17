import { Suspense, lazy, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from "react-router-dom";

import NotFound from "./components/NotFound";
import Header from "./components/Header";
import productApi from "api/productApi";

const Photo = lazy(() => import("./features/photo"));

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

  return (
    <div className="">
      <Suspense fallback={<div>Loading ...</div>}>
        <Router>
          <Header />

          <Routes>
            <Route path="/" element={<Navigate to="/photo" />} />
            <Route path="/photo/*" element={<Photo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
