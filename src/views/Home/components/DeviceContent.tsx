import { lazy, Suspense } from 'react'
import MockupPhone from 'components/MockupPhone'

import { DeviceBox } from '../Home.style'
import useGetUserId from '../hooks/useGetUserId'

const UserList = lazy(() => import('./UserList'))
const UserDetail = lazy(() => import('./UserDetail'))
const UserFollowers = lazy(() => import('./ListFollowers'))

const DeviceContent = () => {
    const { userId, isShowFollower } = useGetUserId()

    return (
        <DeviceBox>
            <MockupPhone>
                <Suspense fallback={<div>Loading...</div>}>
                    {!userId ? <UserList /> : null}

                    {userId && isShowFollower ? (
                        <UserFollowers userId={userId} />
                    ) : userId ? (
                        <UserDetail userId={userId} />
                    ) : null}
                </Suspense>
            </MockupPhone>
        </DeviceBox>
    )
}

export default DeviceContent
