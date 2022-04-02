import './app.scss';
import Header from './components/Header';
import Router from './Routes';

function App() {
  return (
    <div className='app'>
      <Header />
      <Router />
    </div>
  );
}

export default App;
