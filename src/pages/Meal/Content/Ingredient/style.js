import styled from 'styled-components'

export const Container = styled.div`
    border: 1px solid silver;
    border-radius: 10px;
    padding: 15px;
    @media (min-width: 1281px) {
        display: flex;
        flex-direction: row;
        width: 60vw;
	}

	@media (min-width: 1025px) and (max-width: 1280px) {
        display: flex;
        flex-direction: row;
        width: 60vw;
	}

	@media (min-width: 768px) and (max-width: 1024px) {
        display: flex;
        flex-direction: row;
        width: 60vw;
	}

	@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
        display: flex;
        flex-direction: row;
        width: 60vw;
	}

	@media (min-width: 481px) and (max-width: 767px) {
        display: flex;
        flex-direction: column;
        width: 90vw;
	}

	@media (min-width: 320px) and (max-width: 480px) {
        display: flex;
        flex-direction: column;
        width: 90vw;
    }
    margin: 10px auto;
`
export const SectionTitle = styled.div`
    color: black;
    font-size: 20px;
    font-family: Courier New;
    font-weight: bold;
    margin: 5px;
    @media (min-width: 481px) and (max-width: 767px) {
        margin-bottom: 15px;
    }

    @media (min-width: 320px) and (max-width: 480px) {
        margin-bottom: 15px;
    }
`
export const ProductsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    overflow-x: auto;
`
export const ProductItem = styled.div`
    border-radius: 10px;
    border: 1px solid silver;
    padding: 5px;
    background-color: pink;
    color: gray;
    height: 30px;
    margin: 0 2px;
`
export const ProductLabel = styled.div`
    font-family: Monospace;
    font-size: 16px;
`
export const ProductTooltip = styled.div`
    display: flex;
    flex-direction: column;
    width: 150px;
`