import React from 'react';
import TransportFactory from './TransportFactory';

const App: React.FC = () => {
    // Create a transport factory for trucks
    const truckFactory = new TransportFactory('Truck');
    const truck = truckFactory.createTransport();
    truck.deliver();

    // Create a transport factory for ships
    const shipFactory = new TransportFactory('Ship');
    const ship = shipFactory.createTransport();
    ship.deliver();

    return (
        <div>
            <h1>Logistics Management Application</h1>
        </div>
    );
};

export default App;
