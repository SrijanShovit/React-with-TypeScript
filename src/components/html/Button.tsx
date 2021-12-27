type ButtonProps = {
    variant : 'primary' | 'secondary'
    children: string
} & Omit<React.ComponentProps<'button'>,'children'>

//to omit children's React.Node type and use only string

export const CustomButton = ({variant,children,...rest}:ButtonProps) => {
    return <button className={`class-with-${variant}`} {...rest}>{children} Label</button>
}