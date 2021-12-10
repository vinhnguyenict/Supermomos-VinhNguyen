import React, { useState } from 'react'
import { IUser } from 'core/types/user.types'

interface IUserContext {
    userId: string | undefined
    isShowFollower: boolean
    selectUser(user?: IUser): void
    showFollower(status: boolean): void
}

export const UserContext = React.createContext<IUserContext | null>(null)

export const UserContextProvider: React.FC = ({ children }) => {
    const [userId, setUserId] = useState<string | undefined>()
    const [isShowFollower, setIsShowFollower] = useState(false)

    const selectUser = (user?: IUser) => {
        setUserId(user?.id || undefined)
    }

    const showFollower = (status: boolean) => {
        setIsShowFollower(!!status)
    }

    const valueContext: IUserContext = {
        userId,
        isShowFollower,
        selectUser,
        showFollower,
    }

    return (
        <UserContext.Provider value={valueContext}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext
