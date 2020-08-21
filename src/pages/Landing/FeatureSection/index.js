import React from 'react'

import Item from './Item'
import { FeatureCollectionContainer } from './style'

import Feature1ImageAsset from '../../../assets/Landing/features/1.svg'
import Feature2ImageAsset from '../../../assets/Landing/features/2.svg'
import Feature3ImageAsset from '../../../assets/Landing/features/3.svg'

export default () => {

	const productFeatures = [
		{
			label: 'Get meal recommendations',
			details: 'Mealoo gives meal choices based on your BMI, body goals, budget, etc. No more worries on hassle and math!',
			image: <Feature1ImageAsset/>
		},
		{
			label: 'Adjust recommendation filters',
			details: 'Mealoo asks for your specific parameters and help on specifying what kind of food you must eat. Your data will lead the way!',
			image: <Feature2ImageAsset/>
		},
		{
			label: 'Create meal journals',
			details: 'Mealoo allows you to plan on regular basis what goals you need to set on your body, amount of nutritonal intake you must have and a lot more!',
			image: <Feature3ImageAsset/>
		}
	]

	return (
		<FeatureCollectionContainer>
			{productFeatures.map((data, index)=>{
				return (
					<Item key={index} data={data}/>
				)
			})}
		</FeatureCollectionContainer>
	)
}