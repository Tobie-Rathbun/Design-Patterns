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


const App: React.FC = () => {
 const [truck, setTruck] = useState<Transport | null>(null);
 const [ship, setShip] = useState<Transport | null>(null);
 const [truckDeliveryMessage, setTruckDeliveryMessage] = useState<string>(
 '',
 );
 const [shipDeliveryMessage, setShipDeliveryMessage] = useState<string>(
 '',
 );


 const truckFactory = new TransportFactory('Truck');
 const shipFactory = new TransportFactory('Ship');


 const createTruck = useCallback(() => {
 const newTruck = truckFactory.createTransport();
 setTruck(newTruck);
 setTruckDeliveryMessage(newTruck.deliver());
 }, [truckFactory]);


 const createShip = useCallback(() => {
 const newShip = shipFactory.createTransport();
 setShip(newShip);
 setShipDeliveryMessage(newShip.deliver());
 }, [shipFactory]);


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
 <StyledButton onClick={createTruck}>Create Truck</StyledButton>
 {truck ? (
 <TransportInfo>
 <InfoParagraph>
 <strong>Type:</strong> Truck
 </InfoParagraph>
 <InfoParagraph>
 <strong>Delivery Method:</strong>
 </InfoParagraph>
 <DeliveryMessage>{truckDeliveryMessage}</DeliveryMessage>
 </TransportInfo>
 ) : (
 <NoTransportMessage>No Truck created yet.</NoTransportMessage>
 )}
 </Section>


 <Section>
 <SubTitle>Ship Transport</SubTitle>
 <StyledButton onClick={createShip}>Create Ship</StyledButton>
 {ship ? (
 <TransportInfo>
 <InfoParagraph>
 <strong>Type:</strong> Ship
 </InfoParagraph>
 <InfoParagraph>
 <strong>Delivery Method:</strong>
 </InfoParagraph>
 <DeliveryMessage>{shipDeliveryMessage}</DeliveryMessage>
 </TransportInfo>
 ) : (
 <NoTransportMessage>No Ship created yet.</NoTransportMessage>
 )}
 </Section>
 </AppContainer>
 );
};


export default App;
