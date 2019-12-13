import React from 'react';
import './assets/css/style.css'

//Componets
import Header from './components/Header'
import MainPage_First from './components/Main_First'


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <MainPage_First />
      </main>
    </div>
  );
}

export default App;


