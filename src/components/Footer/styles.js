import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FooterContainer = styled.footer`
	margin: 0;
	background-color: #325d79ff;
	padding-top: 25px; padding-bottom: 25px;
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
		flex-direction: column-reverse;
		align-items: center;
	}

	@media (min-width: 320px) and (max-width: 480px) {
		display: flex;
		flex-direction: column-reverse;
		align-items: center;
	}
`

export const TextFooterSectionContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const NonTextSectionContainer = styled.div`
	margin: auto 100px;
`

export const LogoContainer = styled.div`
	@media (min-width: 481px) and (max-width: 767px) {
		margin-bottom: 10px;
	}

	@media (min-width: 320px) and (max-width: 480px) {
		margin-bottom: 10px;
	}
`

export const FooterNavItemsContainer = styled.div`
	@media (min-width: 1281px) {
		display: flex;
		flex-direction: row;
		margin-bottom: 5px;
	}

	@media (min-width: 1025px) and (max-width: 1280px) {
		display: flex;
		flex-direction: row;
		margin-bottom: 5px;
	}

	@media (min-width: 768px) and (max-width: 1024px) {
		display: flex;
		flex-direction: row;
		margin-bottom: 5px;
	}

	@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
		display: flex;
		flex-direction: row;
		margin-bottom: 5px;
	}

	@media (min-width: 481px) and (max-width: 767px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 10px;
	}

	@media (min-width: 320px) and (max-width: 480px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 10px;
	}
`

export const CopyrightTextContainer = styled.div`
	color: white;
`

export const NavLink = styled(Link)`
	color: white;
	font-size: 16px;
	@media (min-width: 1281px) {
		margin: 0 10px 5px 10px;
	}

	@media (min-width: 1025px) and (max-width: 1280px) {
		margin: 0 10px 5px 10px;
	}

	@media (min-width: 768px) and (max-width: 1024px) {
		margin: 0 10px 5px 10px;
	}

	@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
		margin: 0 10px 5px 10px;
	}

	@media (min-width: 481px) and (max-width: 767px) {
		margin: 3px 0 3px 0;	
	}

	@media (min-width: 320px) and (max-width: 480px) {
		margin: 3px 0 3px 0;	
	}
`