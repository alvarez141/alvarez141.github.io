// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App';

// ReactDOM.render(<App />, document.getElementById('app'));


import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from './routes/App';


const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);