type RandomNumberType = {
    value:number
}

//this type includes RandomNumberType + ...
type PositiveNumber = RandomNumberType & {
    isPositive: boolean
    //never set isNegative and isZero if isPositive is set as props
    isNegative?: never
    isZero?: never
}

type NegativeNumber = RandomNumberType & {
    isNegative: boolean
    isPositive?:never
    isZero?:never
}

type ZeroNumber = RandomNumberType & {
    isZero: boolean
    isPositive?:never
    isNegative?:never
}


type RandomNumberProps = 
    PositiveNumber | NegativeNumber | ZeroNumber


export const RandomNumber = ({
    value,
    isPositive,
    isNegative,
    isZero,
}: RandomNumberProps) => {
    return (
        <div>
            {value} {isPositive && 'positive'} {isNegative && 'negative'}{' '} 
            {isZero && 'zero'}
        </div>
    )
}