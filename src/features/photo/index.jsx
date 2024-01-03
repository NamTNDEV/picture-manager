import { Route, Routes } from "react-router-dom";
import NotFound from "../../components/NotFound";
import MainPage from "./pages/MainPage";

function Photo() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Photo;
