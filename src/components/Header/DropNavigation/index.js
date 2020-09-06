import React from 'react'
import { connect } from 'react-redux' 
import PropTypes from 'prop-types'

import AuthButton from '../../Button/Auth/index'

import { NavLink, DropNavigationItemsContainer } from '../styles'

import { clientLogIn, clientLogOut } from '../../../modules/actions'

const DropNavigation = (props) => {

	const { onPress, clientLogOut, clientLogIn, isClientHasAuth } = props

	return (
		<DropNavigationItemsContainer>
			<NavLink to='/help' onClick={onPress}>Help</NavLink>
			<NavLink to='/about' onClick={onPress}>About</NavLink>
			<NavLink to='/contact-us' onClick={onPress}>Contact</NavLink>
			<AuthButton 
				height={30} width={90} 
				clickCallback={()=>{
					onPress()
					isClientHasAuth ? clientLogOut() : clientLogIn()
				}}
				customStyle={`margin-left: 0; align-self: center;`}
				childrenNode={<h5>{isClientHasAuth ? `LOGOUT` : `JOIN`}</h5>}/>
		</DropNavigationItemsContainer>
	)
}

DropNavigation.propTypes = {
	onPress: PropTypes.func.isRequired,
	isClientHasAuth: PropTypes.bool,
	clientLogIn: PropTypes.func.isRequired,
	clientLogOut: PropTypes.func.isRequired
}

const mapStateToProps = ({ isClientHasAuth }) => {
	return {
		isClientHasAuth
	}
}

export default connect(mapStateToProps, { clientLogIn, clientLogOut })(DropNavigation)