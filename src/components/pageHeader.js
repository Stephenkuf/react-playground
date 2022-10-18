import React from "react";
import ThemeChange from '../components/ThemeChange'

function PageHeader(props) {
  return <div className="row">
        <div className="column" >
        <h2>
            Page {props.number}
          </h2>
        </div>
        <div className="column">
          <ThemeChange />
        </div>
    </div>
}

export default PageHeader 