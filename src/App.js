import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Firstpage from './pages/Firstpage';
import Secondpage from './pages/Secondpage';
import Thirdpage from './pages/Thirdpage';
import Fourthpage from './pages/Fourthpage'
import Fifthpage from './pages/Fifthpage';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar/>
        <Firstpage/>
        <Secondpage/>
        <Thirdpage/>
        <Fourthpage/>
        <Fifthpage/>
      </div>
    </div>
  );
}

export default App;
