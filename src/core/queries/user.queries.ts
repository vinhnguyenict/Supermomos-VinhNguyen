import { useQuery, QueryKey } from 'react-query'

import { IUser } from '../types/user.types'
import { getUsers, getUser } from '../services/user.service'

export const UserQueryKeys = {
    all: ['users'] as const,
    lists: () => [...UserQueryKeys.all, 'list'] as const,
    details: () => [...UserQueryKeys.all, 'detail'] as const,
    detail: (id: string) => [...UserQueryKeys.details(), id] as const,
}

export const useQueryUsers = () => {
    const queryKey: QueryKey = UserQueryKeys.lists()

    return useQuery<IUser[], Error>(queryKey, getUsers)
}

export const useQueryUser = (id: string) => {
    const queryKey: QueryKey = UserQueryKeys.detail(id)
    const queryFn = () => getUser(id)

    return useQuery<IUser, Error>(queryKey, queryFn)
}
