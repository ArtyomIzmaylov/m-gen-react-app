import React, {useState} from 'react';
import './App.css';
import Main from "./pages/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Settings from "./pages/Settings";

function App() {
    const [showModal, setShowModal] = useState(false);
  return (
      <div className='container-fluid'>
          <BrowserRouter>
              <Navbar handleShow={() => setShowModal(true)}></Navbar>
                      <Routes>
                          <Route path="/home" element={<Main show={showModal} handleClose={() => setShowModal(false)}/>} />
                          <Route path="/settings" element={<Settings/>} />
                          <Route path="/home" element={<Main show={showModal} handleClose={() => setShowModal(false)}/>} />
                          <Route path="/home" element={<Main show={showModal} handleClose={() => setShowModal(false)}/>} />
                      </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
