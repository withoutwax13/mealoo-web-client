import styled from 'styled-components'

export const Container = styled.div`
	@media (min-width: 1281px) {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	@media (min-width: 1025px) and (max-width: 1280px) {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	@media (min-width: 768px) and (max-width: 1024px) {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	@media (min-width: 481px) and (max-width: 767px) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@media (min-width: 320px) and (max-width: 480px) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`

export const ImageContainer = styled.div`
	width: 300px;
	height: 200px;
	border-radius: 20px;
	border: 1px solid black;
	background-color: white;
`
export const LabelContainer = styled.div`
	width: 300px;
	overflow-wrap: break-word;
	@media (min-width: 1281px) {
		margin: 50px;
	}

	@media (min-width: 1025px) and (max-width: 1280px) {
		margin: 50px;
	}

	@media (min-width: 768px) and (max-width: 1024px) {
		margin: 50px;
	}

	@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
		margin: 50px;
	}

	@media (min-width: 481px) and (max-width: 767px) {
		display: flex;
		justify-content: center;
	}

	@media (min-width: 320px) and (max-width: 480px) {
		display: flex;
		justify-content: center;
	}
`

export const LabelText = styled.h1`
	font-weight: bold;

`