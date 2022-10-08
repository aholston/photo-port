import './App.css';
import './components/About';
import About from './components/About';
import Navigation from './components/Navigation';
import Gallery from "./components/Gallery";
import React, { useState } from 'react';

function App() {
  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Navigation 
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />
      <main>
        <Gallery 
          currentCategory={currentCategory}
        />
        <About />
      </main>
    </div>
  );
}

export default App;
