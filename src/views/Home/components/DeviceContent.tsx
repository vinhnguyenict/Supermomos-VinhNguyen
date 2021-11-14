import { lazy, Suspense } from 'react'
import MockupPhone from 'components/MockupPhone'

import { DeviceBox } from '../Home.style'
import useGetUserId from '../hooks/useGetUserId'

const UserList = lazy(() => import('./UserList'))
const UserDetail = lazy(() => import('./UserDetail'))

const DeviceContent = () => {
    const userId = useGetUserId()

    return (
        <DeviceBox>
            <MockupPhone>
                <Suspense fallback={<div>Loading...</div>}>
                    {userId ? <UserDetail userId={userId} /> : <UserList />}
                </Suspense>
            </MockupPhone>
        </DeviceBox>
    )
}

export default DeviceContent
