import styled from 'styled-components'

export const HeroSectionMainHeading = styled.h1`
	color: #f26627ff;
	font-family: sans serif;
	letter-spacing: 2px;
	@media (min-width: 1281px) {
		font-weight: bold;
		font-size: 85.33px;
	}

	@media (min-width: 1025px) and (max-width: 1280px) {
		font-weight: bold;
		font-size: 85.33px;
	}

	@media (min-width: 768px) and (max-width: 1024px) {
		font-weight: bold;
		font-size: 64px;
	}

	@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
		font-weight: bold;
		font-size: 64px;
	}

	@media (min-width: 481px) and (max-width: 767px) {
		font-weight: bold;
		font-size: 40px;
	}

	@media (min-width: 320px) and (max-width: 480px) {
		font-weight: bold;
		font-size: 40px;
	}
`
export const HeroSectionMainHeadingContainer = styled.div`
	margin: 5px auto 5px 0;
`