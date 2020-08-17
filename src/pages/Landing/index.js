import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { checkIsCurrentLandingPage } from '../../modules/actions'

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


// SVG image assets

import MobileUltraImageAsset1 from '../../assets/Landing/ultra-mobile/1.svg'
import MobileImageAsset1 from '../../assets/Landing/mobile/1.svg'
import TabletImageAsset1 from '../../assets/Landing/tablet/1.svg'
import DesktopImageAsset1 from '../../assets/Landing/desktop/1.svg'
import DesktopHDImageAsset1 from '../../assets/Landing/desktophd/1.svg'

import MobileUltraImageAsset2 from '../../assets/Landing/ultra-mobile/2.svg'
import MobileImageAsset2 from '../../assets/Landing/mobile/2.svg'
import TabletImageAsset2 from '../../assets/Landing/tablet/2.svg'
import DesktopImageAsset2 from '../../assets/Landing/desktop/2.svg'
import DesktopHDImageAsset2 from '../../assets/Landing/desktophd/2.svg'

import MobileUltraImageAsset3 from '../../assets/Landing/ultra-mobile/3.svg'
import MobileImageAsset3 from '../../assets/Landing/mobile/3.svg'
import TabletImageAsset3 from '../../assets/Landing/tablet/3.svg'
import DesktopImageAsset3 from '../../assets/Landing/desktop/3.svg'
import DesktopHDImageAsset3 from '../../assets/Landing/desktophd/3.svg'

import MobileUltraImageAsset4 from '../../assets/Landing/ultra-mobile/4.svg'
import MobileImageAsset4 from '../../assets/Landing/mobile/4.svg'
import TabletImageAsset4 from '../../assets/Landing/tablet/4.svg'
import DesktopImageAsset4 from '../../assets/Landing/desktop/4.svg'
import DesktopHDImageAsset4 from '../../assets/Landing/desktophd/4.svg'

import MobileUltraImageAsset5 from '../../assets/Landing/ultra-mobile/5.svg'
import MobileImageAsset5 from '../../assets/Landing/mobile/5.svg'
import TabletImageAsset5 from '../../assets/Landing/tablet/5.svg'
import DesktopImageAsset5 from '../../assets/Landing/desktop/5.svg'
import DesktopHDImageAsset5 from '../../assets/Landing/desktophd/5.svg'

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
	
	const slideAssets = (deviceType) => {
		switch(deviceType){
			case 'ultra-mobile':
				switch(time){
					case 1:
						return <MobileUltraImageAsset1/>
					case 2:
						return <MobileUltraImageAsset2/>
					case 3:
						return <MobileUltraImageAsset3/>
					case 4:
						return <MobileUltraImageAsset4/>
					case 5:
						return <MobileUltraImageAsset5/>
					default:
						break
				}
				break
			case 'mobile':
				switch(time){
					case 1:
						return <MobileImageAsset1/>
					case 2:
						return <MobileImageAsset2/>
					case 3:
						return <MobileImageAsset3/>
					case 4:
						return <MobileImageAsset4/>
					case 5:
						return <MobileImageAsset5/>
					default:
						break
				}
				break
			case 'tablet':
				switch(time){
					case 1:
						return <TabletImageAsset1/>
					case 2:
						return <TabletImageAsset2/>
					case 3:
						return <TabletImageAsset3/>
					case 4:
						return <TabletImageAsset4/>
					case 5:
						return <TabletImageAsset5/>
					default:
						break
				}
				break
			case 'desktop':
				switch(time){
					case 1:
						return <DesktopImageAsset1/>
					case 2:
						return <DesktopImageAsset2/>
					case 3:
						return <DesktopImageAsset3/>
					case 4:
						return <DesktopImageAsset4/>
					case 5:
						return <DesktopImageAsset5/>
					default:
						break
				}
				break
			case 'desktophd':
				switch(time){
					case 1:
						return <DesktopHDImageAsset1/>
					case 2:
						return <DesktopHDImageAsset2/>
					case 3:
						return <DesktopHDImageAsset3/>
					case 4:
						return <DesktopHDImageAsset4/>
					case 5:
						return <DesktopHDImageAsset5/>
					default:
						break
				}
				break;
			default:
				break
		}
	}

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
					{slideAssets('desktophd')}
				</HeroSectionImageStyleDesktopHDContainer>
				<HeroSectionImageStyleDesktopContainer>
					{slideAssets('desktop')}
				</HeroSectionImageStyleDesktopContainer>
				<HeroSectionImageStyleTabletContainer>
					{slideAssets('tablet')}
				</HeroSectionImageStyleTabletContainer>
				<HeroSectionImageStyleMobileContainer>
					{slideAssets('mobile')}
				</HeroSectionImageStyleMobileContainer>
				<HeroSectionImageStyleUltraMobileContainer>
					{slideAssets('ultra-mobile')}
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