import React , {useContext, useState, useEffect} from 'react';
import Button from '../components/Button'
import PageHeader from '../components/pageHeader'
import { Link } from 'react-router-dom'
import { CounterContext } from '../context/CounterContext'
// import counterAPIData from '../plugins/counterAPIData'
function FirstCounter() {
  const { globalCount, globalIncrement, page1Count } = useContext(CounterContext)
  

  useEffect(() => {
      setLocalCount(page1Count)
  }, [page1Count])

  const [localCount, setLocalCount] = useState(() => {
    if (page1Count != null ) {return page1Count}
    return 2
  });

  function localIncrement() {
     setLocalCount((localCount) => localCount  + 1)
  }

  return <div>
    <PageHeader number="1"/>
    <Button name='Button 1' onClick={() => globalIncrement()} />
    <h2>{globalCount}</h2>

    <Button name='Button 2' onClick={() => localIncrement()}/>
    <h2>{ localCount }</h2>

    <h4>
        <Link className='nav-link' to='/page2'>Link to Page2</Link>
    </h4>

    <h4>
      <Link className='nav-link' to={`/page3/1/${localCount}`}>View Counter </Link>
    </h4>
  </div>
}

export default FirstCounter;