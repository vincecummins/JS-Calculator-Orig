import './App.css';
import { useState } from 'react'
import NumberPad from './components/NumberPad'
import Symbols from './components/Symbols'
import { Col, Row, Container } from 'react-bootstrap'
/*import { Provider } from 'react-redux';
import store from './store' */

const numbers = [
  {
    number: 1,
    letters: 'one'
  },
  {
    number: 2,
    letters: 'two'
  },
  {
    number: 3,
    letters: 'three'
  },
  {
    number: 4,
    letters: 'four'
  },
  {
    number: 5,
    letters: 'five'
  },
  {
    number: 6,
    letters: 'six'
  },
  {
    number: 7,
    letters: 'seven'
  },
  {
    number: 8,
    letters: 'eight'
  },
  {
    number: 9,
    letters: 'nine'
  },
  {
    number: 0,
    letters: 'zero'
  },
  {
    number: '.',
    letters: 'decimal'
  },
]

const mathSymbols = [
  {
    symbol: '+',
    letters: 'add',
  },
  {
    symbol: '-',
    letters: 'subtract',
  },
  {
    symbol: '/',
    letters: 'divide',
  },
  {
    symbol: '*',
    letters: 'multiply',
  }
]

function App() {
  const [display, setDisplay] = useState(0)
  const [algo, setalgo] = useState('')
  const [isEquals, setisEquals] = useState(false)

  const equals = () => {
    if (/\D$/.test(algo)) {
      return alert('Enter a number')
    }
    if (display === 0) {
      return 
    }
    setisEquals(true)
    setDisplay(eval(algo));
    setalgo('')
    console.log(display)
  }

  return (
    <div className="bg-secondary min-vh-100 text-white text-center">
      <Container>
        <Row>
          <Col className="pt-4 w-50 col-10">
            {numbers.map(x => <NumberPad number={x.number} key = {x.letters} id={x.letters} isEquals={isEquals} setisEquals={setisEquals} setDisplay={setDisplay} setalgo={setalgo} display={display} algo={algo}/>
            )}
          </Col>
          <Col className="pt-4 w-50 col-4">
            {mathSymbols.map(x => <Symbols isEquals={isEquals} key = {x.letters} id={x.letters} setisEquals={setisEquals} symbol={x.symbol} setalgo={setalgo} setDisplay={setDisplay} display={display} algo={algo} />
            )}
          </Col>
        </Row>
      </Container>
      <p id="display">{display}</p>
      <p style={{fontSize: '0.8em', color:'orange'}}>{algo}</p>
      <div className=" d-flex justify-content-center">
        <button id="clear" className="btn btn-danger mx-3" onClick={() => { setDisplay(0); setalgo('') }}>AC</button>
        <button id='equals' className="btn btn-primary mx-3" onClick={equals}>=</button>
      </div>
    </div>
  );
}

export default App;
