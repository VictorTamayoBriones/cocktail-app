import React, {useState} from "react";

export const DrinksContext = React.createContext();

export const ProviderDrinks = ({children})=>{

    const [drinks, setDrinks]=useState([]);

    return(
        <DrinksContext.Provider value={{drinks, setDrinks}} >
            { children }
        </DrinksContext.Provider>
    )
}