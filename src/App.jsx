import { useState } from 'react'
import './App.css'
import QuotesBox from './components/QuotesBox'
import quotes from './json/quotes.json'
import color from './json/color.json'

function App() {

const randomArray = arr => {
  const indexRandom = Math.floor(arr.length * Math.random())
  return arr [indexRandom]
}

const [quoteRandom, setQuoteRandom] = useState(randomArray(quotes))
const [colorRandom, setcolorRandom] = useState(randomArray(color))

const click = () => {
  setQuoteRandom(randomArray(quotes))
  setcolorRandom(randomArray(color))
}

const objStyle={
backgroundColor: colorRandom
}

  return (
    <div className="App" style={objStyle}>
      <QuotesBox 
      quoteRandom={quoteRandom}
      click={click}
      colorRandom={colorRandom}
      
      />
    </div>
  )
}

export default App
