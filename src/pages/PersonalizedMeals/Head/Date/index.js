import React from 'react'
import styled from 'styled-components'

export default () => {

    let [day, month, dayNum, year] = (new Date).toString().split(' ')

    return (
        <Container>
            <Day>{day.toUpperCase()}</Day>
            <CurrentDate>{`${dayNum} ${month} ${year}`}</CurrentDate>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto 0 30px;
`
const Day = styled.h2`
    color: black;
    font-family: Courier New;
    margin: 0 auto 2px 0;
`
const CurrentDate = styled.h3`
    color: black;
    font-family: Courier New;
    margin: 2px auto 0 0;
`