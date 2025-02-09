// app/components/Ship.ts
import { Transport } from './Transport';

// Concrete product: Ship
class Ship implements Transport {
    deliver(): string {
        return 'Delivering cargo by sea in a ship.';
    }
}

export default Ship;
