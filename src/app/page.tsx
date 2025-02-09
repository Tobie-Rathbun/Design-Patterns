// app/page.tsx
'use client'; // This indicates that this component is a client component

import React from 'react';
import App from './components/App'; // Ensure the path is correct

const Page: React.FC = () => {
    return <App />; // Render the App component directly
};

export default Page; // This should be the default export
