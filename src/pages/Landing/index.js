import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { LandingPageContainer } from './styles'
import HeroSection from './HeroSection/index'
import FeatureSection from './FeatureSection/index'
import ProductTrialSection from './ProductTrialSection/index'

import { checkIsCurrentLandingPage } from '../../modules/actions'


const Landing = ({checkIsCurrentLandingPage}) => {

	useEffect(()=>{
		checkIsCurrentLandingPage(true)
		return () => {
			checkIsCurrentLandingPage(false)
		}
	}, [])

	return (
		<LandingPageContainer>
			<HeroSection/>
			<FeatureSection/>
			<ProductTrialSection/>
		</LandingPageContainer>
	)
}

Landing.propTypes = {
	checkIsCurrentLandingPage: PropTypes.func.isRequired
}

export default connect(null, { checkIsCurrentLandingPage })(Landing)