import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    @media (min-width: 1281px) {
		flex-direction: row;
		justify-content: space-around;
		margin-bottom: 50px;
	    margin-top: 50px;
	}

	@media (min-width: 1025px) and (max-width: 1280px) {
		flex-direction: row;
		justify-content: space-around;
		margin-bottom: 50px;
	    margin-top: 50px;
	}

	@media (min-width: 768px) and (max-width: 1024px) {
		flex-direction: row;
		justify-content: space-around;
		margin-bottom: 50px;
	    margin-top: 50px;
	}

	@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
		flex-direction: row;
		justify-content: space-around;
		margin-bottom: 50px;
	    margin-top: 50px;
	}

	@media (min-width: 481px) and (max-width: 767px) {
		flex-direction: column;
		justify-content: center;
		padding: 20px auto;
	}

	@media (min-width: 320px) and (max-width: 480px) {
		flex-direction: row;
		justify-content: center;
		padding: 20px auto;
	}
`