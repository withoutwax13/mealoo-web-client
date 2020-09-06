import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import AuthButton from '../../../../../components/Button/Auth/index'

import { clientLogIn, clientLogOut } from '../../../../../modules/actions'

import {
			HeroSectionActionButtonContainer,
			ActionButtonMobileContainer,
			ActionButtonTabletContainer,
			ActionButtonDesktopContainer,
} from './style'

const ActionButton = (props) => {

	const { isClientHasAuth, clientLogOut, clientLogIn } = props

	const clickCallback = () => {
		return isClientHasAuth ? clientLogOut : clientLogIn
	}

	return (
		<HeroSectionActionButtonContainer>
			<ActionButtonMobileContainer>
				<AuthButton 
					width={82.955} 
					height={30.682} 
					clickCallback={clickCallback()}
					childrenNode={<h4>{isClientHasAuth ? `LOGOUT` : `JOIN`}</h4>}/>
			</ActionButtonMobileContainer>
			<ActionButtonTabletContainer>
				<AuthButton 
					width={112.223} 
					height={43.690}
					clickCallback={clickCallback()}
					childrenNode={<h2>{isClientHasAuth ? `LOGOUT` : `JOIN`}</h2>}/>
			</ActionButtonTabletContainer>
			<ActionButtonDesktopContainer>
				<AuthButton 
					width={146.159} 
					height={54.479}
					clickCallback={clickCallback()}
					childrenNode={<h1>{isClientHasAuth ? `LOGOUT` : `JOIN`}</h1>}/>
			</ActionButtonDesktopContainer>
		</HeroSectionActionButtonContainer>
	)
}

ActionButton.propTypes = {
	isClientHasAuth: PropTypes.bool,
	clientLogIn: PropTypes.func,
	clientLogOut: PropTypes.func
}

const mapStateToProps = ({isClientHasAuth}) => {
	return {
		isClientHasAuth
	}
}

export default connect(mapStateToProps, { clientLogIn, clientLogOut })(ActionButton)