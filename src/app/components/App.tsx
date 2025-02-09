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
`;


const Title = styled.h1`
 color: #333;
 text-align: center;
 margin-bottom: 20px;
`;


const Section = styled.div`
 margin-bottom: 30px;
 padding: 20px;
 border: 1px solid #eee;
 border-radius: 8px;
 background-color: #f9f9f9;
 box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;


const SubTitle = styled.h2`
 color: #555;
 margin-bottom: 15px;
`;


const StyledButton = styled.button`
 background-color: #4CAF50;
 color: white;
 padding: 10px 15px;
 border: none;
 border-radius: 5px;
 cursor: pointer;
 font-size: 16px;
 transition: background-color 0.3s ease;


 &:hover {
 background-color: #367c39;
 }


 &:focus {
 outline: none;
 box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.5);
 }
`;


const TransportInfo = styled.div`
 margin-top: 15px;
 animation: ${fadeIn} 0.5s ease-in-out;
`;


const InfoParagraph = styled.p`
 color: #777;
 margin-bottom: 8px;
`;


const DeliveryMessage = styled.p`
 font-style: italic;
 color: #4CAF50;
 margin-top: 10px;
`;


const NoTransportMessage = styled.p`
 color: #999;
`;


const Input = styled.input`
 padding: 8px;
 border: 1px solid #ccc;
 border-radius: 4px;
 margin-right: 10px;
 font-size: 14px;
`;


const TransportList = styled.div`
 margin-top: 20px;
`;


const TransportItem = styled.div`
 border: 1px solid #ddd;
 border-radius: 4px;
 padding: 10px;
 margin-bottom: 10px;
 background-color: #fff;
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
 const [transportName, setTransportName] = useState<string>('');


 const truckFactory = new TransportFactory('Truck');
 const shipFactory = new TransportFactory('Ship');


 const createTruck = useCallback(() => {
 const newTruck = truckFactory.createTransport();
 setTrucks((prevTrucks) => [
 ...prevTrucks,
 {
 name: transportName,
 transport: newTruck,
 deliveryMessage: newTruck.deliver(),
 },
 ]);
 setTransportName(''); // Clear the input after creating
 }, [truckFactory, transportName]);


 const createShip = useCallback(() => {
 const newShip = shipFactory.createTransport();
 setShips((prevShips) => [
 ...prevShips,
 {
 name: transportName,
 transport: newShip,
 deliveryMessage: newShip.deliver(),
 },
 ]);
 setTransportName(''); // Clear the input after creating
 }, [shipFactory, transportName]);


 const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
 setTransportName(e.target.value);
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
 value={transportName}
 onChange={handleNameChange}
 />
 <StyledButton onClick={createTruck} disabled={!transportName}>
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
 value={transportName}
 onChange={handleNameChange}
 />
 <StyledButton onClick={createShip} disabled={!transportName}>
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
