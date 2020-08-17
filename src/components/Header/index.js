import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Menu from './Menu/index'
import { HeaderContainer, LogoContainer, RightHeaderContainer } from './styles'

import MealooLogo from '../../assets/mealoo-logo.svg'

const Header = ({isLocationLandingPage}) => {
	return (
		<HeaderContainer isLocationLandingPage={isLocationLandingPage}>
			<LogoContainer>
				<MealooLogo/>
			</LogoContainer>
			<RightHeaderContainer>
				<Menu/>
			</RightHeaderContainer>
		</HeaderContainer>
	)
}

const mapStateToProps = ({isLocationLandingPage}) => {
	return {
		isLocationLandingPage: isLocationLandingPage
	}
}

Header.propTypes = {
	isLocationLandingPage: PropTypes.bool
}

export default connect(mapStateToProps)(Header)