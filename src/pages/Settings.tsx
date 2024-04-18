import React from 'react';

const Settings = () => {
    return (
        <div className="container-fluid w-75 mt-sm-3 mb-sm-3">
            <div className="container d-flex justify-content-center">
                <h6>Настройка личного кабинета</h6>
            </div>
            <div className="row mt-sm-3 mb-sm-3">
                <div className="col-6">
                    <div className="container-sm d-flex flex-column align-items-center">
                        <h6>Варвара Карамышева</h6>
                        <img src="/images/Варвара.jpg" alt="текст" className="img-fluid w-75"/>
                        <h6>Пациент</h6>
                    </div>
                </div>
                <div className="col-6 mt-sm-3 mb-sm-3 container d-flex flex-column justify-content-sm-around">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Имя пациента" aria-label="Username" aria-describedby="input-group-right"/>
                        <span className="input-group-text" id="input-group-right-example"></span>
                    </div>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Фамилия пациента" aria-label="Username" aria-describedby="input-group-right"/>
                        <span className="input-group-text" id="input-group-right-example"></span>
                    </div>
                    <div className="input-group">
                        <input type="email" className="form-control" placeholder="E-mail" aria-label="Username" aria-describedby="input-group-right"/>
                        <span className="input-group-text" id="input-group-right-example"></span>
                    </div>
                    <div className="input-group">
                        <input type="password" className="form-control" placeholder="Пароль" aria-label="Password" aria-describedby="input-group-right"/>
                        <span className="input-group-text" id="input-group-right-example"></span>
                    </div>
                </div>
            </div>

            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" value="" id="inlineCheckDefault"/>
                    <label className="form-check-label" htmlFor="inlineCheckDefault">Наличие заболеваний</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" value="" id="inlineCheckChecked"/>
                    <label className="form-check-label" htmlFor="inlineCheckChecked">Наличие противопоказаний</label>
            </div>


        </div>
    );
};

export default Settings;