import React from 'react'

import Date from './Date/index'
import Profile from './Profile/index'

import {
    Container
} from './style'

const Head = () => {
    return (
        <Container>
            <Date/>
            <Profile/>
        </Container>
    )
}

export default Head