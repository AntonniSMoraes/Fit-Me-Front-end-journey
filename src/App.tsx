import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { get_restaurant } from './API';

function App() {
  const [test, setTest] = useState();

  const teste = async () => {
    const response = await get_restaurant;
    console.log(response)
    setTest(response);
  }

  useEffect(()=>{
    teste();
  },[])

  console.log(test)

  return (
    <div className="App">

    </div>
  );
}

export default App;
