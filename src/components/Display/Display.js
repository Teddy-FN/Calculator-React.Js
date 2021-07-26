import React, {useState} from 'react'
import Header from './Header'
import Lcd from './Lcd'
import '../style/Display.css'
const Display = (props) => {
    console.log('INI PROPS DISPLAY =>',props)
    // background-color: rgb(0, 0, 73);
    const [
        colorBg, setColorBg
    ] = useState()
    
    const handlerButton = (colors) => {
        let bgColors = 'rgb(0, 0, 73)'
        if (colors === '1') {
            bgColors = 'rgb(0, 0, 73)'
            setColorBg(bgColors)
        }
        else if (colors === '2') {
            bgColors = 'orange'
            setColorBg(bgColors)
        }
        else {
            console.log('NOMOR 3')
            bgColors = 'skyBlue'
            setColorBg(bgColors)
        }
        props.handleChangeBgInput(bgColors)
    }

    return (
        <div className="display-wrapper">
            <Header numberColor={handlerButton} />
            <Lcd 
                bgColorChange={colorBg} 
                value={props.handlerResultValue}
            />
        </div>
    )
}

export default Display
