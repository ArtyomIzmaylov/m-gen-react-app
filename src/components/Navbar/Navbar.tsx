import React from 'react';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {GenderTrans, QrCode} from "react-bootstrap-icons";

interface NavbarProps {
    handleShow : () => void
}
const Navbar : React.FC<NavbarProps> = ({handleShow}) => {

    return (

        <nav className="navbar sticky-top navbar-expand-sm navbar-light bg-light">
                    <div className="navbar-nav container d-flex justify-content-between fs-3">
                        <Link className="nav-link active" aria-current="page" to="/home">m.GEN</Link>
                        <Link className="nav-link" to="/settings">Настройки</Link>
                        <Link className="nav-link" to="/statistic">Статистика</Link>
                        <Link className="nav-link" to="/dnatest">ДНК-Тест</Link>
                        <Button variant="dark" onClick={handleShow}>
                            <QrCode size={48} />
                        </Button>
                    </div>
        </nav>);

};

export default Navbar;