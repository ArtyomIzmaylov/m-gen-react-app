import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

interface Clinic {
    name: string;
    address: string;
}

interface PassDnaTestProps {
    clinics: Clinic[];
}

const PassDnaTest: React.FC<PassDnaTestProps> = ({ clinics }) => {
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Пройти тест на ДНК</h2>
            <ListGroup>
                {clinics.map((clinic, index) => (
                    <ListGroup.Item action key={index} href={`#clinic-${index}`}>
                        {clinic.name} - {clinic.address}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
};

export default PassDnaTest;
