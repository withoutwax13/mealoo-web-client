import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.div`
	background: transparent;
	height: 50px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 10px 30px;
`

export const LogoContainer = styled.div`
	margin: 0;
	padding: 0;
	height: 30px;
`

export const RightHeaderContainer = styled.div`
	margin: 0;
	padding: 0;
	height: 30px;
`

export const MenuContainer = styled.div`
	margin: 0;
	padding: 0;
	height: 30px;
`

export const BurgerMenuContainer = styled.div`
	margin: 0;
	padding: 0;
	@media (min-width: 1281px) {
		display: none; 
	}
	@media (min-width: 1025px) and (max-width: 1280px) {
		display: none;
	}
`

export const NavigationContainer = styled.div`
	margin: 0;
	padding: 0;
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

export const NavLink = styled(Link)`
	color: black;
	font-weight: bold;
	font-size: 15px;
	align-self: center;
	@media (min-width: 1281px) {
		margin: auto 40px;
	}

	@media (min-width: 1025px) and (max-width: 1280px) {
		margin: auto 40px;
	}

	@media (min-width: 768px) and (max-width: 1024px) {
		margin: auto 40px;
	}

	@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
		margin: auto 40px;
	}

	@media (min-width: 481px) and (max-width: 767px) {
		margin: 5px auto;
	}

	@media (min-width: 320px) and (max-width: 480px) {
		margin: 5px auto;
	}
`

export const NavigationItemsContainer = styled.div`
	background: transparent;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`

export const DropNavigationItemsContainer = styled.div`
	position: fixed;
	left: calc(100% - 140px);
	top: 50px;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 120px;
	padding: 30px;
	background-color: white;
	border-radius: 10px;
	box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.4);
`