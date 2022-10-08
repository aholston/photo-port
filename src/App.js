import './App.css';
import './components/About';
import About from './components/About';
import Navigation from './components/Navigation';

function App() {
  return (
    <div>
      <Navigation />
      <main>
        <About />
      </main>
    </div>
  );
}

export default App;
