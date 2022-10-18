import './App.css';
import Layout from './pages/layout'
import {CounterContextProvider}  from './context/CounterContext'

function App() {
  return (
    <div className="App">
          <CounterContextProvider>
            <Layout />
        </CounterContextProvider>
      </div>
  );
}

export default App;
