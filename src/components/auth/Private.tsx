import {Login} from './Login'
import {ProfileProps} from './Profile'
type PrivateProps = {
    isLoggedIn: boolean,

    //use this for passing component as prop
    Component: React.ComponentType<ProfileProps>
}
export const Private = ({isLoggedIn,Component}:PrivateProps) => {
    if (isLoggedIn) {
        return <Component name="srijan"/>
    }else {
        return <Login/>
    }
}