import React, { useEffect, useState, Fragment } from 'react'

import { getImageAssets } from './getImageAsset'

import {
		HeroSectionImageStyleUltraMobileContainer,
		HeroSectionImageStyleMobileContainer,
		HeroSectionImageStyleTabletContainer,
		HeroSectionImageStyleDesktopContainer,
		HeroSectionImageStyleDesktopHDContainer,
} from './style'

export default () => {

	const [ time, setTime ] = useState(1)

	useEffect(()=>{
		const timer = setInterval(()=>{
			time === 5 ? setTime(1) : setTime(time + 1)
		}, 10000)
		return () => {
			clearInterval(timer)
		}
	}, [time])

	return (
		<Fragment>
			<HeroSectionImageStyleDesktopHDContainer>
				{getImageAssets('desktophd', time)}
			</HeroSectionImageStyleDesktopHDContainer>
			<HeroSectionImageStyleDesktopContainer>
				{getImageAssets('desktop', time)}
			</HeroSectionImageStyleDesktopContainer>
			<HeroSectionImageStyleTabletContainer>
				{getImageAssets('tablet', time)}
			</HeroSectionImageStyleTabletContainer>
			<HeroSectionImageStyleMobileContainer>
				{getImageAssets('mobile', time)}
			</HeroSectionImageStyleMobileContainer>
			<HeroSectionImageStyleUltraMobileContainer>
				{getImageAssets('ultra-mobile', time)}
			</HeroSectionImageStyleUltraMobileContainer>
		</Fragment>
	)
}