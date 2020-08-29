import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid silver;
    border-radius: 10px;
    padding: 15px;
    @media (min-width: 1281px) {
        width: 60vw;
	}

	@media (min-width: 1025px) and (max-width: 1280px) {
        width: 60vw;
	}

	@media (min-width: 768px) and (max-width: 1024px) {
        width: 60vw;
	}

	@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
        width: 60vw;
	}

	@media (min-width: 481px) and (max-width: 767px) {
        width: 90vw;
	}

	@media (min-width: 320px) and (max-width: 480px) {
        width: 90vw;
    }
`

export const SectionTitle = styled.div`
    font-family: Monospace;
    font-size: 20px;
    font-weight; bold;
`

export const RecipeContainer = styled.ol`
    margin: 15px auto;
    display: flex;
    flex-direction: column;
`

export const RecipeItem = styled.li`
    margin: 10px 0;
    font-family: Monospace;
    font-size: 16px;
`