//Object Props
type PesonProps = {
    name : {
        first : string
        last : string
    }
}


export const Person = (props : PesonProps) => {
    return (
        <div>
            {props.name.first}  {props.name.last}
        </div>
    )
}