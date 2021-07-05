import './App.css';
import {useState} from 'react'
import Color from './Color';

function App() {
  // an array of hex values 
  const [colors, setColors] = useState([])

  // Create a function to gen a new hex color
  const generateRandom = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16)
  }

  const addColor = () => {
    if (colors.length !== 0) {
      setColors([...colors, generateRandom()])
    } else {
      setColors([generateRandom()])
    }
  }

  const renderColors = () => {
    return colors.map((color, i) => <Color key={i} color={color}/> )
  }

  return (
    <>
      <input id="gen-button" type="button" value="Generate" onClick={addColor}/>
      <input id="clear-button" type="button" value="clear" />
      <div id="colors">
        {renderColors()}
      </div>
    </>
  );
}

export default App;
