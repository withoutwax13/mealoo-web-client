import styled from 'styled-components'

export const Container = styled.div`
	@media (min-width: 1281px) {
		display: flex;
		flex-direction: row;
	}

	@media (min-width: 1025px) and (max-width: 1280px) {
		display: flex;
		flex-direction: row;
	}

	@media (min-width: 768px) and (max-width: 1024px) {
		display: flex;
		flex-direction: row;
	}

	@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
		display: flex;
		flex-direction: row;
	}

	@media (min-width: 481px) and (max-width: 767px) {
		display: flex;
		flex-direction: column;
	}

	@media (min-width: 320px) and (max-width: 480px) {
		display: flex;
		flex-direction: column;
	}
	justify-content: center;
`

export const LeftSection = styled.div`
	display: flex;
	flex-direction: column;
	@media (min-width: 1281px) {
		margin: 0 5px 0 auto;
	}

	@media (min-width: 1025px) and (max-width: 1280px) {
		margin: 0 5px 0 auto;
	}

	@media (min-width: 768px) and (max-width: 1024px) {
		margin: 0 5px 0 auto;
	}

	@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
		margin: 0 5px 0 auto;
	}

	@media (min-width: 481px) and (max-width: 767px) {
		margin: 10px auto;
	}

	@media (min-width: 320px) and (max-width: 480px) {
		margin: 10px auto;
	}
`

export const RightSection = styled.div`
	display: flex;
	flex-direction: column;
	@media (min-width: 1281px) {
		margin: 0 auto 0 5px;
	}

	@media (min-width: 1025px) and (max-width: 1280px) {
		margin: 0 auto 0 5px;
	}

	@media (min-width: 768px) and (max-width: 1024px) {
		margin: 0 auto 0 5px;
	}

	@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
		margin: 0 auto 0 5px;
	}

	@media (min-width: 481px) and (max-width: 767px) {
		margin: 10px auto;
	}

	@media (min-width: 320px) and (max-width: 480px) {
		margin: 10px auto;
	}
`