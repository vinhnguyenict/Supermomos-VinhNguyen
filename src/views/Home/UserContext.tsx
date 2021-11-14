import React, { useState } from 'react'
import { IUser } from 'core/types/user.types'

interface IUserContext {
    userId: string | undefined
    selectUser(user?: IUser): void
}

export const UserContext = React.createContext<IUserContext | null>(null)

export const UserContextProvider: React.FC = ({ children }) => {
    const [userId, setUserId] = useState<string | undefined>()

    const selectUser = (user?: IUser) => {
        setUserId(user?.id || undefined)
    }

    const valueContext: IUserContext = {
        userId,
        selectUser,
    }

    return (
        <UserContext.Provider value={valueContext}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext
