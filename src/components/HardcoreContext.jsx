// src/context/state.js
import { createContext, useContext, useState } from 'react';
import Cookies from 'js-cookie';

const AppContext = createContext();

export function HardcoreWrapper({ children }) {
  const [hardcore, setHardcore] = useState(false);

  return (
    <AppContext.Provider value={{ hardcore, setHardcore }}>
      {children}
    </AppContext.Provider>
  );
}

export function HardcoreContext() {
  return useContext(AppContext);
}
