import React, { useState } from 'react';
import './Calculator.css';
import Container from '@mui/material/Container';
import { Box } from "@mui/system"

export default function Calculator() {
        const[num, setNum]= useState(0);
        const[antnum, setAntNum] = useState(0);
        const[operador, setOperador] = useState(0);
    
    function inputNum(e){
       var input=e.target.value;
       if(num===0){
           setNum(input);
       }else{
           setNum(num+input);
       }
    }

    function zerar(){
        setNum(0)
    }

    function porcentagem(){
        setNum(num/100);

    }

    function maismenos(){
        if(num>0){
            setNum(-num)
        }else{
            setNum(Math.abs(num))
        }
    }

    function operacao(e){
        var operar=e.target.value
        console.log(operar);
        setOperador(operar);
        setAntNum(num);
        setNum(0);
    }
    
    function calcular(){
            if (operador=== "/"){
             setNum(parseFloat(antnum) / parseFloat(num));
            }   else if (operador === "X") {
                setNum(parseFloat(antnum) * parseFloat(num));
            }   else if (operador === "-") {
                setNum(parseFloat(antnum) - parseFloat(num));
            }   else if (operador === "+") {
                setNum(parseFloat(antnum) + parseFloat(num));
            }
    }


    return (
    <div>
        <Box m={5}/>
    <Container maxWidth="xs">       
        <div className="fundo">
            <h1 className="resultado">{num}</h1>
            <button className="white" onClick={zerar}>AC</button>
            <button className="white" onClick={maismenos}>+/-</button>
            <button className="white" onClick={porcentagem}>%</button>
            <button className="violet"onClick={operacao} value="/">/</button>
            <button className="white" onClick={inputNum} value={7}>7</button>
            <button className="white" onClick={inputNum} value={8} >8</button>
            <button className="white" onClick={inputNum} value={9}>9</button>
            <button className="violet"onClick={operacao} value="X">X</button>
            <button className="white" onClick={inputNum} value={4}>4</button>
            <button className="white" onClick={inputNum} value={5}>5</button>
            <button className="white" onClick={inputNum} value={6}>6</button>
            <button className="violet"onClick={operacao} value="-">-</button>
            <button className="white" onClick={inputNum} value={1}>1</button>
            <button className="white" onClick={inputNum} value={2}>2</button>
            <button className="white" onClick={inputNum} value={3}>3</button>
            <button className="violet"onClick={operacao} value="+">+</button>
            <button className="white" onClick={inputNum} value={0}>0</button>
            <button className="white" onClick={inputNum} value={"."}>,</button>
            <button className="white" style={{visibility: "hidden"}}>=</button>
            <button className="violet" onClick={calcular}>=</button>
        </div>
    </Container>
    </div>
    )
}