import './App.css';
import {useState, useEffect} from 'react'

function App() {
  const [state, setState] = useState({color: "#ffffff"})

  // Create a function to gen a new hex color
  useEffect(() => {
    let timer = setInterval(() => {
      if (state.color === "#ffffff") {
        setState({
          color: "#ff5733"
        })
      } else {
        setState({
          color: "#ffffff"
        })
      }
    }, 1000)
    return () => clearInterval(timer)
  })
  
  return (
    <div className="App" style={{background: state.color}}>
      <h1>Color: {state.color}</h1>
    </div>
  );
}

export default App;
