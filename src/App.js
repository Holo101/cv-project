import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Educational from './Components/Educational/Educational';
import Experience from './Components/practical_experience/Experience';
import Header from './Components/Header/Header';

function App() {
  return (

    <div className="App">
      <Header />
      <Navbar />
      <Educational />
      <Experience />
    </div>
  );
}

export default App;
