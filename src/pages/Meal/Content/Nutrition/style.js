import styled from 'styled-components'

export const Container = styled.div`
    border: 1px solid silver;
    border-radius: 10px;
    width: 300px;
    display: flex;
    flex-direction: column;
    padding: 15px;
`

export const SectionTitle = styled.div`
    margin: 0; padding: 0;
    font-size: 20px;
    color: black;
    font-family: Monospace;
    font-weight: bolder;
    margin: 5px auto;
`

export const NutritionItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 5px 0;
`

export const Label = styled.div`
    font-family: Monospace;
    font-size: 16px;
    font-weight: bold;
    color: ${(props)=>props.color};
`

export const NutritionAmount = styled.div`
    font-family: Monospace;
    font-size: 16px;
    font-weight: bold;
`