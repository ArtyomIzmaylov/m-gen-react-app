import React, {useState} from 'react';
import Navbar from "../components/Navbar/Navbar";
import Modal from "../components/Modal/MyModal";
import MyModal from "../components/Modal/MyModal";
import Sidebar from "../components/Sidebar/Sidebar";

interface MainProps {
    show : boolean
    handleClose: () => void;
}
const Main : React.FC<MainProps>= ({show, handleClose}) => {

    return (
        <div>
            <div className="container-sm d-flex flex-column align-items-center">
                <h1>Варвара Карамышева</h1>
                <img src="/images/Варвара.jpg" alt="текст" className="img-fluid w-50"/>
                <h6>Пациент</h6>
            </div>

            <div className="row gx-5 gy-5 row-cols-2 fs-1">
                <div className="col">
                    <div className="p-3 border bg-light">Купленный блок</div>
                </div>
                <div className="col">
                    <div className="p-3 border bg-light">Купленный блок</div>
                </div>
                <div className="col">
                    <div className="p-3 border bg-light">Купленный блок</div>
                </div>
                <div className="col">
                    <div className="p-3 border bg-light">Купленный блок</div>
                </div>
            </div>
            <MyModal show={show} handleClose={handleClose}></MyModal>
        </div>
    );
};

export default Main;