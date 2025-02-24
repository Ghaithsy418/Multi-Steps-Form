import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { InfoProvider } from './Context/InfosContext.jsx';
import { StepsProvider } from './Context/StepsContext.jsx';
import { PlanProvider } from './Context/PlanContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StepsProvider>
      <InfoProvider>
        <PlanProvider>
          <App />
        </PlanProvider>
      </InfoProvider>
    </StepsProvider>
  </StrictMode>
);
