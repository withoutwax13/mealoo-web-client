import styled, { keyframes } from 'styled-components'

export const HeroSectionImageContainerAnimation = keyframes`
	0% { margin: 160px auto auto auto; }
	20% { margin: 140px auto auto auto; }
	40% { margin: 160px auto auto auto; }
	60% { margin: 140px auto auto auto; }
	100% { margin: 160px auto auto auto; }
`

export const HeroSectionImageStyleUltraMobileContainer = styled.div`
	animation-name: ${HeroSectionImageContainerAnimation};
	animation-duration: 5s;
	animation-iteration-count: infinite;
	margin: 160px auto auto auto;
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

	@media (min-width: 481px) and (max-width: 767px) {
		display: none;
	}
`
export const HeroSectionImageStyleMobileContainer = styled.div`
	animation-name: ${HeroSectionImageContainerAnimation};
	animation-duration: 5s;
	animation-iteration-count: infinite;
	margin: 160px auto auto auto;
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

	@media (min-width: 320px) and (max-width: 480px) {
		display: none;	
	}
`
export const HeroSectionImageStyleTabletContainer = styled.div`
	animation-name: ${HeroSectionImageContainerAnimation};
	animation-duration: 5s;
	animation-iteration-count: infinite;
	margin: 160px auto auto auto;
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
export const HeroSectionImageStyleDesktopContainer = styled.div`
	animation-name: ${HeroSectionImageContainerAnimation};
	animation-duration: 5s;
	animation-iteration-count: infinite;
	margin: 160px auto auto auto;
	@media (min-width: 1281px) {
		display: none;
	}

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
export const HeroSectionImageStyleDesktopHDContainer = styled.div`
	animation-name: ${HeroSectionImageContainerAnimation};
	animation-duration: 5s;
	animation-iteration-count: infinite;
	margin: 160px auto auto auto;

	@media (min-width: 1025px) and (max-width: 1280px) {
		display: none;
	}

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