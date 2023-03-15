type OscarProps = {
    //This is how we defined children props 
    children : React.ReactNode
}

export const Oscar = (props : OscarProps) => {
    return <div>{props.children}</div>
}