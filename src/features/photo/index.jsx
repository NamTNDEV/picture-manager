import { Route, Routes } from "react-router-dom";
import NotFound from "../../components/NotFound";
import Main from "./pages/Main";
import Add from "./pages/Add";

function Photo() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/add" element={<Add />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Photo;
