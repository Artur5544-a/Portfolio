import './App.css';
// import { Header } from './components/Header/Header';
import { HeaderMain } from './components/Header/HeaderMain/HeaderMain';
import { About } from './components/Main/About/About';
import { Contact } from './components/Main/Contact/Contact';
import { Portfolio } from './components/Main/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <HeaderMain />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
