import React from 'react';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

interface NavbarProps {
    handleShow : () => void
}
const Navbar : React.FC<NavbarProps> = ({handleShow}) => {

    return (

        <nav className="navbar sticky-top navbar-expand-sm navbar-light bg-light">
                    <div className="navbar-nav container d-flex justify-content-between fs-3">
                        <Link className="nav-link active" aria-current="page" to="/home">m.GEN</Link>
                        <Link className="nav-link" to="/settings">Настройки</Link>
                        <Link className="nav-link" to="/settings">Статистика</Link>
                        <Link className="nav-link" to="/settings">ДНК-Тест</Link>
                        <Button variant="primary" onClick={handleShow}>
                            QR-Code
                        </Button>
                    </div>
        </nav>);

};

export default Navbar;