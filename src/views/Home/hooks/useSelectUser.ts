import { useContext } from 'react'
import { UserContext } from '../UserContext'
import { IUser } from 'core/types/user.types'

const useSelectUser = () => {
    const context = useContext(UserContext)

    const select = (user?: IUser) => {
        if (context?.selectUser) {
            context.selectUser(user)
        }
    }

    return select
}

export const useShowFollower = () => {
    const context = useContext(UserContext)

    const showFollower = (status: boolean) => {
        if (context?.showFollower) {
            context.showFollower(status)
        }
    }

    return showFollower
}

export default useSelectUser
