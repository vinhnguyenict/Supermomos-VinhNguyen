import { useContext } from 'react'
import { UserContext } from '../UserContext'

const useGetUserId = () => {
    const context = useContext(UserContext)

    return { userId: context?.userId, isShowFollower: context?.isShowFollower }
}

export default useGetUserId
