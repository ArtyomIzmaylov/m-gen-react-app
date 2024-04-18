import React from 'react';

interface PatientStatisticsProps {
    bioMaterials: string[];
    analyses: string[];
    vitamins: string[];
}

const PatientStatistics: React.FC<PatientStatisticsProps> = ({ bioMaterials, analyses, vitamins }) => {
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Статистика пациента за месяц</h2>
            <div className="row">
                <div className="col-md-4">
                    <h3>Биоматериальные параметры</h3>
                    <ul className="list-group">
                        {bioMaterials.map((item, index) => (
                            <li key={index} className="list-group-item">{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-4">
                    <h3>Анализы</h3>
                    <ul className="list-group">
                        {analyses.map((item, index) => (
                            <li key={index} className="list-group-item">{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-4">
                    <h3>Витамины</h3>
                    <ul className="list-group">
                        {vitamins.map((item, index) => (
                            <li key={index} className="list-group-item">{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PatientStatistics;