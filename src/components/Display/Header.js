import React from 'react'
import '../style/Header.css'
const Header = (props) => {
    console.log('INI HEADER PROPS',props)
    const handlerRadioButton = e => {
        props.numberColor(e.target.value)
    }
    return (
        <div className="header-wrapper">
            <h1>Calc</h1>
            <div className="theme-wrapper">
                <h1>Theme</h1>
                {
                    props.changeColor.map((res, idx) => {
                        return (
                            <div key={idx} className="change-color-radio">
                                <input type="radio" name="color" value={res.value} onClick={handlerRadioButton} defaultChecked={res.checked}/>
                            </div>
                        )
                    })
                }    
            </div>
        </div>
    )
}

Header.defaultProps = {
    changeColor: [
        {
            title: 1,
            value: 1,
            checked:true
        },
        {
            title: 2,
            value: 2,
        },
        {
            title: 3,
            value: 3,
        }
    ]
}

export default Header
