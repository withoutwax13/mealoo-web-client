import React from 'react'
import PropTypes from 'prop-types'

import { Button } from './style'

const AuthButton = (props) => {
	const { height, size, width, clickCallback, customStyle, children } = props
	return (
		<Button 
			width={width} 
			height={height} 
			onClick={clickCallback}
			customStyle={customStyle}>
				{children}
		</Button>
	)
}

AuthButton.propTypes = {
	height: PropTypes.number.isRequired,
	width: PropTypes.number.isRequired,
	clickCallback: PropTypes.func,
	customStyle: PropTypes.string,
	children: PropTypes.node
}

export default AuthButton