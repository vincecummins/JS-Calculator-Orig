
const Symbols = ({ symbol, id, setalgo, setDisplay, display, algo, isEquals, setisEquals }) => {
    const updAlgo = () => {

        if (display === 0) {
            return
        }

        if (isEquals) {
            setalgo(display)
            setisEquals(false)
        }

        if (symbol === '-') {
            if (/[+/*]-$/.test(algo)) {
                return
            } else if (/-$/.test(algo)) {
                return
            }
        }

        if (/\D/.test(algo) & symbol != '-') {
            if (/\D-?$/.test(algo)) {
                console.log('y')
                let yy = /\D-?$/
                setalgo(x => x.replace(yy, symbol));
                setDisplay(symbol)
                return
            } else {
                setDisplay(eval(algo))
                setalgo(eval(algo))
            }
        }
        
        setalgo(x => x + symbol)
        setDisplay(symbol)
    }

    return (
        <div>
            <button id={id} onClick={updAlgo} className="btn btn-light p-1 col-4 col-sm">{symbol}</button>
        </div>
    )
}

export default Symbols
