import React from 'react'

import Content from './Content/index'
import Head from './Head/index'

import { PageContainer } from './style'

const Meal = (props) => {
	return (
		<PageContainer>
			<Head/>
			<Content/>
		</PageContainer>
	)
}

export default Meal