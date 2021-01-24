import React from "react";

// create the context
export const Context = React.createContext<any>(undefined);

// create the context provider, we are using use state to ensure that
// we get reactive values from the context...

export const UIProvider: React.FC = ({ children }) => {

  // the reactive values
  const [showTabs,setShowTabs]=React.useState(true);


  // the store object
  let state = {
    showTabs,
    setShowTabs,
  };

   // wrap the application in the provider with the initialized context
  return <Context.Provider value={state}>{children}</Context.Provider>;

}

export default Context;
