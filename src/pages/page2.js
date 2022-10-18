import React , {useContext, useEffect, useState} from 'react';
import Button from '../components/Button'
import PageHeader from '../components/pageHeader'
import { Link } from 'react-router-dom'
import {CounterContext} from '../context/CounterContext'

function SecondCounter() {
  const { globalCount, globalIncrement, page2Count} = useContext(CounterContext)

  useEffect(() => {
      setLocalCount(page2Count)
  }, [page2Count])


  const [localCount, setLocalCount] = useState(() => {
    if (page2Count) {return page2Count}
    return 3
  });

  function localIncrement() {
     setLocalCount((localCount) => localCount  + 1)
  }

  return <div>
    <PageHeader number="2"/>
    <Button name='Button 1' onClick={() => globalIncrement()} />
    <h2>{globalCount}</h2>

    <Button name='Button 2' onClick={() => localIncrement()}/>
    <h2>{localCount}</h2>

    <h4>
        <Link className='nav-link'  to='/'>Back to Page1</Link>
    </h4>

    <h4>
      <Link className='nav-link' to={`/page3/2/${localCount}`}>View Counter</Link>
    </h4>
  </div>
}

export default SecondCounter;