import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Add from "./pages/Add";
import NotFound from "components/NotFound";

function Photo() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/add" element={<Add />} />
      <Route path={`/:photoId`} element={<Add />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Photo;
