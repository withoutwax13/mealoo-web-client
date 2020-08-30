import React from 'react'
import styled from 'styled-components'

import ProfileImage from '../../../../assets/Meal/profile.svg'

export default () => {
    return (
        <Container>
            <ProfileImage/>
        </Container>
    )
}

const Container = styled.div`
    margin: 0 30px 0 auto;
`