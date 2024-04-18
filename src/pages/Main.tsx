import React from 'react';
import MyModal from "../components/Modal/MyModal";
import {
    ArrowDown,
    ArrowLeft,
    ArrowRight,
    ArrowUp,
    CardHeading,
    EggFill,
    GenderTrans,
    Slack
} from "react-bootstrap-icons";

interface MainProps {
    show : boolean
    handleClose: () => void;
}

const Main : React.FC<MainProps>= ({show, handleClose}) => {
    return (
        <div className="container-fluid">
            <div className="container-sm d-flex flex-column align-items-center mb-5">
                <h1>Варвара Карамышева</h1>
                <img src="/images/Варвара.jpg" alt="текст" className="img-fluid w-50"/>
                <h2>Пациент</h2>
            </div>

            <div className="row gx-5 gy-5 row-cols-2 fs-1">
                <div className="col">
                    <div className="p-3 border bg-light d-flex flex-column align-items-center" role={"button"} tabIndex={0}>
                        <CardHeading size={48} />
                        <p>Расшифровать тест</p>
                    </div>
                </div>
                <div className="col">
                    <div className="p-3 border bg-light d-flex flex-column align-items-center" role={"button"} tabIndex={0}>
                        <GenderTrans size={48} />
                        <p>Baby генетика</p>
                    </div>
                </div>
                <div className="col">
                    <div className="p-3 border bg-light d-flex flex-column align-items-center" role={"button"} tabIndex={0}>
                        <Slack size={48} />
                        <p>Beauty генетика</p>
                    </div>
                </div>
                <div className="col">
                    <div className="p-3 border bg-light d-flex flex-column align-items-center" role={"button"} tabIndex={0}>
                        <EggFill size={48} />
                        <p>Генетика питания</p>
                    </div>
                </div>
            </div>
            <MyModal show={show} handleClose={handleClose}></MyModal>
        </div>
    );
};

export default Main;
