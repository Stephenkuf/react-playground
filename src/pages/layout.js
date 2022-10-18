import React, { useContext }  from "react";
import '../App.css';
import FirstCounter from './page1'
import SecondCounter from './page2'
import PageCounter from './page3'
import { CounterContext}  from '../context/CounterContext'

import { BrowserRouter  as Router  , Route , Switch } from  'react-router-dom'
function Layout() {
  const { themeType} = useContext(CounterContext)

  return (
    <Router>
      <div className="App">
        <header className={`App-header
        ${themeType === "light" ? "light-theme" : 'dark-theme'}`}>
          <h1>
            Counter App
          </h1>
          <Switch>
              <Route exact path='/'>
                  <FirstCounter/>
              </Route>
              <Route path='/page2'>
                  <SecondCounter/>
              </Route>
              <Route path='/page3/:page/:pageLocalCount'>
                  <PageCounter/>
              </Route>
          </Switch>
        
        </header>
      </div>
    </Router>
  );
}

export default Layout;
