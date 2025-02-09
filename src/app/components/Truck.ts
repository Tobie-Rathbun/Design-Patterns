import { Transport } from './Transport';

// Concrete product: Truck
class Truck implements Transport {
    deliver(): void {
        console.log('Delivering cargo by land in a truck.');
    }
}

export default Truck;
