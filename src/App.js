import './App.css';
import { BrowserRouter  } from 'react-router-dom';
import PublicRoute from './pages/public/PublicRoute';

function App() {
  return (
    <div className="App">   

      <BrowserRouter>
        <PublicRoute/>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
