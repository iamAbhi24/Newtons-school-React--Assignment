import React, { useContext, useEffect, useState } from 'react'
import themeContext from "./ThemeProvider.js";

function Page() {
  return (
    <div>
      <ThemedPage/>
    </div>
  )
}

export default Page;

function ThemedPage(){
  const context=useContext(themeContext);
    return(
    <div id="themed-page" className={context.globalTheme==="dark"?"bg-dark":"bg-light"}>
     <p id="themed-text-container">Lorem ipsum dolor sit amet </p>
     <LocalThemedBox/>
     <GlobalThemeToggler/>
    </div>
    )
}

function LocalThemedBox(){
  // eslint-disable-next-line
  const context=useContext(themeContext);
  const [light,setLight]=useState(true);
  const [txt,setTxt]=useState("Switch  local theme to dark");
  useEffect(()=>{
     if(context.globalTheme==='dark'){
      setLight(true);
      setTxt("Switch  local theme to light");
     }
     else{
      setLight(false);
      setTxt("Switch  local theme to dark");
     }
  },[context.globalTheme])

  function handleClickLocal(){
     if(light){
      setLight(false);
      setTxt("Switch  local theme to light");
     }
     else{
      setLight(true);
      setTxt("Switch  local theme to dark");
     }
  }
    return(
    <div id="local-themed-box" className={(light||context.globalTheme==='dark')?"local-bg-dark":"local-bg-light"}>
     <p id="local-themed-text-container">Hii</p>
     <button id="local-theme-toggler" onClick={handleClickLocal}>{txt}</button>
    </div>
    )
}

function GlobalThemeToggler(){
  const [txt,setTxt]=useState("Switch to dark theme");
  const context=useContext(themeContext);
  function handleClickGlobl(){
    context.toggleTheme();
    if(context.globalTheme==='dark'){
       setTxt("Switch to dark theme");
       return;
    }
    setTxt("Switch to light theme");
  }

    return(
      <button id="global-theme-toggler" className={context.globalTheme==='dark'?"btn-dark txt-dark":"btn-light txt-light"} onClick={handleClickGlobl}>{txt}</button>
    )
}
