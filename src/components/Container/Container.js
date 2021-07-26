import React from 'react'
import '../style/Container.css'
const Container = (props) => {
    console.log('INI PROPS PADA CONTAINER =>',props)
    const Classes = `wrapper ${props.className}`
    return (
        <div className={Classes}>
            {props.children}
        </div>
    )
}

export default Container
