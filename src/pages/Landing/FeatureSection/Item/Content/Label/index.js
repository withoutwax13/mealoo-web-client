import React from 'react'
import PropTypes from 'prop-types'

import {
		FeatureItemMainLabelContainer,
		FeatureItemMainLabel
} from './style'

const Label = (props) => {

	const { label } = props

	return (
		<FeatureItemMainLabelContainer>
			<FeatureItemMainLabel>
				{label}
			</FeatureItemMainLabel>
		</FeatureItemMainLabelContainer>
	)
}

Label.propTypes = {
	label: PropTypes.string.isRequired
}

export default Label