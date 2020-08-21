import styled from 'styled-components'

export const HeroSectionActionButtonContainer = styled.div`
	margin: 20px auto 5px 0;
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