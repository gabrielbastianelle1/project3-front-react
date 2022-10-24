import React from 'react';
import { BrowserRouter ,Routes, Route} from "react-router-dom";

import Layout from './components/Layout';
import LandPage from './pages/landpage/LandPage';
import Signup from './pages/authpage/Signup';
import Signin from './pages/authpage/Signin';
import Home from './pages/home/Home';

function App(){
  return(
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path={"/"} element={<LandPage/>}></Route>
          <Route exact path={"/signup"} element={<Signup/>}></Route>
          <Route exact path={"/signin"} element={<Signin/>}></Route>
          <Route exact path={"/home"} element={<Home/>}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App;