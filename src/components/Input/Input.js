import React from 'react'
import Container from '../Container/Container'
import '../style/Input.css'

const Input = (props) => {
    // console.log('INI PROPS IPUT',props)
    // const styledBgColors = {
    //     backgroundColor: props.changeBgColorsInput
    // }

    return (
        <Container 
            className="button-number-wrapper" 
        >
            <button name="7" onClick={(e) => props.handlerChangeInput(e.target.name)}>7</button>
            <button name="8" onClick={(e) => props.handlerChangeInput(e.target.name)}>8</button>
            <button name="9" onClick={(e) => props.handlerChangeInput(e.target.name)}>9</button>
            <button className="delete_btn" onClick={(e) => props.handlerChangeInput(e.target.name)} name="delete">DEL</button>
            <button name="4" onClick={(e) => props.handlerChangeInput(e.target.name)}>4</button>
            <button name="5" onClick={(e) => props.handlerChangeInput(e.target.name)}>5</button>
            <button name="6" onClick={(e) => props.handlerChangeInput(e.target.name)}>6</button>
            <button name="+" onClick={(e) => props.handlerChangeInput(e.target.name)}>+</button>
            <button name="1" onClick={(e) => props.handlerChangeInput(e.target.name)}>1</button>
            <button name="2" onClick={(e) => props.handlerChangeInput(e.target.name)}>2</button>
            <button name="3" onClick={(e) => props.handlerChangeInput(e.target.name)}>3</button>
            <button name="-" onClick={(e) => props.handlerChangeInput(e.target.name)}>-</button>
            <button name="." onClick={(e) => props.handlerChangeInput(e.target.name)}>.</button>
            <button name="0" onClick={(e) => props.handlerChangeInput(e.target.name)}>0</button>
            <button name="/" onClick={(e) => props.handlerChangeInput(e.target.name)}>/</button>
            <button name="*" onClick={(e) => props.handlerChangeInput(e.target.name)}>X</button>
            <div className="result-button-wrapper">
            <button className="reset_btn" name="reset" onClick={(e) => props.handlerChangeInput(e.target.name)}>RESET</button>
            <button className="equals_btn" name="equal" onClick={(e) => props.handlerChangeInput(e.target.name)}>=</button>
            </div>
        </Container>
    )
}

Input.propsDefault = {
    changeBgColorsInput: 'rgb(0, 0, 73)'
}

export default Input
