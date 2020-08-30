import React from 'react'

import Head from './Head/index'
import Main from './Main/index'

import {
	Container
} from './style'

export default () => {
	return (
		<Container>
			<Head/>
			<Main/>
		</Container>
	)
}