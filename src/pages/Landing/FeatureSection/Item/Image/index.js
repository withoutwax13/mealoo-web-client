import React from 'react'
import PropTypes from 'prop-types'

import { FeatureItemImageAssetContainer } from './style'

const Image = (props) => {

	const { image } = props

	return (
		<FeatureItemImageAssetContainer>
			{image}
		</FeatureItemImageAssetContainer>
	)
}

Image.propTypes = {
	image: PropTypes.node.isRequired
}

export default Image