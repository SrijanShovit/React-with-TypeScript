type ListProps<T> = {
    items: T[]
    onClick: (value:T) => void
}

//empty object means all types possible
//if instead of {} we specify any types then T would be restricted to those types
export const List = <T extends {}>({items,onClick}:ListProps<T>) =>{
    return (
        <div>
            <h2>List of items</h2>
            {items.map((item,index) =>{
                return (<div key={index} onClick={()=> onClick(item)}>
                    {item}
                </div>
                )
            })}
        </div>
    )
}