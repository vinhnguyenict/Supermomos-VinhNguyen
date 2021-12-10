import HttpClient from 'utils/httpClient'
import { IUser } from 'core/types/user.types'

const API = new HttpClient(process.env.REACT_APP_BASE_URL_GITHUB)

export const getUsers = async (): Promise<IUser[]> => {
    return await API.get('/users')
}

export const getUser = async (id: string): Promise<IUser> => {
    return await API.get(`/users/${id}`)
}

export const getFollowers = async (id: string): Promise<IUser[]> => {
    return await API.get(`/users/${id}/followers`)
}
