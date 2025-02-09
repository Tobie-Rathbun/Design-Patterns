import React, { useState, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import TransportFactory from './TransportFactory';
import { Transport } from './Transport';


// Animations
const fadeIn = keyframes`
 from {
 opacity: 0;
 transform: translateY(-10px);
 }
 to {
 opacity: 1;
 transform: translateY(0);
 }
`;


// Styled Components
const AppContainer = styled.div`
 font-family: 'Arial', sans-serif;
 padding: 20px;
 max-width: 800px;
 margin: 0 auto;
 background-color: var(--primary-text-color, #1a1a1a); /* Page background */
 color: var(--dark-background, #f9f9f9); /* Text on page */
`;


const Title = styled.h1`
 color: var(--highlight-color, #bb86fc); /* Header text */
 text-align: center;
 margin-bottom: 20px;
`;


const Section = styled.div`
 margin-bottom: 30px;
 padding: 20px;
 border: 1px solid var(--chord-element-border, #b3b3b3);
 border-radius: 8px;
 background-color: var(--secondary-text-color, #4a4a4a); /* Object background */
 box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5); /* Darker shadow */
 color: var(--dark-background, #f9f9f9); /* Text in object */
`;


const SubTitle = styled.h2`
 color: var(--highlight-color, #bb86fc); /* Header text */
 margin-bottom: 15px;
`;


const StyledButton = styled.button`
 background-color: var(--accent-color-dark, #3700b3); /* Button background */
 color: var(--dark-background, #f9f9f9); /* Text on button */
 padding: 10px 15px;
 border: none;
 border-radius: 5px;
 cursor: pointer;
 font-size: 16px;
 transition: background-color 0.3s ease;


 &:hover {
 background-color: var(--accent-color, #6200ee); /* Active button */
 }


 &:focus {
 outline: none;
 box-shadow: 0 0 0 2px var(--highlight-color, #bb86fc);
 }
`;


const TransportInfo = styled.div`
 margin-top: 15px;
 animation: ${fadeIn} 0.5s ease-in-out;
`;


const InfoParagraph = styled.p`
 color: var(--dark-background, #f9f9f9); /* Text in object */
 margin-bottom: 8px;
`;


const DeliveryMessage = styled.p`
 font-style: italic;
 color: var(--highlight-color, #bb86fc); /* Accent color */
 margin-top: 10px;
`;


const NoTransportMessage = styled.p`
 color: var(--secondary-text-color, #4a4a4a);
`;


const Input = styled.input`
 padding: 8px;
 border: 1px solid var(--chord-element-border, #b3b3b3);
 border-radius: 4px;
 margin-right: 10px;
 font-size: 14px;
 color: var(--dark-background, #f9f9f9); /* Text in input */
 background-color: var(--chord-player-background, #eeeeee); /* Keep background */


 &::placeholder {
 color: var(--secondary-text-color, #4a4a4a); /* Dim placeholder */
 opacity: 0.8;
 }


 &:focus {
 outline: none;
 border-color: var(--accent-color, #6200ee);
 box-shadow: 0 0 0 2px var(--highlight-color-light, #e3d0ff);
 }
`;


const TransportList = styled.div`
 margin-top: 20px;
`;


const TransportItem = styled.div`
 border: 1px solid var(--chord-element-border, #b3b3b3);
 border-radius: 4px;
 padding: 10px;
 margin-bottom: 10px;
 background-color: var(--secondary-text-color, #4a4a4a); /* Object background */
 color: var(--dark-background, #f9f9f9); /* Text in object */
`;


interface TransportItemProps {
 name: string;
 deliveryMessage: string;
}


const App: React.FC = () => {
 const [trucks, setTrucks] = useState<
 { name: string; transport: Transport; deliveryMessage: string }[]
 >([]);
 const [ships, setShips] = useState<
 { name: string; transport: Transport; deliveryMessage: string }[]
 >([]);
 const [truckName, setTruckName] = useState<string>('');
 const [shipName, setShipName] = useState<string>('');


 const truckFactory = new TransportFactory('Truck');
 const shipFactory = new TransportFactory('Ship');


 const createTruck = useCallback(() => {
 const newTruck = truckFactory.createTransport();
 setTrucks((prevTrucks) => [
 ...prevTrucks,
 {
 name: truckName,
 transport: newTruck,
 deliveryMessage: newTruck.deliver(),
 },
 ]);
 setTruckName(''); // Clear the input after creating
 }, [truckFactory, truckName]);


 const createShip = useCallback(() => {
 const newShip = shipFactory.createTransport();
 setShips((prevShips) => [
 ...prevShips,
 {
 name: shipName,
 transport: newShip,
 deliveryMessage: newShip.deliver(),
 },
 ]);
 setShipName(''); // Clear the input after creating
 }, [shipFactory, shipName]);


 const handleTruckNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
 setTruckName(e.target.value);
 };


 const handleShipNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
 setShipName(e.target.value);
 };


 const TransportItemComponent: React.FC<TransportItemProps> = ({
 name,
 deliveryMessage,
 }) => (
 <TransportItem>
 <InfoParagraph>
 <strong>Name:</strong> {name}
 </InfoParagraph>
 <InfoParagraph>
 <strong>Delivery Method:</strong>
 </InfoParagraph>
 <DeliveryMessage>{deliveryMessage}</DeliveryMessage>
 </TransportItem>
 );


 return (
 <AppContainer>
 <Title>Logistics Management Application</Title>
 <p>
 This application demonstrates the Factory Method design pattern by
 creating different types of transport objects (Truck and Ship) using a
 TransportFactory.
 </p>


 <Section>
 <SubTitle>Truck Transport</SubTitle>
 <Input
 type="text"
 placeholder="Enter Truck Name"
 value={truckName}
 onChange={handleTruckNameChange}
 />
 <StyledButton onClick={createTruck} disabled={!truckName}>
 Create Truck
 </StyledButton>
 <TransportList>
 {trucks.map((truck, index) => (
 <TransportItemComponent
 key={index}
 name={truck.name}
 deliveryMessage={truck.deliveryMessage}
 />
 ))}
 </TransportList>
 </Section>


 <Section>
 <SubTitle>Ship Transport</SubTitle>
 <Input
 type="text"
 placeholder="Enter Ship Name"
 value={shipName}
 onChange={handleShipNameChange}
 />
 <StyledButton onClick={createShip} disabled={!shipName}>
 Create Ship
 </StyledButton>
 <TransportList>
 {ships.map((ship, index) => (
 <TransportItemComponent
 key={index}
 name={ship.name}
 deliveryMessage={ship.deliveryMessage}
 />
 ))}
 </TransportList>
 </Section>
 </AppContainer>
 );
};


export default App;
