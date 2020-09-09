import React from 'react'
import styled from 'styled-components'

import History from '../../../../utils/History'

import ProfileImage from '../../../../assets/Meal/profile.svg'

export default () => {
    return (
        <Container>
            <ProfileImage onClick={()=>History.push('/user')}/>
        </Container>
    )
}

const Container = styled.div`
    margin: 0 30px 0 auto;
    cursor: pointer;
`