import React from 'react';


const getCurrentLoginStatus = () => {
    let currentStatus = (localStorage.loggedIn)
    if(currentStatus === 'true') {
       return true
    } else {
        return false
    }
}
const UserContext = React.createContext({loggedIn: getCurrentLoginStatus()})

export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;

export default UserContext