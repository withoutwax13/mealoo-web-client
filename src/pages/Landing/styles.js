import styled from 'styled-components'

export const LandingPageContainer = styled.main`
	width: 100%;
`

export const HeroSectionContainer = styled.div`
	height: 500px;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`

export const FeatureCollectionContainer = styled.div`
	width: 100%;
`

export const FeatureItemContainer = styled.div`
	height: 500px;
	width: 100%;
`

export const ProductTrialContainer = styled.div`
	height: 500px;
	width: 100%;
`

export const HeroSectionMainContent = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 40px;
	margin-left: 10%;
`

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

export const HeroSectionSubHeading = styled.h3`
	color: #f9a26cff;
	font-family: sans serif;
	@media (min-width: 1281px) {
		font-weight: bold;
		font-size: 32px;
	}

	@media (min-width: 1025px) and (max-width: 1280px) {
		font-weight: bold;
		font-size: 32px;
	}

	@media (min-width: 768px) and (max-width: 1024px) {
		font-weight: bold;
		font-size: 24px;
	}

	@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
		font-weight: bold;
		font-size: 24px;
	}

	@media (min-width: 481px) and (max-width: 767px) {
		font-weight: bold;
		font-size: 17.33px;
	}

	@media (min-width: 320px) and (max-width: 480px) {
		font-weight: bold;
		font-size: 17.33px;
	}
`
export const HeroSectionSubHeadingContainer = styled.div`
	margin: 5px auto 5px 0;
	@media (min-width: 1281px) {
		overflow-wrap: break-word;
		width: 266.319px;
		height: 64.734px;
	}

	@media (min-width: 1025px) and (max-width: 1280px) {
		overflow-wrap: break-word;
		width: 266.319px;
		height: 64.734px;
	}

	@media (min-width: 768px) and (max-width: 1024px) {
		overflow-wrap: break-word;
		width: 200.014px;
		height: 48.551px;
	}

	@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
		overflow-wrap: break-word;
		width: 200.014px;
		height: 48.551px;
	}

	@media (min-width: 481px) and (max-width: 767px) {
		overflow-wrap: break-word;
		width: 144.76px;
		height: 35.064px;
	}

	@media (min-width: 320px) and (max-width: 480px) {
		overflow-wrap: break-word;
		width: 144.76px;
		height: 35.064px;
	}
`

export const HeroSectionActionButtonContainer = styled.div`
	margin: 20px auto 5px 0;
`

export const HeroSectionImageStyle = styled.div`
	margin: 80px 0 auto auto;
	border-top: 1px solid silver;
	border-left: 1px solid silver;
	border-bottom: 1px solid silver;
	border-top-left-radius: 20px;
	border-bottom-left-radius: 20px;
	box-shadow: gray 0 0 5px 0;
	@media (min-width: 1281px) {
		width: 600px;
		height: 300px;
	}

	@media (min-width: 1025px) and (max-width: 1280px) {
		width: 600px;
		height: 300px;
	}

	@media (min-width: 768px) and (max-width: 1024px) {
		width: 400px;
		height: 300px;
	}

	@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
		width: 400px;
		height: 300px;	
	}

	@media (min-width: 481px) and (max-width: 767px) {
		width: 350px;
		height: 300px;
	}

	@media (min-width: 320px) and (max-width: 480px) {
		width: 350px;
		height: 300px;	
	}
`

export const ActionButtonMobileContainer = styled.div`
	@media (min-width: 1281px) {
		display: none;
	}

	@media (min-width: 1025px) and (max-width: 1280px) {
		display: none;
	}

	@media (min-width: 768px) and (max-width: 1024px) {
		display: none;
	}

	@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
		display: none;
	}
`

export const ActionButtonTabletContainer = styled.div`
	@media (min-width: 1281px) {
		display: none;
	}

	@media (min-width: 1025px) and (max-width: 1280px) {
		display: none;
	}
	@media (min-width: 481px) and (max-width: 767px) {
		display: none;
	}

	@media (min-width: 320px) and (max-width: 480px) {
		display: none;
	}
`
export const ActionButtonDesktopContainer = styled.div`
	@media (min-width: 768px) and (max-width: 1024px) {
		display: none;
	}

	@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
		display: none;
	}
	@media (min-width: 481px) and (max-width: 767px) {
		display: none;
	}

	@media (min-width: 320px) and (max-width: 480px) {
		display: none;
	}
`