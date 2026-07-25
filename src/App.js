// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import { Alert } from './components/Alert';
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setDarkMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null); // Whether dark mode is enabled or not
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setDarkMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    }
    else {
      setDarkMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
      <Router>

        {/*BOO
         <article>
          <h1>My First Component</h1>
          <ol>
          <li>Components: UI Building Blocks</li>
          <li>Defining a Component</li>
          <li>Using a Component</li>
        </ol>
      </article> */}
        {/* Navbar */}
        {/* props pass */}

        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <div className="container" style={{color: mode === 'dark' ? 'white' : '#042743'}}>
          <TextForm heading="Enter the text to analyze below" buttonColor="red" mode={mode} />
      </div> */}
        <Routes>
          <Route exact path="/about" element={
            <div className="container" style={{ color: mode === 'dark' ? 'white' : '#042743' }}>
              <About mode={mode} toggleMode={toggleMode} />
            </div>
          } />
          <Route exact path="/" element={  // Render the TextForm component for the root path,path help to give the exact path to the component
            <div className="container" style={{ color: mode === 'dark' ? 'white' : '#042743' }}>
              <TextForm heading="Enter the text to analyze below" buttonColor="red" mode={mode} />
            </div>
          } />
        </Routes>
        {/* <button class="btn btn-primary" type="button" disabled>
        <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
        <span role="status">Loading...</span>
      </button> */}
      </Router>
    </>
  );
}

export default App;
