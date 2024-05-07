import React, { useState } from 'react';
import {createContext} from 'react';

const themeContext=createContext();
export default themeContext;

export const ThemeProvider=(props)=>{
   
    const [globalTheme, setGlobalTheme]=useState("light");

    const toggleTheme=()=>{
        if(globalTheme==="light"){
        setGlobalTheme("dark");
        }
        else{
            setGlobalTheme("light");
        }
    }

    return(
        <themeContext.Provider value={{globalTheme,toggleTheme}}>
          {props.children}
        </themeContext.Provider>
    )

}
  