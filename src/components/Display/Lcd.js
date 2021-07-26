import React from 'react'
import '../style/Lcd.css'
const Lcd = (props) => {
    const styled = {
        backgroundColor: props.bgColorChange
    }
    console.log('INI PROPS PADA LCD',props)
    return (
        <div className="display-result" style={styled}>
            <h1>{props.value}</h1>
        </div>
    )
}

Lcd.defaultProps = {
    value: '0',
    bgColorChange: 'rgb(0, 0, 73)'
}

export default Lcd
