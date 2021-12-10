import styled from 'styled-components'

import Text from 'components/Text'
import Box from 'components/Box'
import Avatar from 'components/Avatar'
import { IUser } from 'core/types/user.types'
import useSelectUser from '../hooks/useSelectUser'

const ListGroup = styled.div`
    display: block;
    max-height: calc(780px - 100px);
    overflow-y: auto;
    padding: 1em;
`

const GroupItem = styled.div`
    display: flex;
    position: relative;
    cursor: pointer;
    padding: 5px 0;
`

const UserMeta = styled.div`
    margin-left: 10px;
`

interface PropsType {
    isLoading: boolean
    users: IUser[] | undefined
}

const ListView = (props: PropsType) => {
    const { isLoading, users } = props

    const selectUser = useSelectUser()

    return (
        <Box>
            {isLoading && (
                <Box>
                    <Text textAlign="center">Loading...</Text>
                </Box>
            )}

            {!isLoading && users?.length && (
                <ListGroup>
                    {users.map((user, index: number) => {
                        return (
                            <GroupItem
                                key={index}
                                onClick={() => selectUser(user)}
                            >
                                <Avatar
                                    height="45px"
                                    src={user.avatar_url}
                                ></Avatar>

                                <UserMeta>
                                    <Text fontSize={3}>{user.login}</Text>
                                    <Text>{user.url}</Text>
                                </UserMeta>
                            </GroupItem>
                        )
                    })}
                </ListGroup>
            )}
        </Box>
    )
}

export default ListView
