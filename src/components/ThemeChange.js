import React, { useContext }  from "react";
import {CounterContext} from '../context/CounterContext'

function ThemeChange(props) {
    const { themeType, toggleTheme} = useContext(CounterContext)

    let themeButtonChecked = themeType === "dark" ? true : false

  return <div className="theme-changer">
    <input onChange={() => toggleTheme()} type="checkbox"  checked={themeButtonChecked? 'checked':''}  className="theme-checkbox" id="theme" name="fav_language" value={themeType}/>
    <label className="theme-change-label" for="theme"> {themeType}</label>
      <br/>
  </div>
}

export default ThemeChange
