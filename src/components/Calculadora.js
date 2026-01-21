import "./calculadora.css"
import React, {useState} from "react"

function Calculadora() {
    const [calculo, setCalculo] = useState(0)

    function inputNumero(event) {
        let numeroClicado = event.target.value
        
        if(calculo === 0){
            setCalculo(numeroClicado)
        }else{
            setCalculo(calculo + numeroClicado)
        }
    }
    function limpar() {
        setCalculo(0)
    }

    return(
        <div className="container-principal">
            <div className="resultado">
                <h1>{calculo}</h1>
            </div>

            <div className="grupo-botoes">
                <div className="grupo-4">
                    <button onClick={limpar} className="branco">AC</button>
                    <button onClick={inputNumero} className="branco">+/-</button>
                    <button onClick={inputNumero} className="branco">%</button>
                    <button onClick={inputNumero} className="laranja">/</button>
                </div>
                <div className="grupo-4">
                    <button onClick={inputNumero} value={7}>7</button>
                    <button onClick={inputNumero} value={8}>8</button>
                    <button onClick={inputNumero} value={9}>9</button>
                    <button onClick={inputNumero} className="laranja">X</button>
                </div>
                <div className="grupo-4">
                    <button onClick={inputNumero} value={4}>4</button>
                    <button onClick={inputNumero} value={5}>5</button>
                    <button onClick={inputNumero} value={6}>6</button>
                    <button onClick={inputNumero} className="laranja">-</button>
                </div>
                <div className="grupo-4">
                    <button onClick={inputNumero} value={1}>1</button>
                    <button onClick={inputNumero} value={2}>2</button>
                    <button onClick={inputNumero} value={3}>3</button>
                    <button onClick={inputNumero} className="laranja">+</button>
                </div>
                <div className="grupo-4">
                    <button onClick={inputNumero} value={0} className="zero">0</button>
                    <button onClick={inputNumero}>,</button>
                    <button onClick={inputNumero} className="branco">=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculadora