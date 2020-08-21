import React from 'react'
import PropTypes from 'prop-types'

import Detail from './Content/Detail/index'
import Label from './Content/Label/index'
import Image from './Image/index'
import { FeatureItemContainer } from './style'
import { ContentContainer } from './Content/style'

const Item = (props) => {
	
	const { label, details, image } = props.data

	return (
		<FeatureItemContainer>
			<ContentContainer>
				<Label label={label}/>
				<Detail details={details}/>
			</ContentContainer>
			<Image image={image}/>
		</FeatureItemContainer>
	)
}

Item.propTypes = {
	data: PropTypes.object.isRequired
}

export default Item