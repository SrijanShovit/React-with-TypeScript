type OscarProps = {
    //when React component is passed as props type is React.ReactNode provided by React Types
    children: React.ReactNode
}

export const Oscar = (props: OscarProps) => {
    return <div>{props.children}</div>
}