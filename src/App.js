import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { HeaderMain } from './components/Header/HeaderMain/HeaderMain';
import { About } from './components/Main/About/About';
import { Contact } from './components/Main/Contact/Contact';
import { Main } from './components/Main/Main';
import { Portfolio } from './components/Main/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HeaderMain />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
