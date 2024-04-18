import React, {useState} from 'react';
import './App.css';
import Main from "./pages/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Settings from "./pages/Settings";
import Statistic from "./pages/Statistic";
import DnaTest from "./pages/DnaTest";
import Footer from "./components/Footer/Footer";

function App() {
    const [showModal, setShowModal] = useState(false);
  return (
      <div>

      <div className='container-fluid'>
          <BrowserRouter>
              <Navbar handleShow={() => setShowModal(true)}></Navbar>
                      <Routes>
                          <Route path="/home" element={<Main show={showModal} handleClose={() => setShowModal(false)}/>} />
                          <Route path="/settings" element={<Settings/>} />
                          <Route path="/statistic" element={<Statistic/>} />
                          <Route path="/dnatest" element={<DnaTest/>} />
                      </Routes>
          </BrowserRouter>
      </div>
          <Footer></Footer>
      </div>
  );
}

export default App;
