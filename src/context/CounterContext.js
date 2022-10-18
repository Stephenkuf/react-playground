import React, { createContext, useState, useEffect } from "react";
import {counterService} from '../services/counterService'
export const CounterContext = createContext({});

export const CounterContextProvider = ({ children }) => {
  const localStorageThemeValue = localStorage.getItem("counterAppTheme")

  useEffect( () => {
     function fetchData() {
       counterService().then((data) => {
         setGlobalCount(data.globalCountAPI)
         setpage1Count(data.page1Count)
         setpage2Count(data.page2Count)

       }).catch((err)=> console.log("err",err) );
    }
      fetchData()
  }, []);
  
  const [globalCount, setGlobalCount] = useState(() => {
      return 1
  });
  const [page1Count, setpage1Count] = useState(() => {
    return 2
  });
    const [page2Count, setpage2Count] = useState(() => {
      return 3
  });
  
  const [themeType, toggleThemeType] = useState(() => {
    if (localStorageThemeValue) { return localStorageThemeValue }
    return "light";
  })
  function toggleTheme() {
    if (themeType === "light") {
      toggleThemeType((themeType) => themeType = "dark")
      localStorage.setItem('counterAppTheme', "dark");
    }
    else {
      toggleThemeType((themeType) => themeType = "light")
      localStorage.setItem('counterAppTheme', "light");
    }
  }
  function globalIncrement() {
    setGlobalCount((globalCount) => globalCount + 1)
  }
  
  const value = {
    globalCount,
    globalIncrement, 
    themeType, 
    toggleTheme, 
    page1Count, 
    page2Count
  }
  return <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
}