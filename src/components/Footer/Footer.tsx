import React from 'react';

const Footer = () => {
    return (
        <div className="bg-light text-center text-lg-start mt-5">
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Варвара Карамышева</h5>
                        <p>
                            Telegram: <a href="https://t.me/aonooccultist" target="_blank" rel="noopener noreferrer">@aonooccultist</a><br />
                            Email: <a href="mailto:varya.karamysheva@gmail.com">varya.karamysheva@gmail.com</a>
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Ссылки</h5>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#!" className="text-dark">Ссылка 1</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Ссылка 2</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Ссылка 3</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-0">Социальные сети</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#!" className="text-dark"><i className="bi bi-facebook"></i> Facebook</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark"><i className="bi bi-twitter"></i> Twitter</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark"><i className="bi bi-instagram"></i> Instagram</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="text-center p-3 opacity-75 p-2 m-1 bg-dark text-bg-dark fw-dark rounded">
                © 2024 Варвара Карамышева
            </div>
        </div>
    );
};

export default Footer;
