import { Routes, Route, Navigate } from "react-router-dom";
import AllMovies from "../components/AllMovies";
import { ModalMovie } from "../components/ModalMovie";
import TopRated from "../components/TopRated";
import Home from "../container/Home";
import Personal from "../container/Personal";

export const ListRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<AllMovies />} />
          <Route path="top" element={<TopRated />} />
          <Route path="modal/:id" element={<ModalMovie />} />
        </Route>
        <Route path="personal" element={<Personal />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
