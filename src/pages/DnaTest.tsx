import React from 'react';
import PassDnaTest from "../components/PassDnaTest/PassDnaTest";

const DnaTest = () => {
    const clinics = [
        { name: 'Клиника A', address: 'ул. Примера, 1' },
        { name: 'Клиника B', address: 'ул. Примера, 2' },
        { name: 'Клиника C', address: 'ул. Примера, 3' },
        { name: 'Клиника A', address: 'ул. Примера, 1' },
        { name: 'Клиника B', address: 'ул. Примера, 2' },
        { name: 'Клиника C', address: 'ул. Примера, 3' },
        { name: 'Клиника A', address: 'ул. Примера, 1' },
        { name: 'Клиника B', address: 'ул. Примера, 2' },
        { name: 'Клиника C', address: 'ул. Примера, 3' },
    ];
    return (
        <div>
            <PassDnaTest clinics={clinics}></PassDnaTest>
        </div>
    );
};

export default DnaTest;