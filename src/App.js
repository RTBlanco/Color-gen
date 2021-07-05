import './App.css';
import {useState, useEffect} from 'react'
import Color from './Color';

function App() {
  // an array of hex values 
  const [colors, setColors] = useState([])

  // Create a function to gen a new hex color
  const generateRandom = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16)
  }

  const addColor = () => {
    setColors(prev => {
      prev.push(generateRandom())
    })
  }

  const renderColors = () => {
    return colors.map((color, i) =>{
      <Color key={i} color={generateRandom}/>
    })
  }

  return (
    <>
      <input type="button" value="Generate" onClick={addColor}/>
      {renderColors()}
    </>
  );
}

export default App;
