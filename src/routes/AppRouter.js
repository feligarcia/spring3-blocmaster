import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllMovies from '../components/AllMovies';
import { ModalMovie } from '../components/ModalMovie';
import TopRated from '../components/TopRated';
import Home from '../container/Home';


function AppRouter() {
  return (<div>
<BrowserRouter>
    <Routes >
       <Route path="/" element={<Home />}>
          <Route index element={<AllMovies />} />
          <Route path="top" element={<TopRated />} />
          <Route path="modal" element={<ModalMovie />} />
                   
        </Route>
    </Routes>
</BrowserRouter>

  </div>);
}

export default AppRouter;
