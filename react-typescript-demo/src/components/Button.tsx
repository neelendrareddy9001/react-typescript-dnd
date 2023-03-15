import React from 'react'

type ButtonProps = {
    handleClick : (Event : React.MouseEvent<HTMLButtonElement>, id : number) => void
}


export const Button = (props : ButtonProps) => {
    return <button onClick={ (Event) => props.handleClick(Event, 1)}> Click</button>
}