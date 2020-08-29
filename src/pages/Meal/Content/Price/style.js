import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid silver;
    border-radius: 10px;
    padding: 15px;
    @media (min-width: 1281px) {
		width: 35vw;
	}

	@media (min-width: 1025px) and (max-width: 1280px) {
		width: 35vw;
	}

	@media (min-width: 768px) and (max-width: 1024px) {
		width: 35vw;
	}

	@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
		width: 35vw;
	}

	@media (min-width: 481px) and (max-width: 767px) {
		width: 90vw;
	}

	@media (min-width: 320px) and (max-width: 480px) {
		width: 90vw;
	}
	margin: 10px auto;
`

export const SectionTitle = styled.h3`
    font-family: Monospace;
    margin: 15px auto;
`

export const ProductItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 5px 0;
`
export const Label = styled.div`
    font-family: Monospace;
    font-size: 16px;
    font-weight: bold;
`
export const PriceLabel = styled.div`
    font-family: Monospace;
    font-size: 16px;
    font-weight: ${(props)=>props.total === true ? `bold` : `normal`};
`