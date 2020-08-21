import React from 'react'
import PropTypes from 'prop-types'

import {
		FeatureItemDetailsContainer,
		FeatureItemDetails
} from './style'

const Detail = (props) => {

	const { details } = props

	return (
		<FeatureItemDetailsContainer>
			<FeatureItemDetails>
				{details}
			</FeatureItemDetails>
		</FeatureItemDetailsContainer>
	)
}

Detail.propTypes = {
	details: PropTypes.string.isRequired
}

export default Detail