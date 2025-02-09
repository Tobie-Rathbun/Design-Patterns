import Truck from './Truck';
import Ship from './Ship';
import { Transport } from './Transport';

// Factory class that creates transport objects
class TransportFactory {
    private type: string;

    constructor(type: string) {
        this.type = type;
    }

    // Factory method to create transport objects
    createTransport(): Transport {
        switch (this.type) {
            case 'Truck':
                return new Truck(); // Create a Truck object
            case 'Ship':
                return new Ship(); // Create a Ship object
            default:
                throw new Error('Unknown transport type');
        }
    }
}

export default TransportFactory;
