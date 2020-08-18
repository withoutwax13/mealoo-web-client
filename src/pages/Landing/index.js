import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { checkIsCurrentLandingPage } from '../../modules/actions'
import { slideAssets } from './functions'

// Logical components

import AuthButton from '../../components/Button/Auth/index'

// Style components

import {
		LandingPageContainer, 
		HeroSectionContainer, 
		FeatureCollectionContainer, 
		FeatureItemContainer,
		ProductTrialContainer,
		HeroSectionMainContent,
		HeroSectionMainHeading,
		HeroSectionMainHeadingContainer,
		HeroSectionSubHeading,
		HeroSectionSubHeadingContainer,
		HeroSectionActionButtonContainer,
		HeroSectionImageStyleUltraMobileContainer,
		HeroSectionImageStyleMobileContainer,
		HeroSectionImageStyleTabletContainer,
		HeroSectionImageStyleDesktopContainer,
		HeroSectionImageStyleDesktopHDContainer,
		ActionButtonMobileContainer,
		ActionButtonTabletContainer,
		ActionButtonDesktopContainer
	} from './styles'


const Landing = ({checkIsCurrentLandingPage}) => {

	const [ time, setTime ] = useState(1)
	useEffect(()=>{
		checkIsCurrentLandingPage(true)
		const timer = setInterval(()=>{
			time === 5 ? setTime(1) : setTime(time + 1)
		}, 10000)
		return () => {
			checkIsCurrentLandingPage(false)
			clearInterval(timer)
		}
	}, [time])

	return (
		<LandingPageContainer>
			<HeroSectionContainer>
				<HeroSectionMainContent>
					<HeroSectionMainHeadingContainer>
						<HeroSectionMainHeading>
							just eat
						</HeroSectionMainHeading>
					</HeroSectionMainHeadingContainer>
					<HeroSectionSubHeadingContainer>
						<HeroSectionSubHeading>
							WE'LL HANDLE THE REST
						</HeroSectionSubHeading>
					</HeroSectionSubHeadingContainer>
					<HeroSectionActionButtonContainer>
						<ActionButtonMobileContainer>
							<AuthButton width={82.955} height={30.682}>
								<h4>JOIN</h4>
							</AuthButton>
						</ActionButtonMobileContainer>
						<ActionButtonTabletContainer>
							<AuthButton width={112.223} height={43.690}>
								<h2>JOIN</h2>
							</AuthButton>
						</ActionButtonTabletContainer>
						<ActionButtonDesktopContainer>
							<AuthButton width={146.159} height={54.479}>
								<h1>JOIN</h1>
							</AuthButton>
						</ActionButtonDesktopContainer>
					</HeroSectionActionButtonContainer>
				</HeroSectionMainContent>

				{
					// not yet done; will be revisited in the future sprints
				}

				<HeroSectionImageStyleDesktopHDContainer>
					{slideAssets('desktophd', time)}
				</HeroSectionImageStyleDesktopHDContainer>
				<HeroSectionImageStyleDesktopContainer>
					{slideAssets('desktop', time)}
				</HeroSectionImageStyleDesktopContainer>
				<HeroSectionImageStyleTabletContainer>
					{slideAssets('tablet', time)}
				</HeroSectionImageStyleTabletContainer>
				<HeroSectionImageStyleMobileContainer>
					{slideAssets('mobile', time)}
				</HeroSectionImageStyleMobileContainer>
				<HeroSectionImageStyleUltraMobileContainer>
					{slideAssets('ultra-mobile', time)}
				</HeroSectionImageStyleUltraMobileContainer>

			</HeroSectionContainer>
			<FeatureCollectionContainer>
				<FeatureItemContainer>
					Feature 1
				</FeatureItemContainer>
				<FeatureItemContainer>
					Feature 2
				</FeatureItemContainer>
				<FeatureItemContainer>
					Feature 3
				</FeatureItemContainer>
			</FeatureCollectionContainer>
			<ProductTrialContainer>
				ProductTrialContainer
			</ProductTrialContainer>
		</LandingPageContainer>
	)
}

Landing.propTypes = {
	checkIsCurrentLandingPage: PropTypes.func.isRequired
}

export default connect(null, { checkIsCurrentLandingPage })(Landing)