import './App.css';
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import Test from './components/test/Test';
import Columns from './components/columns/Columns';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Columns/>
    </div>
  );
}

export default App;
