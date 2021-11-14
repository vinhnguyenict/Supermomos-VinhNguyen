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

export default useSelectUser
