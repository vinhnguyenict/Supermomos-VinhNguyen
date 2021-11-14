import { useContext } from 'react'
import { UserContext } from '../UserContext'

const useGetUserId = (): string | undefined => {
    const context = useContext(UserContext)

    return context?.userId
}

export default useGetUserId
