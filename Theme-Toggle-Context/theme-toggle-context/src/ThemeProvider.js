import React, { useState } from 'react';
import {createContext} from 'react';

const themeContext=createContext();
export default themeContext;

export const ThemeProvider=(props)=>{
   
    const [globalTheme, setGlobalTheme]=useState(true);

    const toggleTheme=()=>{
        if(globalTheme===true){
        setGlobalTheme(false);
        }
        else{
            setGlobalTheme(true);
        }
    }

    return(
        <themeContext.Provider value={{globalTheme,toggleTheme}}>
          {props.children}
        </themeContext.Provider>
    )

}
  