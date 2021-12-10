import React from 'react'
import { useQueryUserFollowers } from 'core/queries/user.queries'

import Header from './Header'
import ListView from './ListView'

interface PropsTypes {
    userId: string
}
const ListFollowers = (props: PropsTypes) => {
    const { userId } = props
    const { isLoading, data: users } = useQueryUserFollowers(userId)

    return (
        <React.Fragment>
            <Header title="User Followers" />
            <ListView isLoading={isLoading} users={users} />
        </React.Fragment>
    )
}
export default ListFollowers
