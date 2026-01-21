import "./calculadora.css"
import React, {useState} from "react"

function Calculadora() {
    const [calculo, setCalculo] = useState(0)
    const [numeroAntigo, setNumeroAntigo] = useState(0)
    const [operador, setOperador] = useState()

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
    function porcentagem() {
        setCalculo(calculo/100)
    }
    function mudarSinal() {
        if(calculo > 0){
            setCalculo(-calculo)
        }else if(calculo < 0){
            setCalculo(Math.abs(calculo))
        }
    }
    function pegarOperador(event) {
        let inputOperador = event.target.value
        setOperador(inputOperador)
        setNumeroAntigo(calculo)
        setCalculo(0)
    }
    function calcular() {
        if(operador === "/"){
            setCalculo(parseFloat(numeroAntigo) / parseFloat(calculo))
        }
        else if(operador === "+"){
            setCalculo(parseFloat(numeroAntigo) + parseFloat(calculo))
        }
        else if(operador === "-"){
            setCalculo(parseFloat(numeroAntigo) - parseFloat(calculo))
        }
        else if(operador === "X"){
            setCalculo(parseFloat(numeroAntigo) * parseFloat(calculo))
        }
    }

    return(
        <>
        <h1 id="titulo-principal">Calculadora</h1>
        <div className="container-principal">
            <div className="resultado">
                <h1>{calculo}</h1>
            </div>

            <div className="grupo-botoes">
                <div className="grupo-4">
                    <button onClick={limpar} className="branco">AC</button>
                    <button onClick={mudarSinal} className="branco">+/-</button>
                    <button onClick={porcentagem} className="branco">%</button>
                    <button onClick={pegarOperador} className="laranja" value={"/"}>/</button>
                </div>
                <div className="grupo-4">
                    <button onClick={inputNumero} value={7}>7</button>
                    <button onClick={inputNumero} value={8}>8</button>
                    <button onClick={inputNumero} value={9}>9</button>
                    <button onClick={pegarOperador} className="laranja" value={"X"}>X</button>
                </div>
                <div className="grupo-4">
                    <button onClick={inputNumero} value={4}>4</button>
                    <button onClick={inputNumero} value={5}>5</button>
                    <button onClick={inputNumero} value={6}>6</button>
                    <button onClick={pegarOperador} className="laranja" value={"-"}>-</button>
                </div>
                <div className="grupo-4">
                    <button onClick={inputNumero} value={1}>1</button>
                    <button onClick={inputNumero} value={2}>2</button>
                    <button onClick={inputNumero} value={3}>3</button>
                    <button onClick={pegarOperador} className="laranja" value={"+"}>+</button>
                </div>
                <div className="grupo-4">
                    <button onClick={inputNumero} value={0} className="zero">0</button>
                    <button onClick={inputNumero} value={"."}>,</button>
                    <button onClick={calcular} className="branco">=</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Calculadora