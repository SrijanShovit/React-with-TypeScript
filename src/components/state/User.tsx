import { useState } from "react";

type AuthUser = {
    name : string
    email : string
}

export const User = () => {
    //explicitily specify type in useState hook
    const [user,setUser] = useState<AuthUser | null>(null)
    const handleLogin = () => {
        setUser({
            name: 'Vishwas',
            email: 'vishwas@ex.com'
        })
    }

    const handleLogout = () => {
        setUser(null)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div>
        </div>
    )
}