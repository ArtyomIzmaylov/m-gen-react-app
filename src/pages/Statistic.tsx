import React from 'react';
import PatientStatistics from "../components/PatientStatistics/PatientStatistics";

const Statistic = () => {
    const bioMaterials = ['Глюкоза', 'Креатинин', 'Билирубин'];
    const analyses = ['Гемоглобин', 'Лейкоциты', 'Тромбоциты'];
    const vitamins = ['Витамин C', 'Витамин D', 'Витамин E'];
    return (
        <div>
            <PatientStatistics bioMaterials={bioMaterials} analyses={analyses} vitamins={vitamins} />
        </div>
    );
};

export default Statistic;