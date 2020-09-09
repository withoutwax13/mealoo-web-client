import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { toggleMealFetch } from '../../../../modules/actions'

import History from '../../../../utils/History'

import { Container } from './style'

import GoBackAsset from '../../../../assets/Meal/goBack.svg'
import ProfileAsset from '../../../../assets/Meal/profile.svg'

const NavPanel = (props) => {

	const { toggleMealFetch } = props

	return (
		<Container>
			<GoBackAsset style={{cursor: 'pointer'}} width={25} onClick={()=>{ History.push('/set'); toggleMealFetch(false); }}/>
			<ProfileAsset style={{cursor: 'pointer'}} width={25} onClick={()=>{ History.push('/user'); toggleMealFetch(false); }}/>
		</Container>
	)
}

NavPanel.propTypes = {
	toggleMealFetch: PropTypes.func
}

export default connect(null, {toggleMealFetch})(NavPanel)