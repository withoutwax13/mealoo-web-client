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
	margin: auto 40px;
`

export const NavigationItemsContainer = styled.div`
	background: transparent;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`