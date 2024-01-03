import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from "react-router-dom";

import NotFound from "./components/NotFound";
import Header from "./components/Header";

const Photo = lazy(() => import("./features/photo"));

function App() {
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
