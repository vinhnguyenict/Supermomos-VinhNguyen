import styled from 'styled-components'
import { useQueryUsers } from 'core/queries/user.queries'
import useSelectUser from '../hooks/useSelectUser'

import Text from 'components/Text'
import Box from 'components/Box'
import Avatar from 'components/Avatar'
import React from 'react'

const Header = styled(Box)`
    padding: 5px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border}; ;
`

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

const UserList = () => {
    const selectUser = useSelectUser()

    const { isLoading, data: users } = useQueryUsers()

    return (
        <React.Fragment>
            <Header>
                <Text textAlign="center" fontWeight="bold" fontSize={3}>
                    User list
                </Text>
            </Header>

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
        </React.Fragment>
    )
}
export default UserList
