import logo from './logo.svg';
import './App.css';
import Index from './Components/index.js'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>

<Routes>
            <Route path="/" element={<Index />} />
            
</Routes>
    </>
  );
}

export default App;
