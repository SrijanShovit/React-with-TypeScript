type StatusProps = {
    //union of string literals as type
    status: 'loading' | 'success' | 'error'
}

export const Status = (props: StatusProps) => {
    let message
    if (props.status === 'loading'){
        message = 'Loading...'
    }else if (props.status === 'success'){
        message = 'Successfully fetched data'
    }else if (props.status === 'error'){
        message = 'Error fetching data'
    }
    return (
        <div>
            <h2>Status - {message}</h2>
        </div>
    )
}