// app/components/Truck.ts
import { Transport } from './Transport';

// Concrete product: Truck
class Truck implements Transport {
    deliver(): string {
        return 'Delivering cargo by land in a truck.';
    }
}

export default Truck;
