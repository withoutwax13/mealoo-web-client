import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Button } from './style'

const AuthButton = (props) => {
	const { height, size, width, clickCallback, customStyle, isClientHasAuth } = props
	return (
		<Button 
			width={width} 
			height={height} 
			onClick={clickCallback}
			customStyle={customStyle}>
				{isClientHasAuth ? <h5>LOGOUT</h5> : <h5>JOIN</h5>}
		</Button>
	)
}

AuthButton.propTypes = {
	height: PropTypes.number.isRequired,
	width: PropTypes.number.isRequired,
	clickCallback: PropTypes.func,
	customStyle: PropTypes.string,
	isClientHasAuth: PropTypes.any
}

const mapStateToProps = ({ isClientHasAuth }) => {
	return {
		isClientHasAuth
	}
}

export default connect(mapStateToProps)(AuthButton)