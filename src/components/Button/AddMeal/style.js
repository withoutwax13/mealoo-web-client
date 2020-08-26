import styled from 'styled-components'

export const Button = styled.button`
	color: white;
	background-color: orange;
	height: ${(props)=>`${props.height ? props.height : 30}px`};
	width: ${(props)=>`${props.width ? props.width : 50}px`};
	border-radius: 13px;
	border: none;
	outline: none;
	cursor: pointer;
	&:active {
		transform: scale(1.05, 1.05);
	}
	${(props)=>{
		if(props.customStyle){ return `${props.customStyle}` }
	}}
`