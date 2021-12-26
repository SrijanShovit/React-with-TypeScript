type GreetProps = {
    name: string,
    messageCount: number,
    isLoggedIn: boolean,
}

export const Greet = (props: GreetProps) => { 
    return (
        <div>
            <h2>
            {
                props.isLoggedIn ? 
                `Welcome ${props.name} ${props.messageCount} times`
                : 'Welcome guest'
            }
            </h2>
        </div>
    )
}