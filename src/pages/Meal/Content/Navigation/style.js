import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	width: 200px;
	margin: 10px 100px;
`

export const NavigationItem = styled.div`
	color: black;
	font-size: 16px;
	font-weight: bold;
	margin: 0 10px 0 10px;
	text-decoration: ${(props)=>props.selected === true ? `underline` : `none`};
	text-decoration-color: orange;
	cursor: pointer;
`