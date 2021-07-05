import './App.css';
import {useState, useEffect} from 'react'
import Color from './Color';

function App() {
  // const [state, setState] = useState({color: "#ffffff"})

  // Create a function to gen a new hex color
  // useEffect(() => {
  //   let timer = setInterval(() => {
  //     if (state.color === "#ffffff") {
  //       setState({
  //         color: "#ff5733"
  //       })
  //     } else {
  //       setState({
  //         color: "#ffffff"
  //       })
  //     }
  //   }, 1000)
  //   return () => clearInterval(timer)
  // })
  
  return (
    <Color color={"#ffffff"} />
  );
}

export default App;
