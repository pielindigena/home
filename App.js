import React, { Component } from 'react';
import Header from './components/Header/header';
import About from './components/About/about';
import Gestores from './components/Gestores/gestores';
import Artistas from './components/Artistas/artistas';
import Alianzas from './components/Alianzas/alianzas';
import Evento from './components/Evento/evento';
import Footer from './components/Footer/footer';

class App extends Component {

  render() {

    return (
      <div className="App">
      <Header />
      <About />
      <Gestores />
      <Artistas />
      <Alianzas />
      <Evento />
      <Footer />      
      </div>
    );
  }
}
export default App;