/**
 * Position prop can one of
 * "left-center" | "left-top" | "left-bottom" | "center" | "right-center" | "right-top" | "right-bottom" | "center-top" | "center-bottom" 
 */

type HorizontalPosition = 'left' | 'right' | 'center' 
type VerticalPosition = 'top' | 'bottom' | 'center'

type ToastProps = {
    position : Exclude<`${HorizontalPosition}-${VerticalPosition}`,
    'center-center'
    > | 'center'
}

export const Toast = ({position}:ToastProps) => {
    return <div>Toast Notification Position - {position}</div>;
}