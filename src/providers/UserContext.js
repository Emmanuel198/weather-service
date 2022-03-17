import React, { useState } from 'react';

const UserContext = React.createContext();

const UserProvider = (props) => {
    const [user, setUser] = useState({ userName: '', userPassword: '' })

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {props.children}
        </UserContext.Provider>
    )
}
export { UserProvider };
export default UserContext;