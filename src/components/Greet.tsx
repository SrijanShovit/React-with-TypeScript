type GreetProps = {
    name: string,
    //optional props
    messageCount?: number,
    isLoggedIn: boolean,
}

export const Greet = (props: GreetProps) => { 
    const {messageCount = 0} = props  //if value is passed in props use it else use this as default value
    return (
        <div>
            <h2>
            {
                props.isLoggedIn ? 
                `Welcome ${props.name} ${messageCount} times`
                : 'Welcome guest'
            }
            </h2>
        </div>
    )
}