import { Transport } from './Transport';

// Concrete product: Ship
class Ship implements Transport {
    deliver(): void {
        console.log('Delivering cargo by sea in a ship.');
    }
}

export default Ship;
