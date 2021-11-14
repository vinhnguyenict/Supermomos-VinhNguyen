import React from 'react'
import styled from 'styled-components'
import { useQueryUser } from 'core/queries/user.queries'
import useSelectUser from '../hooks/useSelectUser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import Box from 'components/Box'
import Flex from 'components/Flex'
import Text from 'components/Text'
import Avatar from 'components/Avatar'

const Header = styled(Box)`
    position: relative;
    background-image: url('/images/user-background.jpeg');
    height: 200px;
    padding-top: 30px;
    text-align: center;
    color: #fff;
`

const Content = styled(Box)`
    padding: 10px;
    color: ${({ theme }) => theme.colors.blue};
`

const Back = styled.button`
    position: absolute;
    left: 10px;
    top: 30px;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
`

const AvatarBox = styled.div`
    position: absolute;
    bottom: -20px;
    width: 100%;
    text-align: center;
`

const UserMeta = styled(Box)`
    text-align: center;
    margin-top: 30px;
`

const InfoBox = styled(Flex)`
    margin: 20px 0;
    padding: 20px 0;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

type IProps = {
    userId: string
}

const UserDetail = ({ userId }: IProps) => {
    const reset = useSelectUser()

    const { data: user, isLoading } = useQueryUser(userId)

    const goBack = () => {
        reset()
    }

    if (isLoading) {
        return (
            <Box>
                <Text textAlign="center">Loading...</Text>
            </Box>
        )
    }

    if (!user) {
        return (
            <Box>
                <Text textAlign="center">User not found</Text>
            </Box>
        )
    }

    return (
        <React.Fragment>
            <Header>
                <Back onClick={goBack}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </Back>
                <Text fontSize={3}>Profile</Text>
                <AvatarBox>
                    <Avatar height="80px" src={user.avatar_url} />
                </AvatarBox>
            </Header>

            <Content>
                <UserMeta>
                    <Text fontSize={5}>{user.name || user.type}</Text>
                    <Text fontSize={1}>{user.url}</Text>
                </UserMeta>
                <InfoBox justifyContent="center">
                    <Box width="30%">
                        <Text textAlign="center" fontSize={3} fontWeight="bold">
                            {user.followers}
                        </Text>
                        <Text textAlign="center">Followers</Text>
                    </Box>
                    <Box width="30%">
                        <Text textAlign="center" fontSize={3} fontWeight="bold">
                            {user.following}
                        </Text>
                        <Text textAlign="center">Following</Text>
                    </Box>
                    <Box width="30%">
                        <Text textAlign="center" fontSize={3} fontWeight="bold">
                            {user.public_repos}
                        </Text>
                        <Text textAlign="center">Repos</Text>
                    </Box>
                </InfoBox>

                <Text fontSize={2}>Bio</Text>
                <Box
                    color="black"
                    dangerouslySetInnerHTML={{ __html: user.bio || '' }}
                ></Box>
            </Content>
        </React.Fragment>
    )
}

export default UserDetail
