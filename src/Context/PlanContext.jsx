import { createContext, useContext, useReducer } from 'react';

const planContext = createContext();

const initialState = {
  name: '',
  duration: 'mo',
  price: 0,
  totalPrice: 0,
  services: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'selectName': {
      return {
        ...state,
        name: action.payload.name,
        price: action.payload.price,
      };
    }
    case 'changeDuration': {
      return {
        ...state,
        duration: state.duration === 'mo' ? 'yr' : 'mo',
        price: state.duration === 'yr' ? state.price / 10 : state.price * 10,
      };
    }
    case 'addService': {
      return {
        ...state,
        services: [...state.services, action.payload],
        totalPrice: state.totalPrice + action.payload.price,
      };
    }
    case 'removeService': {
      return {
        ...state,
        services: state.services.filter(
          (service) => service.title !== action.payload
        ),
        totalPrice:
          state.services?.reduce((acc, curr) => acc + curr.price, 0) || 0,
      };
    }
    default:
      throw new Error('something went wrong');
  }
}

function PlanProvider({ children }) {
  const [{ name, duration, price, services, totalPrice }, dispatchPlan] =
    useReducer(reducer, initialState);

  return (
    <planContext.Provider
      value={{ name, duration, price, dispatchPlan, services, totalPrice }}
    >
      {children}
    </planContext.Provider>
  );
}

function usePlanContext() {
  const context = useContext(planContext);
  if (context === undefined)
    throw new Error("the plan context shouldn't be used here");

  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { PlanProvider, usePlanContext };
