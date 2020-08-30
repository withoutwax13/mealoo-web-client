import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    margin-left: 30px;
`
export const MealTitle = styled.div`
    font-family: Monospace;
    font-size: 20px;
    font-weight: bold;
    margin: 0 auto 10px 30px;
`
export const ImageContainer = styled.div`
    border: 1px solid silver;
    border-radius: 10px;
    width: 300px;
    height: 250px;
    @media (min-width: 481px) and (max-width: 767px) {
        margin: 0 auto;
    }

    @media (min-width: 320px) and (max-width: 480px) {
        margin: 0 auto;
    }
`