import { Routes, Route, Navigate } from "react-router-dom";
import { ModalMovie } from "../components/ModalMovie";
import Home from "../container/Home";
import Personal from "../container/Personal";

export const ListRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="modal/:id" element={<ModalMovie />} />
        <Route path="personal" element={<Personal />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
