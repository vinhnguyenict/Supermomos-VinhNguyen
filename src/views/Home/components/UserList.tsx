import { useQueryUsers } from 'core/queries/user.queries'

import Header from './Header'
import ListView from './ListView'
import React from 'react'

const UserList = () => {
    const { isLoading, data: users } = useQueryUsers()

    return (
        <React.Fragment>
            <Header title="User List" />
            <ListView isLoading={isLoading} users={users} />
        </React.Fragment>
    )
}
export default UserList
