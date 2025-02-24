import { useContext } from 'react';
import { useReducer } from 'react';
import { createContext } from 'react';

const initialState = {
  name: '',
  emailAddress: '',
  phoneNumber: '',
};

const reducer = function (state, action) {
  switch (action.type) {
    case 'submitInfos': {
      return {
        ...state,
        name: action.payload.name,
        emailAddress: action.payload.emailAddress,
        phoneNumber: action.payload.phoneNumber,
      };
    }
    default:
      throw new Error('something went wrong!');
  }
};

const infoContext = createContext();

function InfoProvider({ children }) {
  const [{ phoneNumber, emailAddress, name }, dispatchInfos] = useReducer(
    reducer,
    initialState
  );

  return (
    <infoContext.Provider
      value={{ phoneNumber, emailAddress, name, dispatchInfos }}
    >
      {children}
    </infoContext.Provider>
  );
}

function useInfosContext() {
  const context = useContext(infoContext);
  if (context === undefined)
    throw new Error("Info Context shouldn't be used here");

  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { InfoProvider, useInfosContext };
