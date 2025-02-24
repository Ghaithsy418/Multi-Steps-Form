import { createContext, useContext, useState } from 'react';

const stepsContext = createContext();

const StepsProvider = function ({ children }) {
  const [steps, setSteps] = useState(0);

  return (
    <stepsContext.Provider value={{ steps, setSteps }}>
      {children}
    </stepsContext.Provider>
  );
};

function useStepsContext() {
  const context = useContext(stepsContext);
  if (context === undefined)
    throw new Error("steps context shouldn't be used here");

  return context;
}

export { StepsProvider, useStepsContext };
