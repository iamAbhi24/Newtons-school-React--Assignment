import React, { useContext, useEffect, useState } from 'react'
import themeContext from "./ThemeProvider.js";

function Page() {
  return (
    <div>
      <ThemedPage />
    </div>
  )
}

export default Page;

function ThemedPage() {
  const context = useContext(themeContext);
  return (
    <div id="themed-page" className={context.globalTheme === false ? "bg-dark" : "bg-light"}>
      <p id="themed-text-container">Lorem ipsum dolor sit amet </p>
      <LocalThemedBox />
      <GlobalThemeToggler />
    </div>
  )
}

function LocalThemedBox() {
  // eslint-disable-next-line
  const context = useContext(themeContext);
  const [localTheme, setLocalTheme] = useState(true);

  useEffect(() => {
    setLocalTheme(context.globalTheme);
  }, [context.globalTheme])

  function handleClickLocal() {
    if (localTheme) {
      setLocalTheme(false);
    }
    else {
      setLocalTheme(true);
    }
  }

  return (
    <div id="local-themed-box" className={(localTheme === false) ? "local-bg-dark" : "local-bg-light"}>
      <p id="local-themed-text-container">Hii</p>
      <button id="local-theme-toggler" className={localTheme === false ? "btn-dark txt-dark" : "btn-light txt-light"} onClick={handleClickLocal}>{localTheme === false ? "Switch  local theme to light" : "Switch  local theme to dark"}</button>
    </div>
  )
}


function GlobalThemeToggler() {
  const [txt, setTxt] = useState("Switch to dark theme");
  const context = useContext(themeContext);
  function handleClickGlobl() {
    context.toggleTheme();
    if (context.globalTheme === false) {
      setTxt("Switch to dark theme");
      return;
    }
    setTxt("Switch to light theme");
  }

  return (
    <button id="global-theme-toggler" className={context.globalTheme === false ? "btn-dark txt-dark" : "btn-light txt-light"} onClick={handleClickGlobl}>{txt}</button>
  )
}
