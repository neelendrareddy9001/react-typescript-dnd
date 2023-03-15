//this how we defined props in Typescript
type GreetProps = {
    name : string
    //String Type
    //This is how we specifying Optional props to Type with {Qustion Mark Symbol}
    messageCount? : number
    //Number Type
    isLoggedIn : boolean
    //Boolean Type
    
}

// export const Greet = (props : GreetProps) => {
//     return (
//         <div>
//             <h2>Welcome {props.name}! you have {props.messageCount}  unread messages.</h2>
//         </div>
//     )
//     // Use Types when building applications.
//     // Use Interfaces when building libraries.

// }


//For boolean Type
export const Greet = (props : GreetProps) => {
    //default vaue of Props MessageCount
    const {messageCount = 0} = props
    return (
        <div>
            <h2>
                {
                    props.isLoggedIn 
                    ? `Welcome ${props.name}! You have ${messageCount} unread message`
                    : 'Welcome Guest'
                }
            </h2>
        </div>
    )
}


