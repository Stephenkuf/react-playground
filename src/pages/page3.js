import React from 'react';
import PageHeader from '../components/pageHeader'
import { useHistory, useParams } from "react-router-dom";

function FirstCounter() {
  const {page, pageLocalCount} = useParams()
  let history = useHistory()

  return <div>
    <PageHeader number="3"/>
    <h4>
        <button  className='back-button' onClick={()=>history.goBack()}> &#8592; Go Back </button>
    </h4>
    <h4>Value of <span className='pageChecker'> Page {page} </span> counter is </h4>
    <div className='counter-box' >
        {pageLocalCount}
    </div>
  </div>
}

export default FirstCounter;