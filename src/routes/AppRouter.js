import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllMovies from '../components/AllMovies';
import TopRated from '../components/TopRated';
import Home from '../container/Home';


function AppRouter() {
  return (<div>
<BrowserRouter>
    <Routes >
       <Route path="/" element={<Home />}>
          <Route index element={<AllMovies />} />
          <Route path="top" element={<TopRated />} />
                   
        </Route>
    </Routes>
</BrowserRouter>

  </div>);
}

export default AppRouter;
