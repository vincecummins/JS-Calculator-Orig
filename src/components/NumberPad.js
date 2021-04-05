import {useEffect} from 'react'

const NumberPad = ({ number, setDisplay, id, display, setalgo, algo, isEquals, setisEquals }) => {
    const handleKeyDown = (e) => {
        if (e.key === JSON.stringify(number)) {
            updDisplay()
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [handleKeyDown])

    const updDisplay = () => {
        const regex = /^\D/;
        const regex2 = /\./;
        const regex3 = /\.\d*\D\d*$/
        console.log(id)
        
        if (display === 0 ) {
            setDisplay('')
        }
        
        if (/\D0$/.test(algo)) {
            return alert('decimal place plz');
        }

        if (number === 0) {
            if (isEquals||display === 0) {
                setDisplay(0)
                return
            }
        }

        if (isEquals) {
            setDisplay('');
            setisEquals(false)
        }

        if (display === '' & (number === 0 || number === '.')) {
            return
        }

        if (number === '.') {
            if (regex.test(display)) {
                return
            }
            if (regex2.test(display)) {
                setDisplay(display)
            } else {
                setDisplay(display + '.')
            }
            if (regex2.test(algo)) {
                if (regex3.test(algo)) {
                    return setalgo(algo + '.')
                }
                setalgo(algo)
            } else {
                setalgo(algo + '.')
            }
            return
        }

        if (regex.test(display)) {
            setDisplay('')
        }

        setDisplay(x => x + JSON.stringify(number));
        setalgo(x => x + number);
    }

    return (
        <>
            <button id={id} onClick={updDisplay} className="btn btn-dark p-1 col-4 col-sm">{number}</button>
        </>
    )
}

export default NumberPad
